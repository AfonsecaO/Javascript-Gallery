var quito = [
		{ "src" : "images/Q1.jpg" },
		{ "src" : "images/Q2.jpg" },
		{ "src" : "images/Q3.jpg" },
		{ "src" : "images/Q4.jpg" },
		{ "src" : "images/Q5.jpg" },
		{ "src" : "images/Q6.jpg" },
		{ "src" : "images/Q7.jpg" },
		{ "src" : "images/Q8.jpg" },
]

var guayaquil = [
		{ "src" : "images/G1.jpg" },
		{ "src" : "images/G2.jpg" },
		{ "src" : "images/G3.jpg" },
		{ "src" : "images/G4.jpg" },
		{ "src" : "images/G5.jpg" },
		{ "src" : "images/G6.jpg" },
		{ "src" : "images/G7.jpg" },
		{ "src" : "images/G8.jpg" },
		{ "src" : "images/G9.jpg" },
		{ "src" : "images/G10.jpg" },
]

var cuenca = [
		{ "src" : "images/C1.jpg" },
		{ "src" : "images/C2.jpg" },
		{ "src" : "images/C3.jpg" },
		{ "src" : "images/C4.jpg" },
		{ "src" : "images/C5.jpg" },
		{ "src" : "images/C6.jpg" },
		{ "src" : "images/C7.jpg" },
		{ "src" : "images/C8.jpg" },
]

var loja = [
		{ "src" : "images/L1.jpg" },
		{ "src" : "images/L2.jpg" },
		{ "src" : "images/L3.jpg" },
		{ "src" : "images/L4.jpg" },
		{ "src" : "images/L5.jpg" },
		{ "src" : "images/L6.jpg" },
		{ "src" : "images/L7.jpg" },
		{ "src" : "images/L8.jpg" },
		{ "src" : "images/L9.jpg" },
		{ "src" : "images/L10.jpg" },
		{ "src" : "images/L11.jpg" },
]

document.onreadystatechange = function () {
	if ( document.readyState == "complete" ){

		initWidget( "gallery-quito", quito);
		initWidget( "gallery-guayaquil", guayaquil, "thumbnail");

		initWidget( "gallery-cuenca", cuenca, "single", 4 );
		initWidget( "gallery-loja", loja, "thumbnail", 8 );

	}
}