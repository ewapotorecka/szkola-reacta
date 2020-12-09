import React from 'react';
import Moment from 'react-moment';
import './user.scss';

export default function User( { userData } ) {
	
	return (
		<div className='user-container'>
			{ userData.name &&
				<div>
					<h3>{ userData.name.first } {userData.name.last}</h3>
				</div>
			}
			{ !userData.name &&
				<div>
					<p>Name was not provided</p>
				</div>
			}
			<div>
				<img src={ userData.picture.medium } alt='profile'/>
			</div>
			{ userData.location &&
				<div>
					<p>Address:</p>
					<p>{ userData.location.street.number } { userData.location.street.name } { userData.location.city }</p>
				</div>
			}
			{ !userData.location &&
				<div>
					<p>Missing address</p>
				</div>
			}
			<div><p>E-mail:</p><p>{ userData.email }</p></div>
			<div><p>Registration date:</p><p><Moment format='MMMM Do YYYY' date={ userData.registered.date }/></p></div>
		</div>
	);
}