import React from 'react';
import './styles.css';

function Button( props ) {
	return (
		<button className="main__button" onClick={ () =>  props.onClick() }>{ props.children }</button>
	);
}

export default Button;