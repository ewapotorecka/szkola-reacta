import React, { useEffect } from 'react';
import UsersList from '../components/UsersList';
import { fetchUsers } from '../../Home/redux';
import { connect } from 'react-redux';

function Users( props ) {
	useEffect( () => {
		props.fetchUsers();
	}, [] );

	return <div className='users-container'>
		{ props.isError && <div>{ props.isError.message }</div> }
		{ props.isLoaded && <UsersList data={ props.users.results } /> }
	</div>
}

const mapStateToProps = state => ( {
	users: state.users,
	isLoaded: state.isLoaded,
	error: state.isError
} );

const mapDispatchToProps = dispatch => ( {
	fetchUsers: () => dispatch( fetchUsers( 10 ) )
} );

export default connect( mapStateToProps, mapDispatchToProps )( Users );