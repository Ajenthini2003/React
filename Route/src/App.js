// import Home from './components/Home'
// import Profile from './components/Profile'
// import AboutUs from './components/AboutUs'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Exercise01 from './components/Exercise01';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home1 from './components/Activity/Home1'
import About1 from './components/Activity/About1'

function App() {
  return (
  //  <BrowserRouter>
  //  <nav>
  //   <Link to='/home'>Home</Link>
  //   <Link to='/about'>AboutUs</Link>
  //   <Link to='/profile'>Profile</Link>
  //  </nav>

  //  <Routes>
  //   <Route path='/' element={<Home></Home>}></Route>
  //  <Route path='/about' element={<AboutUs></AboutUs>}></Route>
  //  <Route path='/profile' element={<Profile></Profile>}></Route>
  //  </Routes>
  <div>
    {/* <Exercise01></Exercise01> */}
  {/* <BrowserRouter>
   <nav>
    <Link to='/home'>Home1</Link>
    <Link to='/about'>About1</Link>
    
   </nav>

   <Routes>
    <Route path='/' element={<Home1></Home1>}></Route>
   <Route path='/about' element={<About1></About1>}></Route>
   
   </Routes>

</BrowserRouter> */}


    
  </div>





  //  </BrowserRouter>



    
  );
}

export default App;
