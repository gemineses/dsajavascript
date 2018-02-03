totalTextToPrint = "";
totalTextFitnessToPrint = "";

inputTextToPrint = function(text){
	for(i=0; i<text.length; i++){
		thisLine = "";
		for(j=0; j<text[i].dolp.length; j++){
			if(j>0){
				thisLine = thisLine + ",";
			}
			thisLine = thisLine + text[i].dolp[j];
		}
		thisLine = thisLine + "\n";
		totalTextToPrint = totalTextToPrint + thisLine;
	}
	
	for(i=0; i<text.length; i++){
		thisLine = "";
		totalTextFitnessToPrint = totalTextFitnessToPrint + parseFloat(fitnessFunction(text[i].dolp)) + "\n";
	}
	
	
};

newText = function(){
	totalTextToPrint = "";
};
outputTextFitnessToPrint = function(){
		
}

outputTextToPrint = function(){
	//console.log(totalTextToPrint);	
	/*var encodedUri = encodeURI(totalTextToPrint);
	var link = document.createElement("a");
	link.setAttribute("href", encodedUri);
	link.setAttribute("download", "resultados.csv");
	document.body.appendChild(link); 

	link.click();*/
	
	
	var blob = new Blob([totalTextToPrint], {type: 'text/csv'});
	var filename =  "resultadosConFxn"+document.getElementById('dsaFitnessFunction').value+".csv";
	if(window.navigator.msSaveOrOpenBlob) {
		window.navigator.msSaveBlob(blob, filename);
	}
	else{
		var elem = window.document.createElement('a');
		elem.href = window.URL.createObjectURL(blob);
		elem.download = filename;
		document.body.appendChild(elem);
		elem.click();
		document.body.removeChild(elem);
	}
}

outputTextFitnessToPrint = function(){
	//console.log(totalTextToPrint);	
	/*var encodedUri = encodeURI(totalTextToPrint);
	var link = document.createElement("a");
	link.setAttribute("href", encodedUri);
	link.setAttribute("download", "resultados.csv");
	document.body.appendChild(link); 

	link.click();*/
	
	
	var blob = new Blob([totalTextFitnessToPrint], {type: 'text/csv'});
	var filename =  "resultadosFitnessConFxn"+document.getElementById('dsaFitnessFunction').value+".csv";
	if(window.navigator.msSaveOrOpenBlob) {
		window.navigator.msSaveBlob(blob, filename);
	}
	else{
		var elem = window.document.createElement('a');
		elem.href = window.URL.createObjectURL(blob);
		elem.download = filename;
		document.body.appendChild(elem);
		elem.click();
		document.body.removeChild(elem);
	}
}