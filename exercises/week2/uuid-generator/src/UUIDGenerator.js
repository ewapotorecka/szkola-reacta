import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function generateUUID() {
	const newUUID = uuidv4()
	return newUUID;
}

function UUIGenerator() {
	const [ UUID, setUUID ] = useState( () => generateUUID() );

	return (
		<div>
			<p>Your Version 4 UUID:</p>
			<h3>{UUID}</h3>
			<button onClick={ () => setUUID( generateUUID ) }>Get another UUID</button>
		</div>
	)
}

export default UUIGenerator;