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

searchPhase = function(){
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
	//console.log(dolphins);
	//E is for temporal dolphins solutions(echo)
	E = [];
	contador=0;
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
				dolphins[i].neighborhood.axys=minLoc.axys;
				dolphins[i].neighborhood.fitness = parseFloat(minLoc.fitness);
			}
			if(dolphins[i].individual.fitness>dolphins[i].neighborhood.fitness){
				//dolphins[i].individual.fitness=parseFloat(dolphins[i].neighborhood.fitness);
				//dolphins[i].individual.axys = dolphins[i].neighborhood.axys;
			}
			//graficando mejor(mas bajo)
			console.log(dsaTime);
			ctx.setEchoDirectionsByMin(dolp[0], dolp[1], minLoc);
			eTempAll.mDir.push(eTmpM);
		}
		console.log();
		E.push(eTempAll);
	}
	dolphinFieldDescription(dolphins);
	
	//callPhase(dolphins[i].neighborhood, dsaDimensionalSpaceMax, dsaDimensionalSpaceMin);
};


//callphase
//se decide cual es el minimo
minCallPhase = 0;
minDolphinCallPhase = 0;
callPhase = function(){
	minCallPhase = 0;
	minDolphinCallPhase = 0;
	neighborhood = false;
	for(i = 0; i<dolphins.length; i++){
		//first iteration get first dolphin fitness
		if(i==0){
			minCallPhase = dolphins[i].individual.fitness;	
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
	
};

//sirve para ver si no se sale de los rangos maximos y minimos
movByDolp = [];
receptionPhase = function(){
	movByDolp = [];	
	for(i = 0; i<dolphins.length; i++){
		movAxysDolp = [];
		for(j = 0; j<dolphins[i].dolp.length; j++){
			//obtiene la diferencia entre el delfin y el lugar donde se encontro el fitness global
			diffDolpToFitness = dolphins[minDolphinCallPhase].neighborhood.axys[j]-dolphins[i].dolp[j];
			console.log(diffDolpToFitness);
			if(diffDolpToFitness>0){						
				
				console.log("positivo");
			}else{
				console.log("negativo");
			}
			//al resultado de arriba se divide entre el fitness local
			mov = diffDolpToFitness/((dolphins[i].dolp[j]-dolphins[i].neighborhood.axys[j]));
			//movimiento mas velocidad de delfin
			if(mov == "Infinity" || mov == "-Infinity"){
				mov = 0;
			}
			movAxysDolp.push(mov*dolpSpeed);
		}
		movByDolp.push(movAxysDolp);
	}
};


predationPhase = function(){
	console.log(movByDolp);
	for(i = 0; i<dolphins.length; i++){
		for(j = 0; j<dolphins[i].neighborhood.axys.length; j++){
			console.log("esto " + dolphins[i].individual.axys[j] + " por esto "+ movByDolp[i][j]+" mas esto "+dolphins[i].individual.axys[j]);
			//console.log(movByDolp[i][j]);
			dolphins[i].individual.axys[j] = movByDolp[i][j];
			//dolphins[i].individual.axys[j] = dolphins[i].individual.axys[j]+movByDolp[i][j];
		}		
	}
	console.log(dolphins);
	/*ctx.clear();
	ctx.rulerInside(dsaDimensionalSpaceMax, dsaDimensionalSpaceMin);
	ctx.setDolphins(dolphins, dsaDimensionalSpaceMax, dsaDimensionalSpaceMin);*/
};



