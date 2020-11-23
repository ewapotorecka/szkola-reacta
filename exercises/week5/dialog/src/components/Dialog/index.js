import React from 'react';
import Button from '../Button';
import './styles.css';

function Dialog( props ) {
	return (
		<div className={ `dialog ${ props.active ? 'dialog--open' : '' }` }>
			<div className="close-button-container">
				<Button onClick={ props.onClose }>X</Button>
			</div>
			<div className="content-container">
				<h3>{ props.title }</h3>
				<p>{ props.content }</p>
			</div>
			<div className="buttons-container">
				<Button onClick= { props.onConfirm }>Confirm</Button>
				<Button onClick={ props.onAbort }>Abort</Button>
			</div>
		</div>
	)
}

export default Dialog;