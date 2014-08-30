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
		{ "src" : "images/G10.jpg" },		{ "src" : "images/G1.jpg" },
		{ "src" : "images/G2.jpg" },
		{ "src" : "images/G3.jpg" },
		{ "src" : "images/G4.jpg" },
		{ "src" : "images/G5.jpg" },
		{ "src" : "images/G6.jpg" },
		{ "src" : "images/G7.jpg" },
		{ "src" : "images/G8.jpg" },
		{ "src" : "images/G9.jpg" },
		{ "src" : "images/G10.jpg" },		{ "src" : "images/G1.jpg" },
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

var loja = [
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

document.onreadystatechange = function () {
	if ( document.readyState == "complete" ){

		initWidget( "gallery-quito", quito, "thumbnail");
		initWidget( "gallery-guayaquil", guayaquil, "thumbnail", 4 );

		initWidget( "gallery-cuenca", cuenca, "single", 0 );
		initWidget( "gallery-loja", loja);

	}
}