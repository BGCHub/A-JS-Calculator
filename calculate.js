window.onload=function(){
	var buttons=document.getElementsByClassName("item");
	var mon=document.getElementById("monitor");
	var dotte=document.getElementById("dot");
	var adde=document.getElementById("add");
	var minne=document.getElementById("minus");
	var timme=document.getElementById("time");
	var dividee=document.getElementById("divide");
	var equaee=document.getElementById("equal");
	var cleaner=document.getElementById("clean");
	
	var f="",s="",e=0; //f to store the first number, s to store the second number, e to store the final result
	var ss=0,ff=0;
	var isFirst=true;
	var isCalculate=false;
	var isAdd=false,isMinus=false,isTime=false,isDivide=false;
	
	var fff="";
	
	for(let i=0;i<10;i++){
		buttons[i].onclick=function(){
			if(isFirst){
				ff=buttons[i].innerHTML;
				f=f+ff;
				mon.innerHTML=f;
			} else{
				if(isCalculate){
					ss=buttons[i].innerHTML;
					s=s+ss;
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
	
	equaee.onclick=function(){
		mon.style.borderBottomColor="#5cff5c";
		f=parseInt(f);
		s=parseInt(s);
		
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
		
		if(e>9999999 ||e<-999999){
			e="Error!"
			mon.style.borderBottomColor="#f09381";
		}
		
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
	
	cleaner.onmousedown=function(){
		mon.style.borderBottomColor="#f09381";
	}
	cleaner.onmouseup=function(){
		mon.style.borderBottomColor="#FCAD3E";
	}
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