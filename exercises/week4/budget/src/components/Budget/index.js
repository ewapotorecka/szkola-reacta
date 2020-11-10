import React from 'react';
import Display from '../Display';
import Form from '../Form';
import List from '../List';


class Budget extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			expenses: this.props.expenses,
			incomes: this.props.incomes,
			budget: this.calculateBudget( this.props.incomes, this.props.expenses )
		}

		this.updateState = this.updateState.bind( this );
	}

	render() {
		return (
			<div>
				<div className='expenses-income-container'>
					<List data={ this.state.expenses } type='expenses' onRemove={ this.updateState }/>
					<List data={ this.state.incomes } type='incomes' onRemove={ this.updateState }/>
					<Display value={ this.state.budget }/>
				</div>
				<div className='form-container'>
					<Form onFormSubmit={ this.updateState }/>
				</div>
			</div>
		);
	}

	calculateBudget( incomes, expenses ) {
		let budget = 0;

		for ( const income of incomes ) {
			budget = budget + income.amount;
		}
		for ( const expense of expenses ) {
			budget = budget - expense.amount;
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
			this.setState( { budget: this.calculateBudget( this.state.incomes, this.state.expenses ) } );
			localStorage.setItem( type, JSON.stringify( data ) );
			console.log( localStorage );

		} );
	}
}

export default Budget;