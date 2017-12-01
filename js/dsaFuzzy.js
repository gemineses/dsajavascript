	//se setea en defaultParams.js
	//dsaFuzzyIte = 400;
	//tiene que sumar el 100%
	
	itePorBaja = .10;
	iteCalBaja = dsaFuzzyIte * itePorBaja+itePorBaja;
	
	itePorMedia = .30;
	iteCalMedia = (dsaFuzzyIte * itePorMedia) + iteCalBaja; 
	
	itePorAlta = .30;
	iteCalAlta = (dsaFuzzyIte * itePorAlta) + iteCalMedia;
	
	
	
	var fuzzyIterations = {};
	
	setParamsOnFuzzyByIterations = function(inputVar){
		fuzzyIterations = {
			crisp_input: [inputVar],
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
					[0,0,0,40],
					[10,50,50,90],
					[60,100,100,100]
				]
			},
			inferences: [
				[2,1,0]
			]
		};
	}
	
	
	
	
	
	
	
	
	
	
	var fl = new FuzzyLogic();