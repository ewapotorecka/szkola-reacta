import React from 'react';
import './user.css';

export default function User( { data } ) {
	return (
		<div className='user-element'>
			{ data.name.first } { data.name.last }
		</div>
	);
}