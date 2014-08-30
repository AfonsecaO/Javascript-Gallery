function initWidget ( gallery, images, mode, index ) {

	var mode  = mode || "single";
	var index = index || 0;

	var img = new nextImage( gallery, images, mode, index );

	var galleryContainer = document.getElementById( gallery );
	galleryContainer.innerHTML = "";
	galleryContainer.appendChild(img);
	
	if( mode == "thumbnail" ){
		
		var filmstrip = document.createElement("div");
		filmstrip.classList.add("filmstrip");

		for (var k in images){
			
			var img = new nextImage( gallery, images, mode, k );
			img.classList.add("img-thumbnail");
			img.classList.remove("img-responsive");

			filmstrip.appendChild(img);
			
			var galleryContainer = document.getElementById( gallery );
			//galleryContainer.innerHTML = "";
			galleryContainer.parentNode.insertBefore(filmstrip);
		}
	}

}

var nextImage = function( gallery, images, mode, index ){

	var img = new Image();
	
	img.src   = images[index].src;

	img.classList.add("img-responsive");

	img.name  = index;

	img.addEventListener( "click", function ( e ){
		
		var imgIndex = parseInt( this.name );

		if( mode != "thumbnail" ){
			imgIndex = parseInt( this.name ) + 1;

			if( ( images.length - 1 ) == this.name )
				imgIndex = 0;			
		}

		var img = new nextImage( gallery, images, mode, imgIndex );

		var galleryContainer = document.getElementById( gallery );
		galleryContainer.innerHTML = "";
		galleryContainer.appendChild( img );

	});

	return img;

}