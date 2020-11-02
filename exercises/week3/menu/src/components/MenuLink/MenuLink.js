import React from 'react';

export class MenuLink extends React.Component {
	constructor( props ) {
		super( props );
		if ( this.props.isActive ) {
			this.styles = {
				color: "#2d3436",
				backgroundColor: " #00cec9"
			}
		}
	}

	render() {
		return(
			<a href={ this.props.to } className="menu-link" style={ this.styles }>
				{ this.props.children }
			</a>
		);
	}
}
