import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import User from '../User';
import './users-list.scss';

export default function UsersList( {handleClick} ) {
	const [ isLoaded, setIsLoaded ] = useState( false );
	const [ error, setError ] = useState( null );
	const [ data, setData ] = useState();

	useEffect( () => {
		fetch( 'https://randomuser.me/api/?results=10')
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
					{data.map( ( user ) => {
						return <Link
									onClick={ () => handleClick( user )  }
									to={ `/users/${user.login.uuid}` }
									key={ `${user.login.uuid}` }>
											<User userData={ user } userId={ user.login.uuid }/>
								</Link>
					} ) }
				</div>
	}
}