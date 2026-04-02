
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter as Router, Routes ,Route, Link} from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addnovel from './components/Addnovel';
import Getnovel from './components/Getnovel';
import Mpesapayment from './components/Mpesapayment';

function App() {
  return (
    <Router>
    <div className="App">
     <div className='App-header'>
      <h1 id='head1'>Welcome to FictionRead</h1>
     </div>
    
    <nav className='m-2 navbar navbar-expand-md navbar-light bg-light' >
    <Link to="/"  href='#'className=' ms-2 nav-bar brand nav-link'>Get Novel</Link>
    <button class="navbar-toggler" data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarcollapse">
      <div class="navbar-nav ms-auto">
    <Link to="/signup" className='text-dark ms-2 nav-link'>Signup</Link> 
    <Link to="/signin" className='text-dark ms-2 nav-link'>Signin</Link>
    <Link to="/addnovel" className='text-dark ms-2 nav-link'>Add Novel</Link>
    </div>
    </div>
    </nav>
    
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/addnovel' element={<Addnovel/>}/>
      <Route path='/' element={<Getnovel/>}/>
      <Route path='/makepayment' element={<Mpesapayment/>}/>
    </Routes>
    </div>
    </Router>

    
  );
}

export default App;
