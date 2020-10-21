import React from 'react';

function BlogTile( { title, intro } ) {
	const checkIntroLength = ( intro ) => {
		if ( intro.length >= 25 ) {
			return `${intro.substring( 0, 25 )}...` 
		} else {
			return intro;
		}
	}
	const blogTileStyle = {
		'border': '2px solid #707070',
		'background-color': '#3F3F3F',
		'color': '#FFFFFF',
		'border-radius': '7px',
		'width': '500px',
		'margin-top': '20px',
		'margin-bottom': '20px',
		'margin-right': 'auto',
		'margin-left': 'auto'
	};

	return (
		<div className="blog-tile-container" style={blogTileStyle}>
			<h2>{title}</h2>
			<p>{checkIntroLength(intro)}</p>
		</div>
	)
}

export default BlogTile;