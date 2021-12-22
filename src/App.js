
import './App.css';
import Profile from './Profile';
import About  from './About';
import Home from './Home';
import Error from './Error';
import {BrowserRouter as Router, Route,Routes,  Link } from 'react-router-dom';


function App() {
  return (
   <Router>
     <nav className='nav'>
       <Link to="/">Home</Link>
       <Link to="/about">About</Link>
       <Link to="/profile">Profile</Link>
       </nav>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/profile" element={<Profile/>}/>
       <Route path="*" element={<Error/>}/>
     </Routes>
   </Router>
  

  );
}

export default App;
