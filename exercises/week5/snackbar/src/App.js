import './App.css';
import React, { useState } from 'react';
import Snackbar from './Snackbar';
import Button from './Button';



function App() {
	const [ open, setOpen ] = useState( false );
	const handleClick = () => {
		setOpen( true );
	};
	const handleClose = () => {
		setOpen( false );
	}

	return (
		<div className="App">
			<Button onClick={ handleClick }>Open Snackbar!</Button>
			<Snackbar
				open={ open }
				onClose={ handleClose }
				time={ 1000 }
				position={ 'bottom-right' }
				type={ 'error' }
				message={ 'This is an error snackbar' } />
		</div>
	);
}

export default App;
