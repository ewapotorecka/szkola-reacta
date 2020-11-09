import React from 'react';

const tipRates = [ 0.05, 0.1, 0.15, 0.2 ];

class BillCalculator extends React.Component {
	state = {
		amount: 0,
		tip: 0.05,
		bill: 0,
		billCounted: false
	}

	constructor( props ) {
		super( props );
		this.handleChange = this.handleChange.bind( this );
		this.handleClick = this.handleClick.bind( this );
	}

	handleChange( event ) {
		const keyName = event.target.name;
		const value = parseFloat( event.target.value );

		this.setState( { [ keyName ]: value } );
	}

	handleClick() {
		const VAT = this.props.VAT;
		const amount = this.state.amount;
		const tip = this.state.tip;

		this.setState( {
			bill: ( 1 + VAT ) * amount * ( 1 + tip ),
			billCounted: true
		} );
	}

	render() {
		return (
			<div>
				<div className="calculator-container">
					{ !this.state.billCounted &&
						<form onSubmit={ ( event ) => event.preventDefault() }>
							<input type="number" name="amount" onChange={ this.handleChange }></input>
							<select name="tip" onChange={ this.handleChange }>
								{ tipRates.map( rate => {
									return (
									<option value={ rate } key={ `rate_${ parseFloat( rate ) }` }>{ ` ${ JSON.stringify( rate * 100 ) }%` }</option>
									);
								} ) }
							</select>
							<button type="submit" onClick={ this.handleClick }>Count the bill</button>
						</form>
					}

				</div>
				<div className="bill-container">
					{ this.state.billCounted &&
						<div>{ this.state.bill }</div>
					}
				</div>
			</div>
		);
	}
}

export default BillCalculator;