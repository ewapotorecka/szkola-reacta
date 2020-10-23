import React, {useState} from 'react';

function Timer() {
	const [ time, setTime ] = useState( 0 );
	
	window.setTimeout( () => ( setTime(time+1)), 1000);

	return(
		<div>
			{time}
		</div>
	);
}

export default Timer;