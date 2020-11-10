import React from 'react';
import Display from '../Display';
import Form from '../Form';
import List from '../List';


class Budget extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			expanses: this.props.expanses,
			incomes: this.props.incomes,
			budget: this.calculateBudget( this.props.incomes, this.props.expanses )
		}

		this.updateState = this.updateState.bind( this );
	}

	render() {
		return (
			<div>
				<div className='expanses-income-container'>
					<List data={ this.state.expanses } type='expanses' onRemove={ this.updateState }/>
					<List data={ this.state.incomes } type='incomes' onRemove={ this.updateState }/>
					<Display value={ this.state.budget }/>
				</div>
				<div className='form-container'>
					<Form onFormSubmit={ this.updateState }/>
				</div>
			</div>
		);
	}

	calculateBudget( incomes, expanses ) {
		let budget = 0;

		for ( const income of incomes ) {
			budget = budget + income.amount;
		}
		for ( const expanse of expanses ) {
			budget = budget - expanse.amount;
		}

		return budget;
	}

	updateState( id, type, change, dataObj ) {
		const data = this.state[ type ];
		const element = dataObj;

		if ( change === 'remove' ) {
			for ( let i = 0; i < data.length; i++ ) {

				if ( data[i].id === id ) {
					data.splice( i, 1 );
				}
			}
		} else if ( change === 'add' ) {
			element.id = id;
			element.amount = parseFloat( element.amount );
			data.push( element );
		}


		this.setState( { type: data }, () => {
			this.setState( { budget: this.calculateBudget( this.state.incomes, this.state.expanses ) } );

		} );
	}
}

export default Budget;