/*
 * Suma dos valores recibidos
 */
function suma(pX,pY){
	return pX+pY;
}
/*
 * Resta dos valores recibidos
 */
function resta(pX,pY){
	return pX-pY;
}
/*
 * Multiplica dos valores recibidos
 */
function producto(pX,pY){
	return pX*pY;
}
/*
 * Divide dos valores recibidos
 */
function division(pX,pY){
	if(pY == 0)
		return "No es posible dividir entre 0";
	else
		return pX/pY;
}
/*
 * Captura valores y llama a funciones para calcular
 */
function operaciones(){
	var x = prompt("Digite numerador de la operación");
	x = parseInt(x,10);
	var y = prompt("Digite numerador de la operación");
	y = parseInt(y,10);
	document.write("<p>" + x + " + " + y + " = " + suma(x,y) + "</p>");
	document.write("<p>" + x + " - " + y + " = " + resta(x,y) + "</p>");
	document.write("<p>" + x + " * " + y + " = " + producto(x,y) + "</p>");
	document.write("<p>" + x + " / " + y + " = " + division(x,y) + "</p>");
}
/*
 * Inicia el programa
 * Realiza ciclo de ejecución
 */
function inicio(){
	//var op = confirm("Desea ingresar?","No","Si");
	var x = prompt("Digite numerador de la operación");
	x = parseInt(x,10);
	var y = prompt("Digite numerador de la operación");
	y = parseInt(y,10);

	document.write("<p>1. Sumar</p>");
	document.write("<p>2. Restar</p>");
	var op = prompt("Qué operación desea?",1);
	op = parseInt(op,10);

	while(op!=5){
		if(op == 1)
			document.write("<p>" + x + " + " + y + " = " + suma(x,y) + "</p>");
		else 
			if(op == 2)
				document.write("<p>" + x + " - " + y + " = " + resta(x,y) + "</p>");

		op = prompt("Que operación desea?",1);
	}
}