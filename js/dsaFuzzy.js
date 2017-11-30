	//se setea en defaultParams.js
	//dsaFuzzyIte = 400;
	//tiene que sumar el 100%
	
	itePorBaja = .10;
	iteCalBaja = dsaFuzzyIte * itePorBaja+itePorBaja;
	console.log(iteCalBaja);
	itePorMedia = .30;
	iteCalMedia = (dsaFuzzyIte * itePorMedia) + iteCalBaja; 
	console.log(iteCalMedia);
	itePorAlta = .30;
	iteCalAlta = (dsaFuzzyIte * itePorAlta) + iteCalMedia;
	console.log(iteCalAlta);
	
	
	
	setParamsOnFuzzyByIterations = function(){
		var fuzzyIterations = {
			crisp_input: [10, 10, 10],
			variables_input: [
				{
					name: "Iteraciones",
					setsName: ["Baja", "Media", "Alta"],
					sets: [
						[0,0,iteCalBaja,iteCalMedia],
						[iteCalBaja,iteCalMedia,iteCalMedia,iteCalAlta],
						[iteCalMedia,iteCalAlta,dsaFuzzyIte,dsaFuzzyIte]
					]
				},
			],
			variable_output: {
				name: "Velocidad del delfin",
				setsName: ["Muy Lento", "Lento", "Rapido"],
				sets: [
					[0,0,0,50],
					[0,50,50,100],
					[50,100,100,100]
				]
			},
			inferences: [
				[2,1,0]
			]
		};
	}
	
	
	
	
	
	
	
	
	
	
	
	var fl = new FuzzyLogic();