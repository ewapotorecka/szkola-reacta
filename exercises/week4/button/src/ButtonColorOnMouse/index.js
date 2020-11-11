import React, { useEffect, useRef, useState } from 'react';

function ButtonColorOnMouse( props ) {
	const button = useRef();
	const styles = {
		backgroundColor: props.backgroundColor,
		cursor: 'pointer'
	};
	const [ mouseOver, setMouseOver ] = useState( false );

	useEffect( () => {
		if ( mouseOver ) {
			button.current.style.backgroundColor = 'red';
			button.current.style.color = 'white';
		} else {
			button.current.style.backgroundColor = 'blue';
			button.current.style.color = 'black';
		}

	} );

	return (
		<button
			ref={ button }
			style={ styles }
			onMouseOver={ () => setMouseOver( true ) }
			onMouseLeave={ () => setMouseOver( false )}>
			Click me!
		</button>
	);
}

ButtonColorOnMouse.defaultProps = {
	backgroundColor: 'blue'
}

export default ButtonColorOnMouse;
