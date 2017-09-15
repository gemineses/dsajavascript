//vars
dsaDolphinNumbers = 3;
//fitnessFunction = x(:,1).^2+x(:,2).^2;
fitnessSelected="3";

dsaDimensionalSpaceMax = "5,5";
dsaDimensionalSpaceMax = dsaDimensionalSpaceMax.split(",");
dsaDimensionalSpaceMin = "-5,-5";
dsaDimensionalSpaceMin = dsaDimensionalSpaceMin.split(",");

dsaIteration = 20;
dsaMDirection = 3;
dsaSpeed = 1;
dsaTime = 3;
dsaMaxFitnessValue =0;
dsaMaximumSearchTime = 1;

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
	dsaDimensionalSpaceMin = document.getElementById("dsaDimensionalSpaceMin").value;
	dsaDimensionalSpaceMin = dsaDimensionalSpaceMin.split(",");
	dsaIteration = document.getElementById("dsaIteration").value;
	dsaMDirection = document.getElementById("dsaMDirection").value;
	dsaSpeed = document.getElementById("dsaSpeed").value;
	dsaTime = document.getElementById("dsaTime").value;
	dsaMaxFitnessValue = document.getElementById("dsaMaxFitnessValue").value;
	dsaMaximumSearchTime = document.getElementById("dsaMaximumSearchTime").value;
};