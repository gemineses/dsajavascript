
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
	var canvasIte = document.getElementById('canvasIte');
	canvasIte.width = 400;
	canvasIte.height = 30;
	
	var ctxx = canvasx.getContext('2d');
	var ctxy = canvasy.getContext('2d');
	var ctx = canvas.getContext('2d');
	var ctxIte = canvasIte.getContext('2d');
	
	
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
				ctxx.lineTo(40*i,7);
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
				ctxy.lineTo(15,40*i);
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
		axisSize = canvas.width/2;
		div = (diff/10)*(axisSize/5);
		
		for(i = 1; i<Math.floor(dMax[0]); i++){
			entire=parseInt(((i*axisSize)/dMax[0])+axisSize);
			ctx.beginPath();
			ctx.moveTo((entire),axisSize+5);
			ctx.lineTo((entire),axisSize-5);
			ctx.stroke();	
		}
		for(i = 1; i<Math.floor(dMax[1]); i++){
			entire=parseInt(((i*axisSize)/dMax[1])+axisSize);
			ctx.beginPath();
			ctx.moveTo(axisSize+5,entire-axisSize);
			ctx.lineTo(axisSize-5,entire-axisSize);
			ctx.stroke();
		}
		
		for(i = 1; i<Math.floor(dMin[0]*-1); i++){
			entire=parseInt(((i*axisSize)/dMin[0])+axisSize);
			ctx.beginPath();
			ctx.moveTo((entire),axisSize+5);
			ctx.lineTo((entire),axisSize-5);
			ctx.stroke();	
		}
		for(i = 1; i<Math.floor(dMin[1]*-1); i++){
			entire=parseInt(((i*axisSize)/dMin[1])+axisSize);
			ctx.beginPath();
			ctx.moveTo(axisSize+5,entire+axisSize);
			ctx.lineTo(axisSize-5,entire+axisSize);
			ctx.stroke();	
		}
		
	}
	
	
	
	
	/*
		Set dolphins functions (Dolphins object)
		Paint the dolphins in the canvas
	*/
	ctx.moveDolphins = function(dolphins, dMax, dMin){
		diff = dMax[0]-dMin[0];
		div = (diff/10)*40;
		axisSize = canvas.width/2;
		
		
		for(i=0; i<dolphins.length; i++){
			ejeX = ((dolphins[i].dolp[0]*axisSize)/dMax[0])+axisSize;
			ejeY = (((dolphins[i].dolp[1]*axisSize*-1)/dMax[1])+axisSize);
			ctx.beginPath();
			document.getElementById("dolphinsText").value=document.getElementById("dolphinsText").value+", "+dolphins[i].individual.fitness;
			ctx.arc(ejeX, ejeY,5,0,2*Math.PI);
			ctx.stroke();
		}
	};
	
	ctx.setDolphins = function(dolphins, dMax, dMin){
		diff = dMax[0]-dMin[0];
		div = (diff/10)*40;
		axisSize = canvas.width/2;
		
		
		for(i=0; i<dolphins.length; i++){
			ejeX = ((dolphins[i].individual.axys[0]*axisSize)/dMax[0])+axisSize;
			ejeY = (((dolphins[i].individual.axys[1]*axisSize*-1)/dMax[1])+axisSize);
			ctx.beginPath();
			document.getElementById("dolphinsText").value=document.getElementById("dolphinsText").value+", "+dolphins[i].individual.fitness;
			ctx.arc(ejeX, ejeY,5,0,2*Math.PI);
			ctx.stroke();
		}
		
	};
	
	//echo directions
	ctx.setEchoDirections = function (dolpX, dolpY, ecoMDir){
		diff = dsaDimensionalSpaceMax[0]-dsaDimensionalSpaceMin[0];
		div = (diff/10)*40;
		axisSize = canvas.width/2;
		
		//allpath
		ctx.beginPath();
		ctx.strokeStyle = '#000000';
		ctx.moveTo((dolpX*div)+200, (dolpY*div*-1)+200);
		ctx.lineTo((ecoMDir.axys[0]*div)+200, (ecoMDir.axys[1]*div*-1)+200);
		ctx.stroke();
		ctx.beginPath();
		ctx.strokeStyle = '#ff3333';
		ctx.moveTo((ecoMDir.axys[0]*div)+200-4, (ecoMDir.axys[1]*div*-1)+200);
		ctx.lineTo((ecoMDir.axys[0]*div)+200+4, (ecoMDir.axys[1]*div*-1)+200);
		ctx.stroke();
		ctx.strokeStyle = '#000000';
	};
	
	ctx.setEchoDirectionsByMin = function (dolpX, dolpY, ecoMDir){
		diff = dsaDimensionalSpaceMax[0]-dsaDimensionalSpaceMin[0];
		div = (diff/10)*40;
		
		//allpath
		ctx.beginPath();
		ctx.lineWidth=5;
		ctx.strokeStyle = '#88ff00';
		ctx.moveTo((ecoMDir.axys[0]*div)+200-4, (ecoMDir.axys[1]*div*-1)+200);
		ctx.lineTo((ecoMDir.axys[0]*div)+200+4, (ecoMDir.axys[1]*div*-1)+200);
		ctx.stroke();
		ctx.lineWidth=1;
		ctx.strokeStyle = '#000000';
	};
	
	
	ctx.setBestFitnessFound = function(dolphin, dMax, dMin){
		diff = dMax[0]-dMin[0];
		div = (diff/10)*40;
		axisSize = canvas.width/2;
		
		//console.log(dolphin.axys);
		
		ejeX = ((dolphin.axys[0]*axisSize)/dMax[0])+axisSize;
		ejeY = (((dolphin.axys[1]*axisSize*-1)/dMax[1])+axisSize);
		ctx.beginPath();
		ctx.strokeStyle = '#88ff00';
		ctx.arc(ejeX, ejeY,10,0,2*Math.PI);
		ctx.strokeStyle = '#000000';
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
					ctx.beginPath();
					document.getElementById("dolphinsText").value=document.getElementById("dolphinsText").value+", "+dolphins[i].individual.fitness;
					ctx.arc(((dolK[i].M[j][k][0])*div)+200,(((dolK[i].M[j][k][1]*div))*-1)+200,2,0,2*Math.PI);
					ctx.stroke();
				}
			}
			
			
		}
		
	};
	
	ctxIte.FuzzyRuler = function(caseNo, ite){
		switch(caseNo){
			case 1:
				console.log("entrando");
				//console.log(ite);
				//console.log(dsaIteration);
				
				//ctxIte.clearRect(0, 0, canvasIte.width, canvasIte.height);
				
				xMove = parseInt((ite*400)/dsaIteration);
				console.log(xMove);
				ctxIte.moveTo(xMove,0);
				ctxIte.lineTo(xMove,20);
				ctxIte.stroke();
			break;
			case 2:
			break;
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
	
