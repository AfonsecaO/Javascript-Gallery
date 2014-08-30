var my_images = {
	"single" : 
	[
		{ "src" : "images/Q1.jpg" },
		{ "src" : "images/Q2.jpg" },
		{ "src" : "images/Q3.jpg" },
	],
	"thumbnail" :
	[
		{ "src" : "images/Q4.jpg" },
		{ "src" : "images/Q5.jpg" },
		{ "src" : "images/Q6.jpg" },
	]
}

document.onreadystatechange = function () {
	if ( document.readyState == "complete" ){

		initWidget( "gallery-quito", "single", 0 );
		initWidget( "gallery-guayaquil", "thumbnail", 0 );

	}
}