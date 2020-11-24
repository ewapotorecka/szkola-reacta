import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './snackbar.css';

function Snackbar( props ) {
	const { open, time, onClose, type, message, position } = props;
	let content='';
	let timeoutId;

	useEffect( () => {
		return () => {
			clearTimeout( timeoutId );
		}
	} );

	if ( open ) {
		content = <div className={ type }>{ message }</div>;
		timeoutId = setTimeout( onClose, time );
	}

	return (
		<div className={ position }>{ content }</div>
	)

}

const types = [ 'error', 'success', 'warning', 'information' ];
const positions= [ 'top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right' ];

Snackbar.propTypes = {
	type: PropTypes.oneOf( types ).isRequired,
	position: PropTypes.oneOf( positions ).isRequired,
	message: PropTypes.string.isRequired,
	time: PropTypes.number.isRequired,
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired
};

export default Snackbar;

