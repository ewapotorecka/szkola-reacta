import React from 'react';
import { useForm } from 'react-hook-form';

const categories = [ 'groceries', 'car charges', 'shopping', 'home charges', 'bills', 'eating out', 'donation', 'salary' ];

function Form( { onFormSubmit } ) {
	const { register, handleSubmit, errors, reset } = useForm({ shouldFocusError: false });
	const onSubmit = ( data ) => {
		const id = createId();
		console.log( id );
		onFormSubmit( id, data.type, 'add', data );
		reset();
	}
	const createId = () => {
		return Math.floor( Math.random() * 1000000 );
	}

	return (
		<div>
			 <form onSubmit={ handleSubmit( onSubmit ) }>
				 <div>
					<label>Transaction type</label>
					<div>
						<input
							type='radio'
							name='type'
							value='incomes'
							ref={ register( { required: 'Choose the type' } ) }/>
						<label>Income</label>
					</div>
					<div>
						<input
							type='radio'
							name='type'
							value='expenses'
							ref={ register( { required: 'Choose the type'} ) }/>
						<label>Expense</label>
					</div>
					{ errors.type && <p>{ errors.type.message }</p> }
				 </div>
				<div>
					<label>Transaction name</label>
					<input
						type='text'
						name='name'
						ref={ register( { required: 'Name is required'} ) }/>
					{ errors.name && <p>{ errors.name.message }</p> }
				</div>
				<div>
					<label>Amount</label>
					<input
						type='number'
						name='amount'
						ref={ register( { required: 'Amount is required'} ) }/>
					{ errors.amount && <p>{ errors.amount.message }</p> }
				</div>
				<div>
					<label>Category</label>
					<select
						name='category'
						ref={ register() }>
							{ categories.map( ( element ) => {
								return (
									<option	key={ `category_${ element }` } value={ element }>
										{ element }
									</option>
								)
							} ) }
					</select>
				</div>
				<div>
					<input type='submit'/>
				</div>
			 </form>
		</div>
	);
}

export default Form;