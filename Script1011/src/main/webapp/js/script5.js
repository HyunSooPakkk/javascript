/**
 * 
 */ 
//두 수를 입력해 첫번째 숫자부터 두번째 숫자까지의 합

var input1 = Number(prompt("첫번째 숫자를 입력하세요."));
var input2 = Number(prompt("두번째 숫자를 입력하세요."));
var sum= 0;
for(var i=input1 ;i<=input2;i++){
	sum = sum+i; 
}

document.write(input1+"부터"+input2+"의 합: "+sum,"<br>");