/*
	create dolphins functions (number of dolphins do you want)
	return 0, generating an object with dolphin locations inside of dimensional space max-min
*/
function createDolphins(){
	
	dolphinNo = dsaDolphinNumbers;
	//dimentions vars must have same number of vars
	console.log("dsaDimensionalSpaceMax");
	console.log(dsaDimensionalSpaceMax);
	console.log("dsaDimensionalSpaceMax");
	console.log(dsaDimensionalSpaceMin);
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
		console.log("dsaDimensionalSpaceMax[y]");
		console.log(dsaDimensionalSpaceMin[y]);
		dolpPos = (Math.random() * (dsaDimensionalSpaceMax[y]-dsaDimensionalSpaceMin[y])) + dsaDimensionalSpaceMin[y];
		dolp.dolp.push(dolpPos);
		
	}

	//creatingIndividualOptimalSolution
	dolp.individual.push(fitnessFunction(dolp.dolp));

	//creatingNeighborhoodOptimalSolution   
	dolp.neighborhood.push(fitnessFunction(dolp.dolp));
		dolphins.push(dolp);
	}
	ctx.clear();
	ctx.setDolphins(dolphins);
}


//search  phase

searchPhase = function(){
	x = dolp;
	v = [];

	for(i = 0; i<mDirection; i++){
		for(j = 0; j<dimensionalSpaceMax.lenght; j++){
			/*dolp.dolp.[]
			v[i][j] =  */
		}
		console.log(i);
	}
	v = 
	console.log(dolp);
};