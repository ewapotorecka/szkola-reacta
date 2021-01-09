import React, { useEffect, useState } from 'react';
import UsersList from '../components/UsersList';

export default function Users() {
	const [ users, setUsers ] = useState( [] );
	const [ isLoaded, setIsLoaded ] = useState( false );
	const [ error, setError ] = useState( false );

	useEffect( () => {
		fetch( 'https://randomuser.me/api/?results=10' )
			.then( response => response.json() )
			.then( result => {
				setUsers( result.results );
				setIsLoaded( true );
			} )
			.catch( error => {
				setIsLoaded( true );
				setError( error );
			} )
	}, [] );
	return <div className='users-container'>
		{ isLoaded && <UsersList data={ users } /> }
		{ error && <div>{ error.message }</div> }

	</div>
}

