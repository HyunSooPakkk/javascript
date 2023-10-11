/**
 * 
 */
//2개의 숫자를 입력받아 두 수를 사칙연산한 결과값을 출력하시오.
//prompt("숫자를 입력하세요.","0")
	
	var a = Number(prompt("첫번째 숫자를 입력하세요: ","0"));
	var b = Number(prompt("두번째 숫자를 입력하세요: ","0"));
	
	document.write("<h1>첫번째 숫자= "+a+"</h1>")
	document.write("<h1>두번째 숫자= "+b+"</h1>")
	document.write("<h1>더하기= "+(a+b)+"</h1>")
	document.write("<h1>빼기= "+(a-b)+"</h1>")
	document.write("<h1>곱하기= "+(a*b)+"</h1>")
	document.write("<h1>나누기= "+(a/b)+"</h1>")