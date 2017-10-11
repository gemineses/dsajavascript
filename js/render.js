
	/*
	Main Canvas and rulers settings
	*/
	var canvasx = document.getElementById('canvasx');
	canvasx.width = 400;
	canvasx.height = 20;
	var canvasy = document.getElementById('canvasy');
	canvasy.width = 40;
	canvasy.height = 400;
	var canvas = document.getElementById('canvas');
	canvas.width = 400;
	canvas.height = 400;
	var ctxx = canvasx.getContext('2d');
	var ctxy = canvasy.getContext('2d');
	var ctx = canvas.getContext('2d');
	
	
	/*
		Ruler function, (Dimention Max, Dimention Min, Axys)
		Paint the number and line with the 10% per division
	*/
	ctx.ruler = function (dimMax, dimMin, pos) {
		diff = dimMax[0]-dimMin[0];
		div = diff/10;
		
		
		
		if(pos=="x"){
			actual=parseFloat(dimMin[0]);
			ctxx.clearRect(0, 0, canvas.width, canvas.height);
			for(i=0; i<10; i++){
				
				actual=parseFloat(actual.toFixed(4));
				ctxx.font = "15px Arial";
				ctxx.fillText(actual,40*i,15);
				ctxx.moveTo(40*i,0);
				ctxx.lineTo(40*i,40);
				ctxx.stroke();
				actual = actual+div;
			}
		}else{
			actual=parseFloat(dimMin[0]);
			ctxy.clearRect(0, 0, canvas.width, canvas.height);
			for(i=0; i<10; i++){
				actual=parseFloat(actual.toFixed(4));
				ctxy.font = "15px Arial";
				ctxy.fillText(actual*-1,5,40*i);
				ctxy.moveTo(0,40*i);
				ctxy.lineTo(40,40*i);
				ctxy.stroke();
				actual = actual+div;
			}
		}
		
	};
	ctx.ruler(dsaDimensionalSpaceMax, dsaDimensionalSpaceMin, "x");
	ctx.ruler(dsaDimensionalSpaceMax, dsaDimensionalSpaceMin, "y");
	
	/*
	Ruler inside canvas fxn
	*/
	ctx.rulerInside = function(dMax, dMin){
		ctx.clear();
		diff = dMax[0]-dMin[0];
		div = (diff/10)*40;
		
		for(i = 1; i<Math.floor(dMax[0]); i++){
			entire=parseInt(((i*200)/dMax[0])+200);
			ctx.beginPath();
			ctx.moveTo((entire),200+5);
			ctx.lineTo((entire),200-5);
			ctx.stroke();	
		}
		for(i = 1; i<Math.floor(dMax[1]); i++){
			entire=parseInt(((i*200)/dMax[1])+200);
			ctx.beginPath();
			ctx.moveTo(200+5,entire-200);
			ctx.lineTo(200-5,entire-200);
			ctx.stroke();
		}
		
		for(i = 1; i<Math.floor(dMin[0]*-1); i++){
			entire=parseInt(((i*200)/dMin[0])+200);
			ctx.beginPath();
			ctx.moveTo((entire),200+5);
			ctx.lineTo((entire),200-5);
			ctx.stroke();	
		}
		for(i = 1; i<Math.floor(dMin[1]*-1); i++){
			entire=parseInt(((i*200)/dMin[1])+200);
			ctx.beginPath();
			ctx.moveTo(200+5,entire+200);
			ctx.lineTo(200-5,entire+200);
			ctx.stroke();	
		}
		
	}
	
	
	
	
	/*
		Set dolphins functions (Dolphins object)
		Paint the dolphins in the canvas
	*/
	ctx.setDolphins = function(dolphins){
		diff = dsaDimensionalSpaceMax[0]-dsaDimensionalSpaceMin[0];
		div = (diff/10)*40;
		
		console.log(diff/10);
		for(i=0; i<dolphins.length; i++){
			ctx.beginPath();
			document.getElementById("dolphinsText").value=document.getElementById("dolphinsText").value+", "+dolphins[i].individual;
			ctx.arc(((dolphins[i].dolp[0])*div)+200,(((dolphins[i].dolp[1]*div))*-1)+200,5,0,2*Math.PI);
			ctx.stroke();
		}
		
	};
	
	//echo directions
	ctx.setEchoDirections = function (dolpX, dolpY, ecoX, ecoY){
		diff = dsaDimensionalSpaceMax[0]-dsaDimensionalSpaceMin[0];
		div = (diff/10)*40;
		
		ctx.beginPath();
		ctx.moveTo((dolpX*div)+200, (dolpY*div*-1)+200);
		ctx.lineTo((ecoX*div)+200, (ecoY*div*-1)+200);
		ctx.stroke();
	};
	
	
	/*
		Set K(neightboorhood) echo from dolphins ecolocations
		
	*/
	ctx.setK = function(dolK){
		diff = dsaDimensionalSpaceMax[0]-dsaDimensionalSpaceMin[0];
		div = (diff/10)*40;
		
		for(i=0; i<dolK.length; i++){
			for(j=0; j<dolK[i].M.length; j++){
				for(k=0; k<dolK[i].M[j].length; k++){
					//console.log(dolK[i].M[j][k]);
					ctx.beginPath();
					//console.log(dolphins[i].individual);
					document.getElementById("dolphinsText").value=document.getElementById("dolphinsText").value+", "+dolphins[i].individual;
					ctx.arc(((dolK[i].M[j][k][0])*div)+200,(((dolK[i].M[j][k][1]*div))*-1)+200,2,0,2*Math.PI);
					ctx.stroke();
				}
			}
			
			
		}
		
	};
	
	
	/*
		Clean the canvas
	*/
	ctx.clear = function () {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	};
	ctx.clear();
	ctx.rulerInside(dsaDimensionalSpaceMax, dsaDimensionalSpaceMin);
	
