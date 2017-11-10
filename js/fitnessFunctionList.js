//fitness function from practical genetic algorithms, second edition

fitnessFunction = function(x){
    fitnessSelected = parseInt(document.getElementById('dsaFitnessFunction').value);    
    y = [];
	for(ii = 0; ii < x.length; ii++){
		y.push(parseFloat(x[ii]));
	}
	x = y;
	sum=0;
	//investigar si es por demension
    if(matlabFormat){
        switch(fitnessSelected){
			case 1://f=abs(x)+cos(x);
				sum = Math.abs(x[0].toFixed(toFixedMax))+Math.cos(x[0].toFixed(toFixedMax));
			break;
			case 2://f=abs(x)+sin(x);
				sum = Math.abs(x[0].toFixed(toFixedMax))+Math.sin(x[0].toFixed(toFixedMax));
			break;
            case 3://f=x(:,1).^2+x(:,2).^2;
				if(x.length<2){
					alert("Se requiere mas de 1 dimension");
				}
				sum = (Math.pow(x[0].toFixed(toFixedMax), 2))-(Math.pow(x[1].toFixed(toFixedMax), 2));
            break;
			case 4://f=100*(x(:,2).^2-x(:,1)).^2 + (1-x(:,1)).^2;
				sum = 0;
				suma = 0;
				if(x.length<2){
					alert("Se requiere mas de 1 dimension");
				}
				sum = 100 * (((Math.pow(x[1].toFixed(toFixedMax), 2))-(Math.pow(x[0].toFixed(toFixedMax), 2))) + (1-(Math.pow(x[0].toFixed(toFixedMax), 2))));
			break;
			case 5://f(:,1)=sum(abs(x')-10*cos(sqrt(abs(10*x'))))';
				sumTmpOne = [];
				for(iifit = 0; iifit<x.length; iifit++){
					sumTmpOne.push(Math.abs(x[iifit])-10*Math.cos(Math.sqrt(Math.abs(10*x[iifit]))));
				}
				for(iifit = 0; iifit<sumTmpOne.length; iifit++){
					sum = sum + sumTmpOne[iifit];
				}
			break;
			case 6://f=(x.^2+x).*cos(x);
				sum = (Math.pow(x[0], 2)+x[0])*Math.cos(x[0]);
			break;
			case 7:
				//f=x(:,1).*sin(4*x(:,1))+1.1*x(:,2).*sin(2*x(:,2));
			break;
			case 8:
				//f=x(:,2).*sin(4*x(:,1))+1.1*x(:,1).*sin(2*x(:,2));        
			break;
			case 9:
				//f(:,1)=x(:,1).^4+2*x(:,2).^4+randn(length(x(:,1)),1); 
			break;
			case 10:
				//f(:,1)=20+sum(x'.^2-10*cos(2*pi*x'))'; 
			break;
			case 11:
				//f(:,1)=1+sum(abs(x').^2/4000)'-prod(cos(x'))'; 
			break;
			case 12:
				//f(:,1)=.5+(sin(sqrt(x(:,1).^2+x(:,2).^2).^2)-.5)./(1+.1*(x(:,1).^2+x(:,2).^2)); 
			break;
			case 13:
			break;
			case 14:
			break;
			case 15:
			break;
			case 16:
			break;
			case 17:
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
	return sum.toFixed(toFixedMax);
}

/*

if funnum==1    %F1
    f=abs(x)+cos(x);
elseif funnum==2    %F2
    f=abs(x)+sin(x);
elseif funnum==3    %F3
    f=x(:,1).^2+x(:,2).^2;
elseif funnum==4    %F4
    f=100*(x(:,2).^2-x(:,1)).^2+(1-x(:,1)).^2;
elseif funnum==5    %F5
    f(:,1)=sum(abs(x')-10*cos(sqrt(abs(10*x'))))'; 
elseif funnum==6    %F6
    f=(x.^2+x).*cos(x);   
elseif funnum==7    %F7
    f=x(:,1).*sin(4*x(:,1))+1.1*x(:,2).*sin(2*x(:,2));
elseif funnum==8    %F8
    f=x(:,2).*sin(4*x(:,1))+1.1*x(:,1).*sin(2*x(:,2));        
elseif funnum==9    %F9
    f(:,1)=x(:,1).^4+2*x(:,2).^4+randn(length(x(:,1)),1); 
elseif funnum==10   %F10
    f(:,1)=20+sum(x'.^2-10*cos(2*pi*x'))'; 
elseif funnum==11   %F11
    f(:,1)=1+sum(abs(x').^2/4000)'-prod(cos(x'))'; 
elseif funnum==12   %F12
f(:,1)=.5+(sin(sqrt(x(:,1).^2+x(:,2).^2).^2)-.5)./(1+.1*(x(:,1).^2+x(:,2).^2)); 
elseif funnum==13   %F13
    aa=x(:,1).^2+x(:,2).^2;
    bb=((x(:,1)+.5).^2+x(:,2).^2).^0.1;
    f(:,1)=aa.^0.25.*sin(30*bb).^2+abs(x(:,1))+abs(x(:,2)); 
elseif funnum==14   %F14
    f(:,1)=besselj(0,x(:,1).^2+x(:,2).^2)+abs(1-x(:,1))/10+abs(1-x(:,2))/10; 
elseif funnum==15   %F15
f(:,1)=-exp(.2*sqrt((x(:,1)-1).^2+(x(:,2)- 1).^2)+(cos(2*x(:,1))+sin(2*x(:,1)))); 
elseif funnum==16   %F16
f(:,1)=x(:,1).*sin(sqrt(abs(x(:,1)-(x(:,2)+9))))-(x(:,2)+9).*sin(sqrt(abs(x(:,2)+0.5*x(:,1)+9))); 
elseif funnum==17   %MOO function
    x=x+1;
    f(:,1)=(x(:,1)+x(:,2).^2+sqrt(x(:,3))+1./x(:,4))/8.5;
    f(:,2)=(1./x(:,1)+1./x(:,2)+x(:,3)+x(:,4))/6;
end



*/