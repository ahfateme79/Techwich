import './App.css';
import Register from './pages/register/register';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Verify from './pages/verify/verify';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
            <Route path='/' element={<Register/>}/>
            <Route path='/verify' element={<Verify/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
