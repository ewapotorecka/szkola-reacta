import React, { useState } from 'react';

export default function Input( { onSubmit } ) {
	const [ inputValue, setInputValue ] = useState( 0 );
	const handleSubmit = ( event ) => {
		event.preventDefault();
		onSubmit( parseInt( inputValue ) );
		setInputValue( 0 );
	}

	return (
		<form onSubmit={ handleSubmit }>
			<input type='number' onChange={ e => setInputValue( e.target.value )} value={ inputValue } name='input'/>
			<button type='submit' className='submit-button'>Change</button>
		</form>
	);
};