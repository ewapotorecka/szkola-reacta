import React from 'react';

function Button( props ) {
	const { onClick } = props;

	return(
		<button onClick={ onClick }>{ props.children }</button>
	);
}

Button.defaultProps = {
	onClick: function(){}
}

export default Button;