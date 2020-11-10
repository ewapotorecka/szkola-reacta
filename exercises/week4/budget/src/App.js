import './App.css';
import Budget from './components/Budget';


const expanses = [
	{
		id: 1,
		name: 'groceries Carrefour',
		amount: 200,
		category: 'groceries'
	},
	{
		id: 2,
		name: 'fuel',
		amount: 100,
		category: 'car'
	}
];

const incomes = [
	{
		id: 3,
		name: 'gift from mum',
		amount: 300,
		category: 'donation'
	},
	{
		id: 4,
		name: 'salary',
		amount: 1000,
		category: 'salary'
	}
];

function App() {
  return (
    <div className="App">
		<Budget expanses={ expanses } incomes={ incomes }/>
    </div>
  );
}

export default App;
