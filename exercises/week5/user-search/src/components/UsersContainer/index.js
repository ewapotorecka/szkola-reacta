import React, { useEffect, useState } from 'react';
import UserSearch from '../UserSearch';
import './users-container.scss';


function UsersContainer() {
	const [ data, setData ] = useState( [] );
	const [ isLoaded, setIsLoaded ] = useState( false );
	const [ error, setError ] = useState( null );

	useEffect( () => {
		fetch( '/users.json',
		{ headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		} } )
			.then( res => res.json() )
			.then( result => {
				setData( result );
				setIsLoaded( true );
			} )
			.catch( error => {
				setError( error );
				setIsLoaded( true );
			} );

	}, [] );

	if ( error ) {
		return <div className='error'>{ error.message }</div>
	} else if ( !isLoaded ) {
		return <div className='loading'>Loading</div>
	} else {
		return (
			<div className='users-container'>
				<UserSearch usersData={ data }/>
			</div>
		)
	}
}

export default UsersContainer;