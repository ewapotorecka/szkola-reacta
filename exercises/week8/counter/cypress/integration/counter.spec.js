describe( 'Counter E2E testing', () => {
	it( 'should have + button', () => {
		cy.visit( 'http://localhost:3000' );
		const buttonIncrement = cy.get('button.increment');

		buttonIncrement.contains('+');
	} );
	it( 'should have - button', () => {
		cy.visit( 'http://localhost:3000' );
		const buttonIncrement = cy.get('button.decrement');

		buttonIncrement.contains('-');
	} );
	it( 'should have Reset button', () => {
		cy.visit( 'http://localhost:3000' );
		const buttonIncrement = cy.get('button.reset');

		buttonIncrement.contains('Reset');
	} );
	it( 'should increment counter on button + click', () => {
		cy.visit('http://localhost:3000');
		const buttonIncrement = cy.get('button.increment');

		buttonIncrement.click();
		buttonIncrement.click();

		const display = cy.get('.display');
		display.should('have.text', '2')
	} );
	it( 'should decrement counter on button - click', () => {
		cy.visit('http://localhost:3000');
		const buttonIncrement = cy.get('button.decrement');

		buttonIncrement.click();
		buttonIncrement.click();

		const display = cy.get('.display');
		display.should('have.text', '-2')
	} );
	it ( 'should display 0 with no prop start', () => {
		cy.visit('http://localhost:3000');
		const display = cy.get('.display');
		display.should('have.text', '0')

	} );
	it( 'should be possible to change displayed value', () => {
		cy.visit('http://localhost:3000');
		const input = cy.get('.input');

		input.type(5);
		const changeButton = cy.get('.submit-button');
		changeButton.click();
		const display = cy.get('.display');
		display.should('have.text', '5')
	} );
	it( 'should be possible to reset counter', () => {
		cy.visit('http://localhost:3000');
		const buttonIncrement = cy.get('button.decrement');

		buttonIncrement.click();
		buttonIncrement.click();

		let display = cy.get('.display');
		display.should('have.text', '-2');

		const resetButton = cy.get('.reset' );

		resetButton.click();
		display = cy.get('.display');
		display.should('have.text', '0')

	} );
} );