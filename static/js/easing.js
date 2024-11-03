jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(c,d,b,j,i){return jQuery.easing[jQuery.easing.def](c,d,b,j,i)},easeInQuad:function(c,d,b,j,i){return j*(d/=i)*d+b},easeOutQuad:function(c,d,b,j,i){return -j*(d/=i)*(d-2)+b},easeInOutQuad:function(c,d,b,j,i){if((d/=i/2)<1){return j/2*d*d+b}return -j/2*((--d)*(d-2)-1)+b},easeInCubic:function(c,d,b,j,i){return j*(d/=i)*d*d+b},easeOutCubic:function(c,d,b,j,i){return j*((d=d/i-1)*d*d+1)+b},easeInOutCubic:function(c,d,b,j,i){if((d/=i/2)<1){return j/2*d*d*d+b}return j/2*((d-=2)*d*d+2)+b},easeInQuart:function(c,d,b,j,i){return j*(d/=i)*d*d*d+b},easeOutQuart:function(c,d,b,j,i){return -j*((d=d/i-1)*d*d*d-1)+b},easeInOutQuart:function(c,d,b,j,i){if((d/=i/2)<1){return j/2*d*d*d*d+b}return -j/2*((d-=2)*d*d*d-2)+b},easeInQuint:function(c,d,b,j,i){return j*(d/=i)*d*d*d*d+b},easeOutQuint:function(c,d,b,j,i){return j*((d=d/i-1)*d*d*d*d+1)+b},easeInOutQuint:function(c,d,b,j,i){if((d/=i/2)<1){return j/2*d*d*d*d*d+b}return j/2*((d-=2)*d*d*d*d+2)+b},easeInSine:function(c,d,b,j,i){return -j*Math.cos(d/i*(Math.PI/2))+j+b},easeOutSine:function(c,d,b,j,i){return j*Math.sin(d/i*(Math.PI/2))+b},easeInOutSine:function(c,d,b,j,i){return -j/2*(Math.cos(Math.PI*d/i)-1)+b},easeInExpo:function(c,d,b,j,i){return(d==0)?b:j*Math.pow(2,10*(d/i-1))+b},easeOutExpo:function(c,d,b,j,i){return(d==i)?b+j:j*(-Math.pow(2,-10*d/i)+1)+b},easeInOutExpo:function(c,d,b,j,i){if(d==0){return b}if(d==i){return b+j}if((d/=i/2)<1){return j/2*Math.pow(2,10*(d-1))+b}return j/2*(-Math.pow(2,-10*--d)+2)+b},easeInCirc:function(c,d,b,j,i){return -j*(Math.sqrt(1-(d/=i)*d)-1)+b},easeOutCirc:function(c,d,b,j,i){return j*Math.sqrt(1-(d=d/i-1)*d)+b},easeInOutCirc:function(c,d,b,j,i){if((d/=i/2)<1){return -j/2*(Math.sqrt(1-d*d)-1)+b}return j/2*(Math.sqrt(1-(d-=2)*d)+1)+b},easeInElastic:function(b,d,a,p,o){var m=1.70158;var n=0;var c=p;if(d==0){return a}if((d/=o)==1){return a+p}if(!n){n=o*0.3}if(c<Math.abs(p)){c=p;var m=n/4}else{var m=n/(2*Math.PI)*Math.asin(p/c)}return -(c*Math.pow(2,10*(d-=1))*Math.sin((d*o-m)*(2*Math.PI)/n))+a},easeOutElastic:function(b,d,a,p,o){var m=1.70158;var n=0;var c=p;if(d==0){return a}if((d/=o)==1){return a+p}if(!n){n=o*0.3}if(c<Math.abs(p)){c=p;var m=n/4}else{var m=n/(2*Math.PI)*Math.asin(p/c)}return c*Math.pow(2,-10*d)*Math.sin((d*o-m)*(2*Math.PI)/n)+p+a},easeInOutElastic:function(b,d,a,p,o){var m=1.70158;var n=0;var c=p;if(d==0){return a}if((d/=o/2)==2){return a+p}if(!n){n=o*(0.3*1.5)}if(c<Math.abs(p)){c=p;var m=n/4}else{var m=n/(2*Math.PI)*Math.asin(p/c)}if(d<1){return -0.5*(c*Math.pow(2,10*(d-=1))*Math.sin((d*o-m)*(2*Math.PI)/n))+a}return c*Math.pow(2,-10*(d-=1))*Math.sin((d*o-m)*(2*Math.PI)/n)*0.5+p+a},easeInBack:function(c,d,b,l,k,j){if(j==undefined){j=1.70158}return l*(d/=k)*d*((j+1)*d-j)+b},easeOutBack:function(c,d,b,l,k,j){if(j==undefined){j=1.70158}return l*((d=d/k-1)*d*((j+1)*d+j)+1)+b},easeInOutBack:function(c,d,b,l,k,j){if(j==undefined){j=1.70158}if((d/=k/2)<1){return l/2*(d*d*(((j*=(1.525))+1)*d-j))+b}return l/2*((d-=2)*d*(((j*=(1.525))+1)*d+j)+2)+b},easeInBounce:function(c,d,b,j,i){return j-jQuery.easing.easeOutBounce(c,i-d,0,j,i)+b},easeOutBounce:function(c,d,b,j,i){if((d/=i)<(1/2.75)){return j*(7.5625*d*d)+b}else{if(d<(2/2.75)){return j*(7.5625*(d-=(1.5/2.75))*d+0.75)+b}else{if(d<(2.5/2.75)){return j*(7.5625*(d-=(2.25/2.75))*d+0.9375)+b}else{return j*(7.5625*(d-=(2.625/2.75))*d+0.984375)+b}}}},easeInOutBounce:function(c,d,b,j,i){if(d<i/2){return jQuery.easing.easeInBounce(c,d*2,0,j,i)*0.5+b}return jQuery.easing.easeOutBounce(c,d*2-i,0,j,i)*0.5+j*0.5+b}});