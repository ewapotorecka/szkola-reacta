import React, { useState } from 'react';

const tipRates = [ 0.05, 0.1, 0.15, 0.2 ];

function useInput( initialState ) {
	const [ value, setValue ] = useState( initialState );

	const handleChange = ( event ) => {
		setValue( parseFloat( event.target.value ) );
	}

	return [ value, handleChange ];
}

function BillCalculator( props ) {
	const { VAT } = props;
	const [ amount, setAmount ] = useInput( 0 );
	const [ tip, setTip ] = useInput( 1.05 );
	const [ bill, setBill ] = useState( 0 );
	const [ billCounted, setBillCounted ] = useState( false );

	const handleSubmit = ( event ) => {
		event.preventDefault();
	}

	const handleClick = () => {
		setBill( ( 1 + VAT ) * amount * ( 1 + tip ) );
		setBillCounted( true );

	}

	return(
		<div>
			<div className="calculator-container">
				{ !billCounted &&
					<form onSubmit = { handleSubmit }>
						<input type="number" onChange={ setAmount }/>
						<select onChange={ setTip }>
							{ tipRates.map( rate => {
									return (
									<option value={ rate } key={ `rate_${ rate }` }>{ ` ${ JSON.stringify( rate * 100 ) }%` }</option>
									);
								} ) }
						</select>
						<button type="submit" onClick={ handleClick }>Count the bill</button>
					</form>
				}
			</div>
			<div className="result-container">
				{ billCounted && <div>{ bill }</div> }
			</div>
		</div>

	);
}

export default BillCalculator;