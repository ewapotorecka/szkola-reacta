import React from 'react';
import Button from './components/Button';
import { fetchUsers, resetUsers, addUser } from '../Home/redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Home( props ) {
	return (
		<>
			<Link to="/users/">Users</Link>
			<div className='home-container'>
				<Button action={ () => props.fetchUsers( 10 ) }>Load</Button>
				<Button action={ () => props.resetUsers() }>Reset</Button>
				<Button action={ () => props.addUser() }>Add</Button>
			</div>
		</>
	);
}

const mapStateToProps = state => ( {
	users: state.users,
	isLoaded: state.isLoaded,
	isError: state.isError
} );

const mapDispatchToProps = dispatch => ( {
	fetchUsers: ( number ) => dispatch( fetchUsers( number ) ),
	resetUsers: () => dispatch( resetUsers() ),
	addUser: () => dispatch( addUser() )
} );

export default connect( mapStateToProps, mapDispatchToProps )( Home );