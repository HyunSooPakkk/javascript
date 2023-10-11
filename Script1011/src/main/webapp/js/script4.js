/**
 * 
 */ 
var input = Number(prompt("숫자를 입력하세요."));
var sum=input;
for(var i=1;i<=input;i++){
	sum = input+i; 
}

document.write("입력받은 숫자의 합: "+sum,"<br>");