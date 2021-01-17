import UsersList from '../components/UsersList';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../../Home/redux';

function Users( props ) {
	useEffect( () => {
		if ( props.users.length <= 0 ) {
			props.fetchUsers( 10 );
		}
	}, [] );

	return <div className='users-container'>
		{ props.isError && <div>{ props.isError.message }</div> }
		{ props.isLoaded && <UsersList data={ props.users } /> }
	</div>
}

const mapStateToProps = state => ( {
	users: state.users,
	isLoaded: state.isLoaded,
	error: state.isError
} );
const mapDispatchToProps = dispatch => ( {
	fetchUsers: ( number ) => dispatch( fetchUsers( number ) )
} );

export default connect( mapStateToProps, mapDispatchToProps )( Users );