import logo from './logo.svg';
import './App.css';

import Home from './component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Navbar/Header';
import ALLTransition from './component/ALLTransition/ALLTransition';
import Deposit from './component/Deposit/Deposit';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/transition' element={<ALLTransition/>}/>
        <Route path='/deposit' element={<Deposit/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
