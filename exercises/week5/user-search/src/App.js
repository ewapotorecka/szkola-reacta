import UsersContainer from './components/UsersContainer';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

function App() {
  return (
	  <Router>
		<div className="App">
			<UsersContainer/>
		</div>
	  </Router>

  );
}

export default App;
