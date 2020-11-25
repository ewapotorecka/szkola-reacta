import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import './App.css';

function App() {
  return (
	  <div  className='app'>
		<Router>
			<NavMenu/>
			<Route path="/about">
				<About />
			</Route>
			<Route path="/contact">
				<Contact />
			</Route>
			<Route path="/home">
				<Home />
			</Route>
		</Router>
	  </div>


  );
}

export default App;
