import React from 'react';
import Moment from 'react-moment';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function UserDetails({data}) {
	console.log( data )



	return (
		<div className='user-container'>
			{ data.name &&
				<div>
					<h3>{ data.name.first } {data.name.last}</h3>
				</div>
			}
			{ !data.name &&
				<div>
					<p>Name was not provided</p>
				</div>
			}
			<div>
				<img src={ data.picture.medium } alt='profile'/>
			</div>
			{ data.location &&
				<div>
					<p>Address:</p>
					<p>{ data.location.street.number } { data.location.street.name } { data.location.city }</p>
				</div>
			}
			{ !data.location &&
				<div>
					<p>Missing address</p>
				</div>
			}
			<div><p>E-mail:</p><p>{ data.email }</p></div>
			<div><p>Registration date:</p><p><Moment format='MMMM Do YYYY' date={ data.registered.date }/></p></div>
		</div>
	);
}