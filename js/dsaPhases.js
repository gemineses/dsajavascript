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
		dolp.individual.fitness = fitnessFunction(dolp.dolp);
		dolp.individual.axys=dolp.dolp;
		
		fitByDolp.push(fitnessFunction(dolp.dolp));
		dolp.firstFitness = fitnessFunction(dolp.dolp);
		
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
				ctx.setEchoDirections(dolp[0], dolp[1], eTmpT, dsaTime);
				eTmpM.time.push(eTmpT);
			}
			//cambiando el fitness encontrado por el fitness vecino
			if(parseFloat(minLoc.fitness)<parseFloat(dolphins[i].neighborhood.fitness)){
				dolphins[i].neighborhood.axys=minLoc.axys;
				dolphins[i].neighborhood.fitness = minLoc.fitness;
			}
			if(dolphins[i].individual.fitness>dolphins[i].neighborhood.fitness){
				dolphins[i].individual.fitness=dolphins[i].neighborhood.fitness;
				dolphins[i].individual.axys = dolphins[i].neighborhood.axys;
			}
			//graficando mejor(mas bajo)
			ctx.setEchoDirectionsByMin(dolp[0], dolp[1], minLoc, dsaTime);
			eTempAll.mDir.push(eTmpM);
		}
		
		E.push(eTempAll);
	}
	dolphinFieldDescription(dolphins);
	
	
	
	
};