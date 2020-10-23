import React from 'react';

class Timer extends React.Component {
	constructor() {
		super();
		this.state  = {
			time: 0
		}
	}

	componentDidMount() {
		this.countTime();
	}

	componentWillUnmount() {
		window.clearInterval( this.intervalID );
	}

	render() {
		return(
			<div>
				{this.state.time}
			</div>
		)
	}

	countTime() {
		this.intervalID = window.setInterval( () => this.setState( { time: this.state.time + 1 } ), 1000 );
	}
}

export default Timer;