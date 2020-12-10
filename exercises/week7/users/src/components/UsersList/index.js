import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import User from '../User';
import './users-list.scss';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

const placeholderStyles = {
	border: '2px solid #CDCDCD',
	borderRadius: '5px',
	width: '400px',
	margin: '20px auto',
	padding: '20px'
	
}

export default function UsersList( {handleClick} ) {
	const [ isLoaded, setIsLoaded ] = useState( false );
	const [ error, setError ] = useState( null );
	const [ data, setData ] = useState();

	useEffect( () => {
		fetch( 'https://randomuser.me/api/?results=10')
			.then( response => response.json() )
			.then( result => {
				setTimeout( () => {
					setData( result.results );
					setIsLoaded( true );
				},5000 );
			} )
			.catch( error => {
				setError( error );
				setIsLoaded( true );
			})
	}, [] );

	if (!isLoaded) {
		return <ReactPlaceholder type='media' rows={5} ready={isLoaded} showLoadingAnimation={true} style={ placeholderStyles }></ReactPlaceholder>
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