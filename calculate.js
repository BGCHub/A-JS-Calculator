window.onload=function(){
	// get buttons
	var buttons=document.getElementsByClassName("item");
	var mon=document.getElementById("monitor");
	var dotte=document.getElementById("dot");
	var adde=document.getElementById("add");
	var minne=document.getElementById("minus");
	var timme=document.getElementById("time");
	var dividee=document.getElementById("divide");
	var equaee=document.getElementById("equal");
	var cleaner=document.getElementById("clean");
	
	var f="",s="",e=0; // f to store the first number, s to store the second number, e to store the final result
	var ss=0,ff=0,fff=""; // temporary values
	var isFirst=true; // determine whether is the first calculation
	var isCalculate=false; // determine whether is calculated
	var isAdd=false,isMinus=false,isTime=false,isDivide=false; // determine which operation is executed

	// slide to delete
	var startPoint = null;
    mon.addEventListener("touchstart",function(e){
        var e = e||window.event;
        startPoint = e.touches[0];
    });
    mon.addEventListener("touchend",function(e){
        var e=e||window.event;
        var endPoint = e.changedTouches[0];
        var x = endPoint.clientX - startPoint.clientX;
        var d = 10; // initialize slide distance
        if(Math.abs(x)>d){
            if(x<=0){
                console.log("left");
                mon.innerHTML=f;
                if(isFirst){
					f=f.substring(f.length-1,0);
					mon.innerHTML=f;
				} else{
					if(isCalculate){
						s=s.substring(s.length-1,0);
						mon.innerHTML=s;
					} else{
						fff=fff.substring(fff.length-1,0);
						mon.innerHTML=fff;
					}
				}
            }
        }
    });

	for(let i=0;i<10;i++){
		buttons[i].onclick=function(){
			if(isFirst){
				ff=buttons[i].innerHTML;
				f=f+ff;
				f=f.substring(7,0); // restrict number
				mon.innerHTML=f;
			} else{
				if(isCalculate){
					ss=buttons[i].innerHTML;
					s=s+ss;
					s=s.substring(7,0);
					mon.innerHTML=s;
				} else{
					mon.style.borderBottomColor="#FCAD3E";
					f="";
					ff=buttons[i].innerHTML;
					fff=fff+ff;
					mon.innerHTML=fff;
					f=fff;
				}
			}
		}
	}
	
	adde.onclick=function(){
		isCalculate=true;
		isAdd=true;
		isFirst=false;
		mon.style.borderBottomColor="#65e5ff";
	}
	
	minne.onclick=function(){
		isCalculate=true;
		isMinus=true;
		isFirst=false;
		mon.style.borderBottomColor="#65e5ff";
	}
	
	timme.onclick=function(){
		isCalculate=true;
		isTime=true;
		isFirst=false;
		mon.style.borderBottomColor="#65e5ff";
	}
	
	dividee.onclick=function(){
		isCalculate=true;
		isDivide=true;
		isFirst=false;
		mon.style.borderBottomColor="#65e5ff";
	}
	// add dot to the integer
	dotte.onclick=function(){
		if(isFirst){
			f=f+".";
		} else{
			if(isCalculate){
				s=s+".";
			} else{
				fff=fff+".";
			}
		}
		mon.innerHTML=mon.innerHTML+".";
	}
	
	equaee.onclick=function(){
		mon.style.borderBottomColor="#a9ffa9";
		f=parseFloat(f);
		s=parseFloat(s);
		
		if(isAdd){
			e=f+s;
		}
		else if(isMinus){
			e=f-s;
		}
		else if(isTime){
			e=f*s;
		}
		else if(isDivide){
			e=f/s;
		}
		
		if(e>9999999 ||e<-999999||isNaN(e)){
			e="Error!"
			mon.style.borderBottomColor="#f09381";
		}
		e=e.toString();
		e=e.substring(7,0);
		
		f=e;
		s="";
		fff="";
		isAdd=false;
		isMinus=false;
		isTime=false;
		isDivide=false;
		isCalculate=false
		mon.innerHTML=e;
	}
	
	cleaner.ontouchstart=function(){
		mon.style.borderBottomColor="#f09381";
		cleaner.style.color="#f09381";
	}
	cleaner.ontouchend=function(){
		mon.style.borderBottomColor="#FCAD3E";
		cleaner.style.color="#d4d4d4";
	}
	// initialize every value
	cleaner.onclick=function(){
		ss=0;
		ff=0;
		f="";
		s="";
		e=0;
		isFirst=true;
		isCalculate=false;
		isAdd=false;
		isMinus=false;
		isTime=false;
		isDivide=false;
		mon.innerHTML=0;
	}
}