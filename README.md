How to use Read Slide More?
==============
 
**1. You may use it straight away using the predefined values as indicated in Usage #3**
	$(selector).readSlideMore();

**2. You may put the number of elements to be shown as the parameter**
	$(selector).readSlideMore(4); // Set the rows to 4 elements only

**3. You may pass your object configuration to update some of the available options**
	$(selector).readSlideMore({
		elements	: 5,
		moreHTML	: 'Read More',
		lessHTML	: 'Read Less',
		containerClass	: '',
		buttonClass	: ''
	});

	
What is Read Slide More?
--------------
Straight to the point plugin as an alternative for read more link
This plugin will act as an accordion containing the rest of the content.
	
IMPORTANT NOTES:
--------------
When you will use this plugin, make sure that the content is the only thing inside the selected element

IMPORTANT UPDATES:
--------------
- The plugin is now responsive.
- Now supports contents with ol, ul, h2, h3, div
- added h1, h4, h5 to supported elements
- Added condition that will only activate the plugin if the number of elements is greater than the number of elemnts to be shown
- Multiple Read Slide More will now work in 1 page