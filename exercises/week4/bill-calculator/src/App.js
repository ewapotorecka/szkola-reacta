import './App.css';
import BillCalculator from './components/formFunc';

const VATRate = 0.25;

function App() {
  return (
    <div className="App">
		<BillCalculator VAT={ VATRate }/>
    </div>
  );
}

export default App;
