loadDynamicContent = function(imageData) {

	var $w = $(window),
		sw = document.documentElement.clientWidth;

	function contentLoader(index, info) {

		var entry = this;

		function createImgElem() {
			// Check if entry.imageElem exists
			if (!entry.imageElem) {
				// Create new image element
				entry.imageElem = $('<img class="' + entry.customClass + '" src="' + entry.image + '" alt="' + (entry.altAttr ? entry.altAttr : " ") + '">');
				// Wrap img with parent element if defined in image data object
				entry.imageElem = entry.parent ? $(entry.imageElem[0]).wrap(entry.parent).parent() : entry.imageElem;
			}
		}

		this.insertImage = function() {
			if ( $(this.target).length > 0 && $(this.target).find(this.imageElem).length === 0 && sw > this.breakpoint ) {
				createImgElem();
				this.location === 'prepend' ? $(this.target).prepend(this.imageElem) : $(this.target).append(this.imageElem);
			}
		};

		return this;

	};

	// Create individual image instances
	$.each(imageData, function(i, v) {
		var imageDetails = contentLoader.call(this, i, v);
		imageData[i] = imageDetails;
	});

	// On window load and resize check for new images to be inserted into DOM
	$w.on('load resize', function() {
		sw = document.documentElement.clientWidth;
		$.each(imageData, function(i, v) {
			v.insertImage();
		});
	});

};