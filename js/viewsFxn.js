 /*$("#dsaDolphinNumbers").bind("mousewheel", function(event, delta) {
		console.log(event);
        if (delta > 0) {
            this.value = parseInt(this.value) + 1;
        } else {
            if (parseInt(this.value) > 0) {
                this.value = parseInt(this.value) - 1;
            }
        }
        return false;
     });*/
	 
	 
//autoupgrade xyaxis
function updateGraphic(){
	
	maxSizeText = document.getElementById("dsaDimensionalSpaceMax").value;
	minSizeText = document.getElementById("dsaDimensionalSpaceMin").value;
	numMax=maxSizeText.split(",");
	numMin=minSizeText.split(",");
	numLenMax = parseInt(numMax[0])-parseInt(numMin[0]);
	numLenMin = parseInt(numMax[1])-parseInt(numMin[1]);
	console.log(numLenMax);
	console.log(numLenMin);
	//console.log(document.getElementById("dsaDimensionalSpaceMin").value);
}