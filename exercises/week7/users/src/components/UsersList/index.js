import React, { useEffect, useState } from 'react';
import User from '../User';
import './users-list.scss';

export default function UsersList() {
	const [ isLoaded, setIsLoaded ] = useState( false );
	const [ error, setError ] = useState( null );
	const [ data, setData ] = useState();

	useEffect( () => {
		fetch( 'https://randomuser.me/api/?results=10', {
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			}
		} )
			.then( response => response.json() )
			.then( result => {
				setData( result.results );
				setIsLoaded( true );
			} )
			.catch( error => {
				setError( error );
				setIsLoaded( true );
			})
	}, [] );

	if (!isLoaded) {
		return <div>Loading</div>
	} else if ( error ) {
		return <div>{ error.message }</div>
	} else {
		return <div className='users-list-container'>
					{data.map( user => {
						return <User userData={ user }/>
					} ) }
				</div>
	}
}