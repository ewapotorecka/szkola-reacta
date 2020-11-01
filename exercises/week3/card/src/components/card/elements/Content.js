import React from 'react';

function Content( props ) {
	const { intro, img } = props;
	const styles = {
		backgroundImage: `${ img }`,
		backgroundSize: 'cover',
		height: 300
	};

	return(
		<div className="content">
			<div className="img-container" style={ styles }></div>
			<div className="recipe-container">
				<p>{ intro }</p>
			</div>
		</div>
	)
}

export { Content };