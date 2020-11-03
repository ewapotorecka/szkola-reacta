import './App.css';
import Employees from './employees/Employees'

const data = [
	{ name: 'Jan', info: 'more about Jan' },
	{ name: 'Anna', info: 'more about Anna' },
	{ name: 'Piotr', info: 'more about Piotr' },
	{ name: 'Katarzyna', info: 'more about Katarzyna' },
	{ name: 'Patryk', info: 'more about Patryk' },
];

function App() {
	return (
    	<div className="App">
			<Employees data={ data }/>
    	</div>
 	 );
}

export default App;
