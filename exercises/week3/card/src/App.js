import './App.css';
import Card from './components/card';
import image from './images/tofu.png';

const cardContent = {
	title: 'Scrambled Tofu',
	date: '23-03-2020',
	intro: 'Scrambled tofu is a great option for a vegan dinner filled with proteins and flavour.',
	image: image,
	extendedContent: `Chop the tofu and use a fork to crumble it into bite-sized pieces.
	Heat some oil in a pan and add the tofu, salt, pepper and turmeric powder.
	Stir and cook over medium-high heat for 5 to 10 minutes.
	Serve immediately over some toasts and topped it with fresh parsley.`
};


function App() {
  return (
 	  <Card { ...cardContent } showMore={ false } />
  );
}

export default App;
