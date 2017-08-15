//fitness function from practical genetic algorithms, second edition

fitnessFunction = function(x){
    fitnessSelected = 3;
    matlabFormat = true;
        
    if(matlabFormat){
        switch(fitnessSelected){
            case 3:
                maxFitnessValue = 60;
                sum = 0;
                suma = 0;
                for(i = 0; i<x.length; i++){
                    suma = Math.pow(x[i].toFixed(4), 2);
                    sum = sum + suma;
                }
                console.log("fitness sphere result = "+sum.toFixed(4));
                return sum.toFixed(4);
            break;
        }
    }else{
        switch(fitnessSelected){
            case 3:
                maxFitnessValue = 60;
                sum = 0;
                suma = 0;
                for(i = 0; i<x.length; i++){
                    suma = Math.pow(x[i], 2);
                    sum = sum + suma;
                }
                console.log("fitness sphere result = "+sum);
                return sum;
            break;
        }
    }
    


}