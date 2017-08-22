//vars
dsaDolphinNumbers = 3;
//fitnessFunction = x(:,1).^2+x(:,2).^2;
fitnessSelected="3";
dsaDimensionalSpaceMax = [5,5];
dsaDimensionalSpaceMin = [-5,-5];
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