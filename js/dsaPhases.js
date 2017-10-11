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
	Dolphin = {dolp:[], individual:[], neighborhood:[]};
	dolp = Dolphin;
	dolpDim = 0;
	dd = 0;//distance

	//creating dolphins
	for(x = 0; x < dolphinNo; x++){
		dolp = {dolp:[], individual:[], neighborhood:[]
	};

	for(y = 0; y < dsaDimensionalSpaceMin.length; y++){
		//creating dimensions for dolphin
		//dolp Position, in Y iteration, each iteration its an dimensional space(search var) (x,y,z...)
		dolpPos = (Math.random() * (dsaDimensionalSpaceMax[y]-dsaDimensionalSpaceMin[y])) + dsaDimensionalSpaceMin[y];
		dolp.dolp.push(dolpPos);
		
	}
	
	//creatingIndividualOptimalSolution
	dolp.individual.push(fitnessFunction(dolp.dolp));
	
	fitByDolp.push(fitnessFunction(dolp.dolp));
	
	//creatingNeighborhoodOptimalSolution   
	dolp.neighborhood.push(fitnessFunction(dolp.dolp));
		dolphins.push(dolp);
	}
	ctx.clear();
	ctx.rulerInside(dsaDimensionalSpaceMax, dsaDimensionalSpaceMin);
	ctx.setDolphins(dolphins);
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
	console.log("v");
	console.log(v);
	
	//new solution	
	//console.log(dolphins);
	for(i = 0; i<dolphins.length; i++){
		contador=0;
		for(j = 0; j<dsaMDirection; j++){
			sound = v[j];
			dolp = dolphins[i].dolp;
			solution=[];
			for(k = 0; k<dolp.length; k++){
				
				solutionNow = dolphins[i].dolp[k]+(sound[k]*dsaSpeed*dsaTime);
				//console.log(fitnessFunction(dolphins[i].dolp));
				
				solution.push(solutionNow);
			}
			ctx.setEchoDirections(dolp[0], dolp[1], solution[0], solution[1]);	
		}
	}
	
	
	
	
};