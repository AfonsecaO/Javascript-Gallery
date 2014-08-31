/**
 * Gallery widget Version 1.0
 * 30/08/2014
 * Demo gallery widget.
 * by Alan Fonseca O.
 * Tested on
 *  	--- Chrome Version 37.0.2062.94
 *  	--- Safari Version 8.0 (10600.1.8)
 *  	
 * How to setup.
 
 * 1.- Link the files
	 	<link rel="stylesheet" href="css/style.css">
		<script src="js/widget.js"></script>

 * 2.- Create a container
		<section class="container">
			<div id="CONTAINER_GALLERY_ID" class="container-gallery"></div>
		</section>

 * 3.- Create image object with the path for each image
		 var IMAGE_OBJECT = [
				{ "src" : "images/Q1.jpg" },
				{ "src" : "images/Q2.jpg" },
				{ "src" : "images/Q3.jpg" },
				{ "src" : "images/Q4.jpg" },
				{ "src" : "images/Q5.jpg" },
				{ "src" : "images/Q6.jpg" },
				{ "src" : "images/Q7.jpg" },
				{ "src" : "images/Q8.jpg" },
		]

 * 4.- Initialize widget
 		-- SINGLE MODE
 			initWidget( "CONTAINER_GALLERY_ID", IMAGE_OBJECT );
 			OR
 			initWidget( "CONTAINER_GALLERY_ID", IMAGE_OBJECT, "single" );

 		-- THUMBNAIL MODE
			initWidget( "CONTAINER_GALLERY_ID", IMAGE_OBJECT, "thumbnail" );

		--- SINGLE MODE / THUMBNAIL MODE - INDEX OPTIONAL
			if you want initialize the gallery with a specific image, you must set the index of image.
			initWidget( "CONTAINER_GALLERY_ID", IMAGE_OBJECT, "single", INDEX );
			initWidget( "CONTAINER_GALLERY_ID", IMAGE_OBJECT, "thumbnail", INDEX );

 * 5.- Enjoy it.	
 */

/**
 * Initialize the widget
 * @param  {string} gallery : ID of the container to initialize
 * @param  {object} images  : Object of images with the path
 * @param  {string} mode    : Single / thumbnail mode to set to Gallery
 * @param  {int} 	index   : Optional, index of a image into the Object
 */
function initWidget ( gallery, images, mode, index ) {

	// Initializing variables with default value if not exist.
	var mode  = mode || "single";
	var index = index || 0;

	// Send variables and get image Object
	var img = new getImage( gallery, images, mode, index );

	// Append the image object, to the container
	var galleryContainer = document.getElementById( gallery );
	galleryContainer.innerHTML = "";
	galleryContainer.appendChild(img);
	
	// If mode is thumbnail, for each image in the object "images" create a new element and append it
	if( mode == "thumbnail" ){
		
		// Create a container for the thumbnails images "filmstrip"
		var filmstrip = document.createElement("div");
		filmstrip.classList.add("filmstrip");

		// Get all images
		for (var k in images){
			
			var img = new getImage( gallery, images, mode, k );
			// Set class "img-thumbnail"
			img.classList.add("img-thumbnail");
			// Remove default class "img-large"
			img.classList.remove("img-large");

			// each image will be append to the container "filmstrip"
			filmstrip.appendChild(img);
			
			// "filmstrip" is insert before the gallery container
			var galleryContainer = document.getElementById( gallery );
			galleryContainer.parentNode.insertBefore(filmstrip);
		}
	}

}


/**
 * Create image object
 * @param  {string} gallery : ID of the container to initialize
 * @param  {object} images  : Object of images with the path
 * @param  {string} mode    : Single / thumbnail mode to set to Gallery
 * @param  {int} 	index   : Optional, index of a image into the Object
 * @return {object}			: Image Object
 */
var getImage = function( gallery, images, mode, index ){

	// Create image element
	var img = new Image();
	// Set source attribute
	img.src   = images[index].src;
	// Add class "img-large"
	img.classList.add("img-large");
	// Set name to the image element
	img.name  = index;

	// Listener on event when a img is clicked
	img.addEventListener( "click", function ( e ){

		// if mode is thumbnail. index remains
		var imgIndex = parseInt( this.name );

		// if mode is single. index + 1 or cycle back to the first image
		if( mode == "single" ){
			imgIndex = parseInt( this.name ) + 1;

			if( ( images.length - 1 ) == this.name )
				imgIndex = 0;			
		}

		// Get and set the new image to change the main image
		var img = new getImage( gallery, images, mode, imgIndex );

		var galleryContainer = document.getElementById( gallery );
		galleryContainer.innerHTML = "";
		galleryContainer.appendChild( img );

	});

	// return image object
	return img;

}