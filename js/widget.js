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