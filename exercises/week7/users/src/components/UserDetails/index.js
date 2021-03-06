import React from 'react';
import Moment from 'react-moment';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './user-details.scss';

export default function UserDetails({data}) {
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
			<MapContainer center={[data.location.coordinates.latitude, data.location.coordinates.longitude]} zoom={13} scrollWheelZoom={false} >
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[data.location.coordinates.latitude, data.location.coordinates.longitude]}>
					<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
}