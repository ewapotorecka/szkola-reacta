import React,  { useEffect, useRef } from 'react';

function ButtonColorOnRender( props ) {
	const button = useRef();
	const styles = {
		backgroundColor: props.backgroundColor,
		cursor: 'pointer'
	};

	useEffect( () => {
		button.current.style.backgroundColor = 'red';
		button.current.style.color = 'white';
	} );

	return (
		<button ref={ button } style={ styles }>Click me!</button>
	);
}

ButtonColorOnRender.defaultProps = {
	backgroundColor: 'blue'
}

export default ButtonColorOnRender;