/*
	create dolphins functions (number of dolphins do you want)
	return 0, generating an object with dolphin locations inside of dimensional space max-min
*/
function createDolphins(){
	
	dolphinNo = dsaDolphinNumbers;
	//dimentions vars must have same number of vars
	if(dsaDimensionalSpaceMax.length!=dsaDimensionalSpaceMin.length){
		alert("Dimensions not match");
		return 0;
	}
	
	// each dolphing have a dolp(position), individual(best match of position), neighborhood(best match near).... at first time all the values are equals
	dolphins = [];
	Dolphin = {dolp:[], individual:{"axys":[], "fitness":0}, neighborhood:{"axys":[], "fitness":0}, firstFitness:0};
	dolp = Dolphin;
	dolpDim = 0;
	dd = 0;//distance

	//creating dolphins
	for(x = 0; x < dolphinNo; x++){
		dolp = {dolp:[], individual:{"axys":[], "fitness":0}, neighborhood:{"axys":[], "fitness":0}, firstFitness:0};
	

		for(y = 0; y < dsaDimensionalSpaceMin.length; y++){
			//creating dimensions for dolphin
			//dolp Position, in Y iteration, each iteration its an dimensional space(search var) (x,y,z...)
			dolpPos = (Math.random() * (dsaDimensionalSpaceMax[y]-dsaDimensionalSpaceMin[y])) + dsaDimensionalSpaceMin[y];
			dolp.dolp.push(dolpPos);
			
		}
	
		//creatingIndividualOptimalSolution
		dolp.individual.fitness = parseFloat(fitnessFunction(dolp.dolp));
		dolp.individual.axys=dolp.dolp;
		
		fitByDolp.push(fitnessFunction(dolp.dolp));
		dolp.firstFitness = parseFloat(fitnessFunction(dolp.dolp));
		
		//creatingNeighborhoodOptimalSolution   
		dolp.neighborhood.fitness = fitnessFunction(dolp.dolp);
		dolp.neighborhood.axys=dolp.dolp;
		dolphins.push(dolp);
	}
	ctx.clear();
	ctx.rulerInside(dsaDimensionalSpaceMax, dsaDimensionalSpaceMin);
	ctx.setDolphins(dolphins, dsaDimensionalSpaceMax, dsaDimensionalSpaceMin);
	dolphinFieldDescription(dolphins);
	
}


//search  phase

searchPhase = function(callback){
	v = [];
	
	//loop by number of directions
	for(i = 0; i<dsaMDirection; i++){
		sound = [];
		for(j = 0; j<noDimensions; j++){
			//del 0-9 de forma aleatoria, para generar el M random direccion			
			if(((Math.floor(Math.random() * (2 - 0)) + 0)%2)==0){
				sound.push(parseFloat(dsaSpeed));
			}else{
				sound.push(parseFloat(-dsaSpeed));
			}
			
		}
		v.push(sound);
	}
	
	//new solution	
	//E is for temporal dolphins solutions(echo)
	E = [];
	contador=0;
	neigh = false;
	for(i = 0; i<dolphins.length; i++){
		eTempAll = {"mDir":[]};
		for(j = 0; j<dsaMDirection; j++){
			sound = v[j];
			dolp = dolphins[i].dolp;
			solution=[];
			eTmpM = {"time":[]};
			minTmp = 0;
			minLoc = [];
			min = 0;
			for(k = 0; k<=dsaTime; k++){
				eTmpT={"axys":[], "fitness":0};
				//inicia desde k para emitir el eco desde la raiz
				for(l = 0; l<dolp.length; l++){
					solutionNow = parseFloat(dolphins[i].dolp[l])+(sound[l]*dsaSpeed*k);
					eTmpT.axys.push(solutionNow);
				}
				//tomando el fitness
				eTmpT.fitness = parseFloat(fitnessFunction(eTmpT.axys));
				
				//calculando el minimo
				if(k==0){
					min = eTmpT.fitness;
					minLoc = eTmpT;
				}
				
				if(min>eTmpT.fitness){
					minLoc = eTmpT;
					min = eTmpT.fitness;
				}
				
				//graficando todas las m direcciones
				ctx.setEchoDirections(dolp[0], dolp[1], eTmpT);
				eTmpM.time.push(eTmpT);
			}
			//cambiando el fitness encontrado por el fitness vecino
			if(parseFloat(minLoc.fitness)<parseFloat(dolphins[i].neighborhood.fitness)){
				neigh = true;
				dolphins[i].neighborhood.axys=minLoc.axys;
				dolphins[i].neighborhood.fitness = parseFloat(minLoc.fitness);
			}
			if(dolphins[i].individual.fitness>dolphins[i].neighborhood.fitness){
				//dolphins[i].individual.fitness=parseFloat(dolphins[i].neighborhood.fitness);
				//dolphins[i].individual.axys = dolphins[i].neighborhood.axys;
			}
			//graficando mejor(mas bajo)
			ctx.setEchoDirectionsByMin(dolp[0], dolp[1], minLoc);
			eTempAll.mDir.push(eTmpM);
		}
		
		
		////////////revisar por que esto va dentro del ciclo
		if(!neigh){
			//console.log("no hay mejora");
			dolphins[i].neighborhood.axys=dolphins[i].individual.axys;
			dolphins[i].neighborhood.fitness = parseFloat(dolphins[i].individual.fitness);
		}
		//console.log(dolphins[i].dolp);
		neigh = false;
		
		E.push(eTempAll);
	}
	dolphinFieldDescription(dolphins);
	
	//callPhase(dolphins[i].neighborhood, dsaDimensionalSpaceMax, dsaDimensionalSpaceMin);
	if(callback!=0){
		callback();	
	}
	
};


