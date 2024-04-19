import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import Navbar from './components/Navbar';
import Searchproduct from './components/Searchproduct';
import Viewall from './components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/add' element={<Add/>}/>
        <Route path='/search' element={<Searchproduct/>}/>
        <Route path='/view' element={<Viewall/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
