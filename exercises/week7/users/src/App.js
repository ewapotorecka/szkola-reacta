import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UsersList from './components/UsersList';

import UserDetails from './components/UserDetails';
import { useState } from 'react';

function App() {
	const [ selectedUserData, setSelectedUserData ] = useState();
	const handleClick = ( user ) => setSelectedUserData(user);
  return (
    <div className="App">
		<Router>
			<Switch>
  				<Route path='/users/:id' render={ props => <UserDetails {...props} data={selectedUserData} />}/>
				<Route path='/' exact render={ props => <UsersList {...props} handleClick={ handleClick }/> }/>
			</Switch>
		</Router>
    </div>
  );
}

export default App;
