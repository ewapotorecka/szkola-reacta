import React from 'react';
import './list.css';

class List extends React.Component {
	constructor( props ) {
		super( props );
		this.type = props.type;
		this.state = {
			data: props.data
		}

	}

	render() {
		return (
			<div className='list-container'>
				<h2 className='title'>{ this.type }</h2>
				<div className='titles-container'>
					<div className='list-name'><h3>Name</h3></div>
					<div className='list-category'><h3>Category</h3></div>
					<div className='list-amount'><h3>Amount</h3></div>
				</div>
				<div className='content-container'>
					{ this.state.data.map( ( element ) => {
						return (
							<div className='content' key={ element.id }>
								<div className='list-name'>{ element.name }</div>
								<div className='list-category'>{ element.category }</div>
								<div className='list-amount'>{ element.amount }</div>
								<button onClick={ () => this.handleClick( element.id, this.type ) }>Remove</button>
							</div>
						);
					} ) }
				</div>
			</div>
		);
	}

	handleClick( id, type ) {
		this.props.onRemove( id, type, 'remove' );
	}
}

export default List;