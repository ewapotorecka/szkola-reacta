import React from 'react';
import Button from './components/Button';

export default function Home() {
	return (
		<div className='home-container'>
			<Button action={ () => console.log( 'load' ) }>Load</Button>
			<Button>Reset</Button>
			<Button>Add</Button>
		</div>
	);
}
