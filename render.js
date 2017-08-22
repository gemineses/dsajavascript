
	var canvasx = document.getElementById('canvasx');
	canvasx.width = 400;
	canvasx.height = 20;
	var canvasy = document.getElementById('canvasy');
	canvasy.width = 20;
	canvasy.height = 400;
	var canvas = document.getElementById('canvas');
	canvas.width = 400;
	canvas.height = 400;
	var ctxx = canvasx.getContext('2d');
	var ctxy = canvasy.getContext('2d');
	var ctx = canvas.getContext('2d');
	ctx.ruler = function (dimMax, dimMin, pos) {
		diff = dimMax[0]-dimMin[0];
		div = diff/10;
		if(pos=="x"){
			actual=dimMin[0];
			for(i=0; i<10; i++){
				ctxx.font = "15px Arial";
				ctxx.fillText(actual,40*i,15);
				ctxx.moveTo(40*i,0);
				ctxx.lineTo(40*i,40);
				ctxx.stroke();
				actual = actual+div;
			}
		}else{
			actual=dimMin[0];
			for(i=0; i<10; i++){
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
	ctx.setDolphins = function(dolphins){
		diff = dsaDimensionalSpaceMax[0]-dsaDimensionalSpaceMin[0];
		div = (diff/10)*40;
		
		for(i=0; i<dolphins.length; i++){
			ctx.beginPath();
			console.log(dolphins[i].individual);
			document.getElementById("dolphinsText").value=document.getElementById("dolphinsText").value+", "+dolphins[i].individual;
			ctx.arc(((dolphins[i].dolp[0])*div)+200,(((dolphins[i].dolp[1]*div))*-1)+200,5,0,2*Math.PI);
			ctx.stroke();
			
		}
		
	};
	
	ctx.setK = function(dolK){
		diff = dsaDimensionalSpaceMax[0]-dsaDimensionalSpaceMin[0];
		div = (diff/10)*40;
		
		for(i=0; i<dolK.length; i++){
			for(j=0; j<dolK[i].M.length; j++){
				for(k=0; k<dolK[i].M[j].length; k++){
					console.log(dolK[i].M[j][k]);
					ctx.beginPath();
					console.log(dolphins[i].individual);
					document.getElementById("dolphinsText").value=document.getElementById("dolphinsText").value+", "+dolphins[i].individual;
					ctx.arc(((dolK[i].M[j][k][0])*div)+200,(((dolK[i].M[j][k][1]*div))*-1)+200,2,0,2*Math.PI);
					ctx.stroke();
				}
			}
			
			
		}
		
	};
	
	ctx.Clear = function () {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	};
	ctx.Clear();

