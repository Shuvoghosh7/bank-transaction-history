import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import ALLTransition from './component/ALLTransition/ALLTransition';
import Deposit from './component/Deposit/Deposit';
import WithdrawMoney from './component/WithdrawMoney/WithdrawMoney';
import Navber from './component/Navbar/Navber';


function App() {
  return (
    <div>
      <Navber>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/transition' element={<ALLTransition />} />
          <Route path='/deposit' element={<Deposit />} />
          <Route path='/withdraw' element={<WithdrawMoney />} />

        </Routes>

      </Navber>
    </div>
  );
}

export default App;
