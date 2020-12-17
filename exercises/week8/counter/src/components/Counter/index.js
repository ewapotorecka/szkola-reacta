import React, { useState } from 'react';
import Display from '../Display';
import Button from '../Button';
import Input from '../Input';

export default function Counter( { start }) {
	const [ value, setValue ] = useState( start );

	return (
		<div>
			<Display value={ value } className='display'/>
			<Button type='reset' onClick={ () => setValue( start ) }/>
			<Button type='increment' onClick={ () => setValue( value + 1 ) }/>
			<Button type='decrement' onClick={ () => setValue( value - 1 ) }/>
			<Input onSubmit={ ( inputValue ) => setValue( inputValue ) }/>
		</div>
	);
};


Counter.defaultProps = {
	start: 0
};