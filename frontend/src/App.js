import logo from './logo.svg';
import search_icon from './assets/search.svg';
import plus_icon from './assets/plus.svg';
import './App.css';

function App() {
  return (
	<html>
    	<h1 class="text-center text-7xl py-20 font-bold">Dictionary of American Sign Language</h1>
	<div class="fixed top-0 right-0 p-20">
	<button class="w-24 h-24 rounded-lg flex justify-center items-center border border-black-200 shadow-lg hover:bg-slate-200">
	<img src={plus_icon} alt="Add Sign"/>
	</button>
	</div>

	<div class="absolute inset-x-0 bottom-0 h-28">
	<div class="flex justify-center">
	<button class="w-48 px-4 py-2 text-sm text-black-600 font-unbold rounded-l-xl border border-black-200 hover:bg-orange-500 text-2xl shadow-lg">Parameter Search</button>
	<button class="w-48 px-4 py-2 text-sm text-black-600 font-unbold rounded-r-xl border border-black-200 hover:bg-red-500 text-2xl shadow-lg">Tag Search</button>
	</div>
	</div>
	<div class="fixed bottom-0 right-10 p-8">
	<button class="w-24 h-24 rounded-lg flex justify-center items-center border border-black-200 shadow-lg hover:bg-slate-200">
	<img src={search_icon} alt="Search"/>
	</button>
	</div>
	</html>
  );
}

export default App;
