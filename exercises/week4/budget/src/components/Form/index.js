import React from 'react';
import { useForm } from 'react-hook-form';
import './form.css';

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
			 <form onSubmit={ handleSubmit( onSubmit ) } className='form'>
				 <h4>Add transaction</h4>
				 <div className='form-element-container'>
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
				<div className='form-element-container'>
					<label>Transaction name</label>
					<input
						type='text'
						name='name'
						ref={ register( { required: 'Name is required'} ) }/>
					{ errors.name && <p>{ errors.name.message }</p> }
				</div>
				<div className='form-element-container'>
					<label>Amount</label>
					<input
						type='number'
						name='amount'
						ref={ register( { required: 'Amount is required'} ) }/>
					{ errors.amount && <p>{ errors.amount.message }</p> }
				</div>
				<div className='form-element-container'>
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
				<div className='form-element-container'>
					<input type='submit'/>
				</div>
			 </form>
		</div>
	);
}

export default Form;