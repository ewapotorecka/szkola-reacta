import React from 'react';
import './display.css'

class Display extends React.Component {
	render() {
		const value = this.props.value;

		return (
			<div className='display' style={ value > 0 ? { backgroundColor: '#78e08f' } : { backgroundColor: '#b71540' } }>
				<h3>Budget</h3>
				{ value }
			</div>
		);
	}

}

export default Display;