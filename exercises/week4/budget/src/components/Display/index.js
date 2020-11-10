import React from 'react';

class Display extends React.Component {
	render() {
		const value = this.props.value;

		return (
			<div style={ value > 0 ? { backgroundColor: 'green' } : { backgroundColor: 'red' } }>
				{ value }
			</div>
		);
	}

}

export default Display;