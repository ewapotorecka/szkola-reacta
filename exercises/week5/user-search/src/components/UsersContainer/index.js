import React, { useEffect, useState } from 'react';
import UserSearch from '../UserSearch';


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
				setIsLoaded( true );
				setData( result );
			} )
			.catch( error => {
				setIsLoaded( true );
				setError( error );
			} );

	}, [] );

	if ( error ) {
		return <div className='error'>{ error.message }</div>
	} else if ( !isLoaded ) {
		return <div className='loading'>Loading</div>
	} else {
		return (
			<div>
				<UserSearch users={ data }/>
			</div>
			
		)
	}
}

export default UsersContainer;