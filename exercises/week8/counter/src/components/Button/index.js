import React from 'react';

export default function Button( { type, onClick } ) {
	let value;

	if ( type === 'increment' ) {
		value = '+';
	} else if ( type === 'decrement' ) {
		value = '-';
	} else if ( type === 'reset' ) {
		value= 'Reset';
	}
	return (
		<button onClick={ onClick } className={ type }>{ value }</button>
	);
}