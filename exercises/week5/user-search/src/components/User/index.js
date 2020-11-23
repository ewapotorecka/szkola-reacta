import React from 'react';

export default function User( { data } ) {
	return (
		<li>
			<span>{ data.name }</span>
			&nbsp;
			<span>{ data.lastName }</span>
		</li>
	);
}

