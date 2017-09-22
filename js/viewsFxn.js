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
	numLenMax=[];
	numLenMin=[];
	if(numMax.length!=numMin.length){
		alert("Dimensions not match");
	}else{
		for(x=0; x<numMax.length; x++){
			numLenMax.push(parseFloat(numMax[x]));
		}
		for(x=0; x<numMin.length; x++){
			numLenMin.push(parseFloat(numMin[x]));
		}
		ctx.ruler(numLenMax, numLenMin, "x");
		ctx.ruler(numLenMax, numLenMin, "y");
	}
	
	//console.log(document.getElementById("dsaDimensionalSpaceMin").value);
}