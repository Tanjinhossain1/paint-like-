import './App.css';
import Navbar from './component/Navbar';
import Paint from './component/paint';
import { Route,Routes } from 'react-router-dom';
import Home from './component/Home';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/paint' element={<Paint />}></Route>
        <Route path='/login' element={<SignIn />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
