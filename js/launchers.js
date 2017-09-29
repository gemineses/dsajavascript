$(document).ready(function(){
	// the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
	$('.modal').modal();
});


//text to help
textToHelp = "1 - f=abs(x)+cos(x) <br />"
+ " 2 - f=abs(x)+sin(x) <br />"
+ " 3 - f=x(:,1).^2+x(:,2).^2; <br />"
+ " 4 - f=100*(x(:,2).^2-x(:,1)).^2+(1-x(:,1)).^2; <br />"
+ " 5 - f(:,1)=sum(abs(x')-10*cos(sqrt(abs(10*x'))))'; <br />"
+ " 6 - f=(x.^2+x).*cos(x); <br />"
+ " 7 - f=x(:,1).*sin(4*x(:,1))+1.1*x(:,2).*sin(2*x(:,2)); <br />"
+ " 8 - f=x(:,2).*sin(4*x(:,1))+1.1*x(:,1).*sin(2*x(:,2)); <br />"
+ " 9 - f(:,1)=x(:,1).^4+2*x(:,2).^4+randn(length(x(:,1)),1); <br />"
+ " 10 - f(:,1)=20+sum(x'.^2-10*cos(2*pi*x'))'; <br />"
+ " 11 - f(:,1)=1+sum(abs(x').^2/4000)'-prod(cos(x'))'; <br />"
+ " 12 - f(:,1)=.5+(sin(sqrt(x(:,1).^2+x(:,2).^2).^2)-.5)./(1+.1*(x(:,1).^2+x(:,2).^2)); <br />"
+ " 13 - aa=x(:,1).^2+x(:,2).^2; <br /> bb=((x(:,1)+.5).^2+x(:,2).^2).^0.1; <br /> f(:,1)=aa.^0.25.*sin(30*bb).^2+abs(x(:,1))+abs(x(:,2)); <br />"
+ " 14 - f(:,1)=besselj(0,x(:,1).^2+x(:,2).^2)+abs(1-x(:,1))/10+abs(1-x(:,2))/10; <br />"
+ " 15 - f(:,1)=-exp(.2*sqrt((x(:,1)-1).^2+(x(:,2)- 1).^2)+(cos(2*x(:,1))+sin(2*x(:,1)))); <br />"
+ " 16 - f(:,1)=x(:,1).*sin(sqrt(abs(x(:,1)-(x(:,2)+9))))-(x(:,2)+9).*sin(sqrt(abs(x(:,2)+0.5*x(:,1)+9))); <br />"
+ " 17 - x=x+1; <br />f(:,1)=(x(:,1)+x(:,2).^2+sqrt(x(:,3))+1./x(:,4))/8.5;<br /> f(:,2)=(1./x(:,1)+1./x(:,2)+x(:,3)+x(:,4))/6;";

document.getElementById('fitFxnListHelp').innerHTML = textToHelp;
console.log(textToHelp);
