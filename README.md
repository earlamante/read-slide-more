/**
 * Read Slide More
 *
 * Straight to the point plugin as an alternative for read more link
 * This plugin will act as an accordion containing the rest of the content.
 *
 * @param1 Integer 			- Number of Elements to be shown
 * @param1 Object
 * @option rows				- Integer 	- Number of paragraphs to be shown (default: 2)
 * @option moreHTML			- String	- The caption to be used for the link to show the read more link (default: 'Read More...')
 * @option lessHTML			- String	- The caption to be used for the link to show the read more link when the content is collapsed (default: 'Read Less...')
 * @option containerClass	- String	- The class to be added to the content container (default: '')
 * @option buttonClass		- String	- The class to be added to the read more button (default: '')
 *
 * Usage:
 
$(selector).readSlideMore();

$(selector).readSlideMore(4); // Set the rows to 4 elements only

$(selector).readSlideMore({
	elements	: 5,
	moreHTML	: 'Read More',
	lessHTML	: 'Read Less',
	containerClass	: '',
	buttonClass	: ''
});
	
 *
 * IMPORTANT NOTES:
 * When you will use this plugin, make sure that the content is the only thing inside the selected element
 *
 * UPDATES:
 * The plugin is now responsive.
 * Now supports contents with ol, ul, h2, h3, div
 * added h1, h4, h5 to supported elements
 *
 * Added condition that will only activate the plugin if the number of elements is greater than the number of elemnts to be shown
 *
 * Multiple Read Slide More will now work in 1 page
 *
 * @author	earlamante
 * @version 2.13.69
 */
