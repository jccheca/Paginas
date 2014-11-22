//alert("Hola mundo!");
var dibujo,lienzo;
function inicio(){
	dibujo = document.getElementById("dibujito");
	lienzo = dibujo.getContext("2d");
	lienzo.fillStyle = "#ddd";
    lienzo.fillRect (0, 0, 300, 300);
	/*lienzo.fillStyle = '#ccc';
    lienzo.fillRect (0, 0, 150, 150);
    lienzo.strokeRect (200,0, 50, 50);
*/

	lienzo.beginPath();
	//lienzo.fillStyle = "#f00";
	lienzo.strokeStyle = "#0ff";
    lienzo.arc(20,20,20,(Math.PI * 2),false);
	lienzo.moveTo(10,10);
	lienzo.lineTo(10,200);
	lienzo.lineTo(200,200);
	lienzo.lineTo(200,10);
	//lienzo.fill();
	lienzo.closePath();
	lienzo.stroke;
	//alert("dentroxx!");
}