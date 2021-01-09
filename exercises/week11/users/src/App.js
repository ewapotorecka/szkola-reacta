import './App.css';
import Home from './Home';
import Users from './Users/containers/Users';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path='/users'>
						<Users />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>

	);
}

export default App;
