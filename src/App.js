import './App.css';
import Register from './pages/register/register';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Verify from './pages/verify/verify';
import Token from './pages/token-show/token';
import Login from './pages/login/login';
import Explore from './pages/explore/explore';
import Loading from './assets/img/loading/Spinner-3.gif'
import { useEffect, useState } from 'react';
import Index from './components/index';


function App() {
  const [isloading,setIsloading]=useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false)
    }, 500);
  },[]);
  return (
    <div className="App">
              {
             isloading?<img src={Loading} alt='loading'/>:
             <Router>
                  <Routes>
                  <Route path='/' element={<Index/>}/>
                  <Route path='/verify' element={<Verify/>}/>
                  <Route path='/token' element={<Token/>}/>
                  <Route path='/register' element={<Register/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/explore' element={<Explore/>}/>
                  </Routes>
              </Router>
               }

    </div>
  );
}

export default App;
