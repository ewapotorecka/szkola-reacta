import React, { useState, useRef } from 'react';
import UsersList from '../UsersList';
import Button from '../Button';
import './user-search.scss';

export default function UserSearch( { usersData } ) {
	const [ inputValue, setInputValue ] = useState('');
	const [ users, setUsers ] = useState( usersData );
	const searchInput = useRef();

	const handleClick = () => {
		setInputValue( '');
		setUsers( usersData );
	}

	const handleSubmit = event => {
		event.preventDefault();
		searchUser( inputValue );
		setInputValue( '' );
	};

	const handleChange = () => {
		setInputValue( searchInput.current.value );
	};

	const searchUser = phrase => {
		const result = usersData.filter( ( element ) => {
			const nameLastName = `${ element.name.toLowerCase() } ${ element.lastName.toLowerCase() }`;

			return nameLastName.includes( phrase.toLowerCase() );
		} );

		setUsers( result );
	};


	return (
		<div>
			<div className='search-container'>
				<form onSubmit={ handleSubmit }>
					<input
						type='text'
						ref={ searchInput }
						onChange={ handleChange }
						value={ inputValue }
						placeholder='Type name or last name'/>
				</form>
				<Button onClick={ handleClick }>Reset</Button>
			</div>
			<div className='user-list-container'>
				<UsersList users={ users }/>
			</div>
		</div>

	);
}