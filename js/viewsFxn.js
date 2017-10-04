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
			noDimensions = x+1;
		}
		for(x=0; x<numMin.length; x++){
			numLenMin.push(parseFloat(numMin[x]));
			noDimensions = x+1;
		}
		ctx.ruler(numLenMax, numLenMin, "x");
		ctx.ruler(numLenMax, numLenMin, "y");
	}
	
	//console.log(document.getElementById("dsaDimensionalSpaceMin").value);
}


//for each dolphin hes description

function dolphinFieldDescription(dolp){
	textfield="";
	for(i = 0; i<dolp.length; i++){
		textfield += "<div class='row'>";
		for(j=0; j<dolp[i].dolp.length; j++){
			textfield += "<div class='col s5'>"
			+"<label class='active' for='dsaDolphinNumbers'>Dolphin #"+i+", Dim:"+j
			+"</label>"
			+"<input placeholder='maximumSearchTime' type='text' class='validate inputSmall' onchange='updateParams()' value='"+dolp[i].dolp[j]+"'><br/>"
			+"</div>";
		}
		textfield += "<div class='col s5'>"
			+"<label class='active' for='dsaDolphinNumbers'>Dolphin #"+i+" Fitness"
			+"</label>"
			+"<input placeholder='maximumSearchTime' type='text' class='validate inputSmall' onchange='updateParams()' value='"+dolp[i].individual+"'><br/>"
			+"</div>";
		textfield += "</div>";
	}
	
	document.getElementById('dolphinList').innerHTML = textfield;
}