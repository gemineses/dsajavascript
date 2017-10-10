/*
	DEFAULT PARAMS
		- Vars
			- 
*/

//vars
dsaDolphinNumbers = 3;
fitnessSelected="1";
fitByDolp = [];

//dim
noDimensions = 0;


//dimensionalSpace
dsaDimensionalSpaceMax = "5,5";
dsaDimensionalSpaceMax = dsaDimensionalSpaceMax.split(",");

//parseFloat
for(i = 0; i<dsaDimensionalSpaceMax.length; i++){
		dsaDimensionalSpaceMax[i] = parseFloat(dsaDimensionalSpaceMax[i]);
		noDimensions = i+1;
	}
	
dsaDimensionalSpaceMin = "-5,-5";
dsaDimensionalSpaceMin = dsaDimensionalSpaceMin.split(",");
//parseFloat
for(i = 0; i<dsaDimensionalSpaceMin.length; i++){
		dsaDimensionalSpaceMin[i] = parseFloat(dsaDimensionalSpaceMin[i]);
		noDimensions = i+1;
	}

//params to initializate this algorithm
dsaIteration = 20;
dsaMDirection = 3;
dsaSpeed = 1;
dsaTime = 3;
dsaMaxFitnessValue =0;
dsaMaximumSearchTime = 1;

//fitness functions config, (to add more fitness fxn go to fitnessFunctionList file)
matlabFormat = true;
toFixedMax = 4;


//added params
//360 directions on/off
circleDirections = true;


//assing to DOM element

document.getElementById("dsaDolphinNumbers").value=dsaDolphinNumbers;
document.getElementById("dsaFitnessFunction").value=fitnessSelected;
document.getElementById("dsaDimensionalSpaceMax").value=dsaDimensionalSpaceMax;
document.getElementById("dsaDimensionalSpaceMin").value=dsaDimensionalSpaceMin;
document.getElementById("dsaIteration").value=dsaIteration;
document.getElementById("dsaMDirection").value=dsaMDirection;
document.getElementById("dsaSpeed").value=dsaSpeed;
document.getElementById("dsaTime").value=dsaTime;
document.getElementById("dsaMaxFitnessValue").value=dsaMaxFitnessValue;
document.getElementById("dsaMaximumSearchTime").value=dsaMaximumSearchTime;

fitnessFunctionList = [1,2,3,4,5,6,7,8,9,10];

function updateParams(){
	dsaDolphinNumbers = document.getElementById("dsaDolphinNumbers").value;
	fitnessSelected = document.getElementById("dsaFitnessFunction").value;
	dsaDimensionalSpaceMax = document.getElementById("dsaDimensionalSpaceMax").value;
	dsaDimensionalSpaceMax = dsaDimensionalSpaceMax.split(",");
	//parse to float
	for(i = 0; i<dsaDimensionalSpaceMax.length; i++){
		dsaDimensionalSpaceMax[i] = parseFloat(dsaDimensionalSpaceMax[i]);
	}
	dsaDimensionalSpaceMin = document.getElementById("dsaDimensionalSpaceMin").value;
	dsaDimensionalSpaceMin = dsaDimensionalSpaceMin.split(",");
	for(i = 0; i<dsaDimensionalSpaceMin.length; i++){
		dsaDimensionalSpaceMin[i] = parseFloat(dsaDimensionalSpaceMin[i]);
	}
	dsaIteration = document.getElementById("dsaIteration").value;
	dsaMDirection = document.getElementById("dsaMDirection").value;
	dsaSpeed = document.getElementById("dsaSpeed").value;
	dsaTime = document.getElementById("dsaTime").value;
	dsaMaxFitnessValue = document.getElementById("dsaMaxFitnessValue").value;
	dsaMaximumSearchTime = document.getElementById("dsaMaximumSearchTime").value;
};