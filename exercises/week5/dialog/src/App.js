import './App.css';
import React, { useState } from 'react';
import Button from './components/Button';
import Dialog from './components/Dialog';

function App() {
	const [ activeDialog, setActiveDialog ] = useState( false );
	const handleOpen = () => {
		setActiveDialog( true );
	};
	const handleClose = () => {
		setActiveDialog( false );
	};
	const handleConfirm = () => {
		console.log( 'Confirm' );
	};
	const handleAbort = () => {
		console.log( 'Abort' );
	};

	return (
		<div className={ `App ${ activeDialog ? 'shadow' : '' }`}>
			<Button onClick={ handleOpen }>Open dialog</Button>
			<Dialog
				title="Dialog"
				content="This is a simple dialog."
				active={ activeDialog }
				onClose={ handleClose }
				onConfirm={ handleConfirm }
				onAbort={ handleAbort }/>
		</div>
	);
}

export default App;
