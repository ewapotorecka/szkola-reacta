import React from 'react';
import User from './User';
import './users-list.css';

export default function UsersList( { data } ) {
	return <div className='users-list'>
		{ data.map( user => {
			return <User data={ user } key={ user.login.uuid } />;
		} ) }
	</div>
}
