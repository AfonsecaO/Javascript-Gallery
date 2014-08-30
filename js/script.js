var quito_city = [
		{ "src" : "images/Q1.jpg" },
		{ "src" : "images/Q2.jpg" },
		{ "src" : "images/Q3.jpg" },
		{ "src" : "images/Q4.jpg" },
		{ "src" : "images/Q5.jpg" },
		{ "src" : "images/Q6.jpg" },
]

document.onreadystatechange = function () {
	if ( document.readyState == "complete" ){

		initWidget( "gallery-quito", quito_city, "single", 0 );
		initWidget( "gallery-guayaquil", quito_city, "thumbnail", 5 );

	}
}