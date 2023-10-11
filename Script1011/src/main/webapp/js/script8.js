/**
 * 비만도 측정
 */ 

var input=0;
var weight= 0;

//입력값 2개(신장, 체중)
input=Number(prompt("신장을 입력하세요.","<br>")); 
weight=Number(prompt("체중을 입력하세요.","<br>")); 

var height= input/100;
var result = weight/(height*height);

//result 출력


//if 비교 >> if, else if, else if, else
if(result>=25){
	document.write("결과: ",result,"/ 비만입니다.","<br>");
}else if(result>=23.0){
	document.write("결과: ",result,"/ 과체중입니다.","<br>");
}else if(result>=18.5){
	document.write("결과: ",result,"/ 표준체중입니다.","<br>");
}else{
	document.write("결과: ",result,"/ 저체중입니다.","<br>");
}