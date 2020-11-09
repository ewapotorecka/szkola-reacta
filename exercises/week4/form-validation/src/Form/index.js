import React, { useRef, useState } from 'react';
import './form.css';

function Form() {
	const nameInput = useRef();
	const emailInput = useRef();
	const bioTextarea = useRef();
	const form = useRef();
	const genderContainer = useRef();
	const acceptInput = useRef();

	const [ state, setState ] = useState( {
		nameValid: false,
		emailValid: false,
		bioValid: false,
		genderValid: false,
		rulesAccepted: false,
		formValid: false
	} );

	const handleClick = () => {
		validateForm();
		if ( state.formValid ) {
			clearForm();
		}
	}

	const validateForm = () => {
		const formElements = [ nameInput, emailInput, bioTextarea, form, acceptInput ];

		formElements.forEach( element => {
			validateElement( element );
		} );

		if ( state.nameValid && state.emailValid && state.bioValid && state.genderValid && state.rulesAccepted ) {
			setState( { ...state , formValid: true } );
		}
	}

	const validateElement = element => {
		if ( element.current.getAttribute('validation') === 'text' ) {
			if ( !element.current.value ) {
				element.current.style.border = '1px solid red';
				element.current.nextSibling.style.visibility = 'visible';
			}
		} else if ( element.current.getAttribute('validation') === 'checkbox' ) {
			if ( !element.current.checked ) {
				element.current.style.outline = '1px solid red';
				element.current.nextSibling.style.visibility = 'visible';
			}
		} else {
			let checkCount = 0;
			for ( const gender of element.current.gender ) {
				if ( gender.checked ) {
					checkCount ++;
				}
			}
			if ( checkCount === 0 ) {
				genderContainer.current.style.border = '1px solid red';
				genderContainer.current.nextSibling.style.visibility = 'visible';
			}
		}
	}
	const clearForm = () => {
		nameInput.current.value = '';
		emailInput.current.value = '';
		bioTextarea.current.value = '';
		acceptInput.current.checked = false;
		form.current.gender.forEach( element => { element.checked = false } );
	}

	return (
		<div className="form-container">
			<form onSubmit={ event => event.preventDefault() } ref={ form } type="form">
				<div className="form-element">
					<label>Name</label>
					<input
						type="text"
						name="name"
						ref={ nameInput }
						validation="text"
						onChange={ () => setState( { ...state, nameValid: true } ) }/>
					<label className="validation-info">You have to fill this field</label>
				</div>
				<div className="form-element">
					<label>E-mail</label>
					<input
						type="email"
						name="e-mail"
						ref={ emailInput }
						validation="text"
						onChange={ () => setState( { ...state, emailValid: true } ) }/>
					<label className="validation-info">You have to fill this field</label>
				</div>
				<div className="form-element">
					<label>Bio</label>
					<textarea
						name="bio"
						ref={ bioTextarea }
						validation="text"
						onChange={ () => setState( { ...state, bioValid: true } ) }/>
					<label className="validation-info">You have to fill this field</label>
				</div>
				<div className="form-element">
					<div ref={ genderContainer }>
						<label>Gender</label>
						<div>
							<input
								type="radio"
								id="female"
								name="gender"
								onChange={ () => setState( { ...state, genderValid: true } ) }/>
							<label>Female</label>
						</div>
						<div>
							<input
								type="radio"
								id="male"
								name="gender"
								onChange={ () => setState( { ...state, genderValid: true } ) }/>
							<label>Male</label>
						</div>
						<div>
							<input
								type="radio"
								id="other"
								name="gender"
								onChange={ () => setState( { ...state, genderValid: true } ) }/>
							<label>Other</label>
						</div>
					</div>
					<label className="validation-info">You have to fill this field</label>
				</div>
				<div className="form-element">
					<label>Accept the rules</label>
					<input
						type="checkbox"
						name="accept"
						ref={ acceptInput }
						validation="checkbox"
						onChange={ () => {
							if ( acceptInput.current.checked ) {
								setState( { ...state, rulesAccepted: true } );
							} else {
								setState( { ...state, rulesAccepted: false } );
							}
						} }/>
					<label className="validation-info">You have to accept the rules</label>
				</div>
				<div className="form-element">
					<button type="submit" onClick={ handleClick }>Submit</button>
				</div>
				{ state.formValid &&
					<div className="form-accepted">
						<p>Form successfully send!</p>
					</div>
				}
			</form>
		</div>
	);
}

export default Form;