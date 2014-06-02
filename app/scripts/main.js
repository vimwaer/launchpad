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


});
