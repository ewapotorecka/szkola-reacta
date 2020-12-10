import React from 'react';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import './placeholder.scss';


const placeholderStyles = {
	border: '2px solid #CDCDCD',
	borderRadius: '5px',
	width: '400px',
	margin: '20px auto',
	padding: '20px'
}

export default function Placeholder( {placeholdersNumber, isLoaded } ) {
	const placeholders = [];

	for ( let i = 0; i < placeholdersNumber; i++ ) {
		placeholders.push( <ReactPlaceholder type='media' rows={5} ready={isLoaded} showLoadingAnimation={true} style={ placeholderStyles }/> )
	}

	return (
		<div className='placeholder-container'>
			{
				placeholders.map( placeholder => {
					return placeholder;
				} )
			}
		</div>
	);
}