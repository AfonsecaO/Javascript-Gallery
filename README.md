Javascript-Gallery
==================
without any JavaScript libraries

Gallery widget Version 1.0
30/08/2014
Demo gallery widget.
by Alan Fonseca O.
Tested on
 	--- Chrome Version 37.0.2062.94
 	--- Safari Version 8.0 (10600.1.8)
 	
How to setup.
 
1.- Link the files
		```bash
	 	<link rel="stylesheet" href="css/style.css">
		<script src="js/widget.js"></script>
		```


2.- Create a container
		```bash
		<section class="container">
			<div id="CONTAINER_GALLERY_ID" class="container-gallery"></div>
		</section>
		```

3.- Create image object with the path for each image
		```bash
		 var IMAGE_OBJECT = [
				{ "src" : "images/img1.jpg" },
				{ "src" : "images/img2.jpg" },
				{ "src" : "images/img3.jpg" },
				{ "src" : "images/img4.jpg" },
				{ "src" : "images/img5.jpg" },
				{ "src" : "images/img6.jpg" },
				{ "src" : "images/img7.jpg" },
				{ "src" : "images/img8.jpg" },
		]
		```

4.- Initialize widget
 		-- SINGLE MODE
 			initWidget( "CONTAINER_GALLERY_ID", IMAGE_OBJECT );
 			OR
 			initWidget( "CONTAINER_GALLERY_ID", IMAGE_OBJECT, "single" );

 		-- THUMBNAIL MODE
			initWidget( "CONTAINER_GALLERY_ID", IMAGE_OBJECT, "thumbnail" );

		-- SINGLE MODE / THUMBNAIL MODE - INDEX OPTIONAL
			if you want initialize the gallery with a specific image, you must set the index of image.
			initWidget( "CONTAINER_GALLERY_ID", IMAGE_OBJECT, "single", INDEX );
			initWidget( "CONTAINER_GALLERY_ID", IMAGE_OBJECT, "thumbnail", INDEX );

5.- Enjoy it.	