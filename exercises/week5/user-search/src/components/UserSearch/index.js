import React, { useState, useRef } from 'react';
import UsersList from '../UsersList';
import Button from '../Button';
import './user-search.scss';

export default function UserSearch( { users, clearInput } ) {
	const [ inputValue, setInputValue ] = useState('');
	const [ searchResults, setSearchResults ] = useState();
	const searchInput = useRef();

	const handleClick = () => {
		setInputValue( '');
	}

	const handleSubmit = event => {
		event.preventDefault();
		searchUser( inputValue );
	};

	const handleChange = () => {
		setInputValue( searchInput.current.value );
		clearInput = false;
	};

	const searchUser = phrase => {
		const result =[];

		for ( const user of users ) {
			if ( user.name.toLowerCase() === phrase.toLowerCase() || user.lastName.toLowerCase() === phrase.toLowerCase() ) {
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
			<div className='search-container'>
				<form onSubmit={ handleSubmit }>
					<input type='text' ref={ searchInput } onChange={ handleChange } value={ inputValue }/>
				</form>
				<Button onClick={ handleClick }>Reset</Button>
			</div>
			<div className='user-list-container'>
				{ renderSearchResults() }
			</div>
		</div>

	);
}