import React from 'react';
import { useForm } from 'react-hook-form';

function Form () {
	const { register, handleSubmit, errors, formState, reset } = useForm({ shouldFocusError: false });
	const state = formState;

	const onSubmit = () => {
		reset();
	}

	return (
		<div>
			<form onSubmit={ handleSubmit( onSubmit ) }>
				<div>
					<label>Name</label>
					<input
						type='text'
						name='name'
						ref={ register( { required: 'Name is required' } ) }
						style={ errors.name && { border: '1px solid red' } }/>
					{ errors.name && <p>{ errors.name.message }</p> }
				</div>
				<div>
					<label>E-mail</label>
					<input
						type='email'
						name='email'
						ref={ register( { required: 'Email is required' } ) }
						style={ errors.email && { border: '1px solid red' } }/>
					{ errors.email && <p>{ errors.email.message }</p> }
				</div>
				<div>
					<label>Bio</label>
					<textarea
						name='bio'
						ref={ register( { required: 'Bio is required' } ) }
						style={ errors.bio && { border: '1px solid red' } }/>
					{ errors.bio && <p>{ errors.bio.message }</p> }
				</div>
				<div>
					<label>Gender</label>
					<div>
						<input
							type='radio'
							name='gender'
							id='female'
							ref={ register( { required: 'Gender is required' } ) }
							style={ errors.gender && { outline: '1px solid red' } }/>
						<label>Female</label>
					</div>
					<div>
					<input
							type='radio'
							name='gender'
							id='male'
							ref={ register( { required: 'Gender is required' } ) }
							style={ errors.gender && { outline: '1px solid red' } }/>
						<label>Male</label>
					</div>
					<div>
					<input
							type='radio'
							name='gender'
							id='other'
							ref={ register( { required: 'Gender choice is required' } ) }
							style={ errors.gender && { outline: '1px solid red' } }/>
						<label>Other</label>
					</div>
					{ errors.gender && <p>{ errors.gender.message }</p> }
				</div>
				<div>
					<label>Accept the rules</label>
					<input
						type='checkbox'
						name='rules'
						ref={ register( { required: 'You have to accept the rules' } ) }
						style={ errors.rules && { outline: '1px solid red' } }/>
						{ errors.rules && <p>{ errors.rules.message }</p> }
				</div>
				<input type='submit'/>
			</form>
			{ state.isSubmitSuccessful && <p>Form successfully sent!</p> }
		</div>
	);
}

export default Form;