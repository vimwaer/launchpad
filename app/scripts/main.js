$(document).ready(function() {


	/* ISOTOPE */
	var $container = $('#isotope').imagesLoaded( function() {
	  $container.isotope({
	    // options
		  itemSelector: '.post',
		  layoutMode: 'masonry',
		  getSortData: {
		    name: '.name',
		    category: '[data-category]'
		  },
		  // layout mode options
		  masonry: {
		    // columnWidth: 200
		  }
	  });
	});


	$container.infinitescroll({
		navSelector: ".pagination",
		nextSelector: ".pagination a:last-child",
		itemSelector: "article",
	  }, function (newElements) {
	    container.isotope('appended', $(newElements));
	  });


});
