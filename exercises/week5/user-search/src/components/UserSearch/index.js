import React, { useState } from 'react';
import UsersList from '../UsersList';

export default function UserSearch( { users } ) {
	const [ inputValue, setInputValue ] = useState('');
	const [ searchResults, setSearchResults ] = useState();

	const handleSubmit = event => {
		event.preventDefault();
		searchUser( inputValue );
	};

	const handleChange = event => {
		setInputValue( event.target.value );
	};

	const searchUser = phrase => {
		const result =[];

		for ( const user of users ) {
			if ( user.name === phrase ) {
				result.push( user );
			}
		}

		setSearchResults( result );
	};
	const renderSearchResults = () => {
		if ( searchResults ) {
			return <UsersList users={ searchResults }/>
		}
	};

	return (
		<div>
			<form onSubmit={ handleSubmit }>
				<input type='text' onChange={ handleChange }/>
			</form>
			{ renderSearchResults() }
		</div>

	);
}