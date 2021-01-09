const FETCH_USERS_REQUESTED = 'users/FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'users/FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'users/FETCH_USERS_FAILED';
const RESET_USERS = 'users/RESET_USERS';

const INITIAL_STATE = {
	users: [],
	isLoaded: false,
	isError: false
};

const fetchRequested = () => ( { type: FETCH_USERS_REQUESTED } );
const fetchFailed = () => ( { type: FETCH_USERS_FAILED } );
const fetchSucceeded = data => ( { type: FETCH_USERS_SUCCEEDED, payload: data } );

export const fetchUsers = ( number ) => {
	return function( dispatch ) {
		dispatch( fetchRequested() );
		fetch( `https://randomuser.me/api/?results=${ number }` )
			.then( response => response.json() )
			.then( data => {
				dispatch( fetchSucceeded( data ) )
			} )
			.catch( error => {
				dispatch( fetchFailed() )
			} )
	}
}

export default function reducer( state = INITIAL_STATE, action ) {
	switch ( action.type ) {
		case FETCH_USERS_REQUESTED:
			return {
				...state,
				isLoaded: false,
				isError: false
			};
		case FETCH_USERS_SUCCEEDED:
			return {
				...state,
				users: action.payload,
				isLoaded: true,
				isError: false
			};
		case FETCH_USERS_FAILED:
			return {
				...state,
				isLoaded: true,
				isError: true
			};
		case RESET_USERS:
			return {
				...state,
				users: [],
				isLoaded: true,
				isError: false
			}
		default:
			return state;
	}
}