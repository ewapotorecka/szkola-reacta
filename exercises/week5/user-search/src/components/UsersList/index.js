import React from 'react';
import User from '../User';

export default function UsersList( { users } ){
	return (
		<ul>
			{ users.map( user => {
				return <User data={ user } key={ user.id }/>
			} ) }
		</ul>
	);
}
