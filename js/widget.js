function initWidget ( gallery, mode, index ) {

	var mode  = mode || "single";
	var index = index || 0;

	var img = new nextImage( gallery, mode, index );

	var galleryContainer = document.getElementById( gallery );
	galleryContainer.innerHTML = "";
	galleryContainer.appendChild(img);
	
	if( mode == "thumbnail" ){
		
		var thumbnail = my_images.thumbnail;

		var filmstrip = document.createElement("div");
		filmstrip.classList.add("filmstrip");

		for (var k in thumbnail){
			
			var img = new nextImage( gallery, mode, k );
			filmstrip.appendChild(img);
			
			var galleryContainer = document.getElementById( gallery );
			//galleryContainer.innerHTML = "";
			galleryContainer.parentNode.insertBefore(filmstrip);
		}
	}

}

var nextImage = function( gallery, mode, index ){

	var img = new Image();
	
	img.src   = my_images[mode][index].src;
	img.name  = index;

	img.addEventListener( "click", function ( e ){
		
		console.log( this.name );
		console.log( this.parentNode.id )

		var imgIndex = parseInt( this.name );

		if( mode != "thumbnail" ){
			imgIndex = parseInt( this.name ) + 1;

			if( ( my_images[ mode ].length - 1 ) == this.name )
				imgIndex = 0;			
		}

		var img = new nextImage( gallery, mode, imgIndex );

		var galleryContainer = document.getElementById( gallery );
		galleryContainer.innerHTML = "";
		galleryContainer.appendChild( img );

	});

	return img;

}