(function(a){a.fn.downCount=function(g,b){var h=a.extend({date:null,offset:null},g);if(!h.date){a.error("Date is not defined.")}if(!Date.parse(h.date)){a.error("Incorrect date format, it should look like this, 12/24/2012 12:00:00.")}var c=this;var e=function(){var i=new Date();var k=i.getTime()+(i.getTimezoneOffset()*60000);var j=new Date(k+(3600000*h.offset));return j};function d(){var w=new Date(h.date),m=e();var o=w-m;if(o<0){clearInterval(f);if(b&&typeof b==="function"){b()}return}var l=1000,k=l*60,j=k*60,i=j*24;var n=Math.floor(o/i),p=Math.floor((o%i)/j),q=Math.floor((o%j)/k),v=Math.floor((o%k)/l);n=(String(n).length>=2)?n:"0"+n;p=(String(p).length>=2)?p:"0"+p;q=(String(q).length>=2)?q:"0"+q;v=(String(v).length>=2)?v:"0"+v;var r=(n===1)?"day":"days",s=(p===1)?"hour":"hours",t=(q===1)?"minute":"minutes",u=(v===1)?"second":"seconds";c.find(".days").text(n);c.find(".hours").text(p);c.find(".minutes").text(q);c.find(".seconds").text(v);c.find(".days_ref").text(r);c.find(".hours_ref").text(s);c.find(".minutes_ref").text(t);c.find(".seconds_ref").text(u)}var f=setInterval(d,1000)}})(jQuery);