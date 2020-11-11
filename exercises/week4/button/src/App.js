import './App.css';
import React, { useState, useEffect } from 'react';
import ButtonColorOnRender from './ButtonColorOnRender';
import ButtonColorOnMouse from './ButtonColorOnMouse';
import ButtonWithForwardRef from './ButtonWithForwardRef';

function App() {
	const button = React.createRef();
	const [ mouseOver, setMouseOver ] = useState();

	useEffect( () => {
		if ( mouseOver ) {
					button.current.style.backgroundColor = 'red';
					button.current.style.color = 'white';
				} else {
					button.current.style.backgroundColor = 'blue';
					button.current.style.color = 'black';
				}
	} );

  return (
    <div className="App">
		<ButtonColorOnRender/>
		<ButtonColorOnMouse/>
		<ButtonWithForwardRef
			ref={ button }
			onMouseOver={ () => setMouseOver( true ) }
			onMouseLeave={ () => setMouseOver( false  )}>
				Click me!
		</ButtonWithForwardRef>
    </div>
  );
}

export default App;
