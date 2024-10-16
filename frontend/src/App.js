import logo from './logo.svg';
import search_icon from './assets/search.svg';
import plus_icon from './assets/plus.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Open from './components/Open';
import Search from './components/Search';
import Results from './components/Results';
import Sign from './components/Sign';
import Add from './components/Add';
import Login from './components/Login';
import Register from './components/Register';

export default function App() {
  return (
	<Routes>
		<Route path="/" element={<Open />}/>
		<Route path='/login' element={<Login />}/>
	  <Route path='/results' element={<Results />}/>
	  <Route path='/add' element={<Add />}/>
	  <Route path='/sign/:sign' element={<Sign />}/>
		<Route path='/search' element={<Search />}/>
		<Route path='/register' element={<Register />}/>
	</Routes>
  );
}
