import React from 'react';

const ButtonWithForwardRef = React.forwardRef( ( props, ref )  => {
	const styles = {
		backgroundColor: props.backgroundColor,
		cursor: 'pointer'
	};


	return (
		<button
			ref={ ref }
			style={ styles }
			onMouseOver={ props.onMouseOver }
			onMouseLeave={ props.onMouseLeave }>
				{ props.children }
		</button>
	);
} );

ButtonWithForwardRef.defaultProps = {
	backgroundColor: 'blue'
}

export default ButtonWithForwardRef;
