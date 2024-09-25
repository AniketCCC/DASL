import logo from './logo.svg';
import search_icon from './assets/search.svg';
import plus_icon from './assets/plus.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Search from './components/Search';
import Results from './components/Results';
import Sign from './components/Sign';
import Login from './components/Login';

export default function App() {
  return (
	<Routes>
		<Route path='/' element={<Login />}/>
	  	<Route path='/results' element={<Results />}/>
	  	<Route path='/add' element={<Sign />}/>
		<Route path='/search' element={<Search />}/>
	</Routes>
  );
}
