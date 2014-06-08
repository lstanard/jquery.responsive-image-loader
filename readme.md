# Simple jQuery Responsive Image Loader

The purpose of this plugin is to provide a list of images, including breakpoints, via a JSON file and then load in those images dynamically depending on screen width.

## Object properties:

`{
	"breakpoint": "1025",
	"image": "_img/some-image.png",
	"target": "#sample-target .some-container",
	"location": "prepend",
	"customClass": "image-class",
	"altAttr": "This is an image",
	"parent": "<figure>"
}`

#### Required properties:
- Breakpoint:
	- Minimum window width in pixels at which to display the image
- Image (full path)
	- Full path to the image file
- Target element
	- Any valid jQuery selector

#### Optional properties:
- Location (default is append)
	- Accepts "prepend" or "append", the latter being the default
- Custom class
	- Add a custom class to the image element
- Alt attribute
	- Specify an alt attribute for the image
- Parent wrapper element
	- Specify an element to wrap around the image element