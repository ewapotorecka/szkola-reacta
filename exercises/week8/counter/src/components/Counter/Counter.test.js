import React from 'react';
import Counter from '../Counter';

import { shallow, mount, render } from 'enzyme';


describe( 'Testing buttons rendering', () => {
	it( 'should render + button', () => {
		const wrapper = render( <Counter /> );
		const buttonIncrement = wrapper.find('button.increment');

		expect(buttonIncrement.text()).toBe('+');
	} );
	it( 'should render - button', () => {
		const wrapper = render( <Counter /> );
		const buttonDecrement = wrapper.find('button.decrement');

		expect(buttonDecrement.text()).toBe('-');
	} );
	it( 'should render reset button', () => {
		const wrapper = render( <Counter /> );
		const buttonRest = wrapper.find('button.reset');

		expect(buttonRest.text()).toBe('Reset');
	} );
} );

describe('Testing component state', () => {
	it( 'should have value 0 with no given props', () => {
		const wrapper = mount( <Counter/> );
		const displayValue = wrapper.find('Display').props().value;

		expect( displayValue ).toBe( 0 );
	} );
	it( 'should have value 10 when given props start=10', () => {
		const wrapper = mount( <Counter start={10}/> );
		const displayValue = wrapper.find('Display').props().value;

		expect( displayValue ).toBe( 10 );
	} );
} );

describe( 'Testing counter buttons', () => {
	it( 'should increment counter on button + click', () => {
		const wrapper = mount( <Counter/> );
		const buttonIncrement = wrapper.find('button.increment');

		buttonIncrement.simulate( 'click' );

		const displayValue = wrapper.find('Display').props().value;

		expect( displayValue ).toBe( 1 );
	} );
	it( 'should decrement counter on button - click', () => {
		const wrapper = mount( <Counter start={10}/> );
		const buttonDecrement = wrapper.find('button.decrement');

		buttonDecrement.simulate( 'click' );

		const displayValue = wrapper.find('Display').props().value;

		expect( displayValue ).toBe( 9 );
	} );
	it( 'should reset counter to 0 or props start on button Reset click', () => {
		const wrapper = mount( <Counter start={10}/> );
		const buttonReset = wrapper.find('button.reset');
		const buttonDecrement = wrapper.find('button.decrement');

		buttonDecrement.simulate( 'click' );
		buttonReset.simulate( 'click' );

		const displayValue = wrapper.find('Display').props().value;

		expect( displayValue ).toBe( 10 );
	} );
} );

describe( 'Testing input', () => {
	it( 'should set counter to given value on button click', () => {
		const wrapper = mount( <Counter/> );
		const input = wrapper.find( 'input' );
		const submitButton = wrapper.find( 'button.submit-button' );
	
  		input.simulate( 'change', { target: { value: 5 } } );
		expect(wrapper.find( 'input' ).prop('value')).toBe( 5 );

		submitButton.simulate( 'submit' );
		expect(wrapper.find('Display').props().value).toBe( 5 );
	} );
} );

