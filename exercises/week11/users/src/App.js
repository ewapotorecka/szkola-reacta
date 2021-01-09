import './App.css';
import Home from './Home';
import Users from './Users/containers/Users';
import reducer from './Home/redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

const store = createStore( reducer, applyMiddleware( thunk ) );

function App() {
	return (
		<Router>
			<div className="App">
				<Provider store={ store }>
					<Switch>
						<Route path='/users'>
							<Users />
						</Route>
						<Route path='/'>
							<Home />
						</Route>
					</Switch>
				</Provider>
			</div>
		</Router>

	);
}

export default App;