//callphase
//se decide cual es el minimo
minCallPhase = 0;
minDolphinCallPhase = 0;
callPhase = function(callback){
	minCallPhase = 0;
	minDolphinCallPhase = 0;
	neighborhood = false;
	for(i = 0; i<dolphins.length; i++){
		//first iteration get first dolphin fitness
		if(i==0){
			minCallPhase = dolphins[i].individual.fitness;
			minDolphinCallPhase = i;
		}
		
		if(minCallPhase>dolphins[i].neighborhood.fitness){
			neighborhood = true;
			minCallPhase = dolphins[i].neighborhood.fitness;
			minDolphinCallPhase = i;
		}else{
		}
	}
	//printing
	ctx.setBestFitnessFound(dolphins[minDolphinCallPhase].neighborhood, dsaDimensionalSpaceMax, dsaDimensionalSpaceMin);
	if(callback!=0){
		callback();	
	}
};

//sirve para ver si no se sale de los rangos maximos y minimos
movByDolp = [];
receptionPhase = function(callback){
	movByDolp = [];	
	for(i = 0; i<dolphins.length; i++){
		movAxysDolp = [];
		for(j = 0; j<dolphins[i].dolp.length; j++){
			//obtiene la diferencia entre el delfin y el lugar donde se encontro el fitness global
			diffDolpToFitness = parseFloat(dolphins[minDolphinCallPhase].neighborhood.axys[j]-dolphins[i].dolp[j]);
			//al resultado de arriba se divide entre el fitness local
			mov = diffDolpToFitness*(1/dolpSpeed);
			//movimiento mas velocidad de delfin
			if(mov == "Infinity" || mov == "-Infinity" || mov == "NaN"){
				mov = 0;
			}
			movAxysDolp.push(mov);
		}
		movByDolp.push(movAxysDolp);
	}
	if(callback!=0){
		callback();	
	}
};


predationPhase = function(callback){
	//console.log(movByDolp);
	for(i = 0; i<dolphins.length; i++){
		for(j = 0; j<dolphins[i].neighborhood.axys.length; j++){
			mov = movByDolp[i][j]+dolphins[i].individual.axys[j];
			if(mov>dsaDimensionalSpaceMax[j] || mov<dsaDimensionalSpaceMin[j] || mov == "NaN"){
			}else{
				//console.log("esto " + dolphins[i].individual.axys[j] + " con "+ movByDolp[i][j]+" se mueve a "+mov);
				dolphins[i].individual.axys[j] = mov;
			}
		}
		//dolphinFieldDescription(dolphins);
		//console.log(fitnessFunction(dolphins[i].individual.axys));
	}
	
	
	ctx.clear();
	ctx.rulerInside(dsaDimensionalSpaceMax, dsaDimensionalSpaceMin);
	ctx.setDolphins(dolphins, dsaDimensionalSpaceMax, dsaDimensionalSpaceMin);
	if(callback!=0){
		callback();
	}

	inputTextToPrint(dolphins);
};

run = function(){
	newText();
	createDolphins();
	for(iRun = 0; iRun<dsaIteration; iRun++){
		searchPhase(function(){
			callPhase(function(){
				receptionPhase(function(){
					predationPhase(function(){
						console.log(iRun);
					});
				});
			});
		});
		//searchPhase(callPhase(receptionPhase(predationPhase())));
	}
}

runSlow = function(){
	newText();
	createDolphins();
	sleep = 0;
	stop = setInterval(function(){
		searchPhase(function(){
			callPhase(function(){
				receptionPhase(function(){
					predationPhase(function(){
						console.log(sleep);
					});
				});
			});
		})
		if(sleep>(dsaIteration-2)){
			clearInterval(stop);
		}
		sleep++;
	}, 1000);
		//searchPhase(callPhase(receptionPhase(predationPhase())));
	
}

/*
runByPhase = function(){
	createDolphins();
	sleep = 0;
	stopOne = setInterval(function(){
		searchPhase(function(){
			stopTwo = setInterval(function() {
				callPhase(function(){
					stopThree = setInterval(function(){
						receptionPhase(function(){
							predationPhase(function(){
								console.log(sleep);
							});
						});
						clearInterval(stopThree);
					}
					, 1000);
						
				})
				clearInterval(stopTwo);
			}, 1000)
		});
		if(sleep>(dsaIteration-2)){
			clearInterval(stopOne);
		}
		sleep++;
	}, 1000);
		//searchPhase(callPhase(receptionPhase(predationPhase())));
}*/