// // // import Home from './components/Home'
// // // import Profile from './components/Profile'
// // // import AboutUs from './components/AboutUs'
// // import React from 'react';
// // // import 'bootstrap/dist/css/bootstrap.min.css';
// // // //import Exercise01 from './components/Exercise01';
// //  import logo from './logo.svg';
// // // import './App.css';
// // // import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
// // // import Home1 from './components/Activity/Home1'
// // // import About1 from './components/Activity/About1'
// // //import SortandFilter from './components/Sorting/SortandFilter';
// // // import SortandFilter2 from './components/Sorting/SortandFilter2';
// // // import Filter from './components/Sorting/Filter'
// // //import Filter2 from './components/Sorting/Filter2'
// // //import Booking from './components/Activity/Booking'
// // // import GlobalSearch from './components/Activity/GlobalSearch';
// // //
// // function App() {
// //   return (
// //   //  <BrowserRouter>
// //   //  <nav>
// //   //   <Link to='/home'>Home</Link>
// //   //   <Link to='/about'>AboutUs</Link>
// //   //   <Link to='/profile'>Profile</Link>
// //   //  </nav>

// //   //  <Routes>
// //   //   <Route path='/' element={<Home></Home>}></Route>
// //   //  <Route path='/about' element={<AboutUs></AboutUs>}></Route>
// //   //  <Route path='/profile' element={<Profile></Profile>}></Route>
// //   //  </Routes>
// //   <div>
// //     {/* <Exercise01></Exercise01> */}
// //   {/* <BrowserRouter>
// //    <nav>
// //     <Link to='/home'>Home1</Link>
// //     <Link to='/about'>About1</Link>
    
// //    </nav>

// //    <Routes>
// //     <Route path='/' element={<Home1></Home1>}></Route>
// //    <Route path='/about' element={<About1></About1>}></Route>
   
// //    </Routes>

// // </BrowserRouter> */}
// // {/* <SortandFilter></SortandFilter> */}
// // {/* <SortandFilter2></SortandFilter2> */}
// // {/* <Filter></Filter> */}
// // {/* <Filter2></Filter2> */}
// // {/* <Booking></Booking> */}
// // {/* <GlobalSearch></GlobalSearch> */}
// // <Student></Student>

    
// //   </div>





// //   //  </BrowserRouter>



    
// //   );
// // }

// // export default App;



// import React from 'react';
// <<<<<<< HEAD
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Student from './components/projectScl/Student';

// function App() {
//   return (
//     <BrowserRouter>
//       <nav style={{ padding: "10px",backgroundColor:"#a26769",height:"70px" }}>
//         <Link to="/student" style={{ marginRight: "1000px",textDecoration:"non",color:"white"
//         }}>
//           Student
//         </Link>
//       </nav>
//       <Routes>
        
//         <Route path="/student" element={<Student></Student>} />
//       </Routes>
//     </BrowserRouter>
// =======
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // //import Exercise01 from './components/Exercise01';
//  import logo from './logo.svg';
// // import './App.css';
// // import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
// // import Home1 from './components/Activity/Home1'
// // import About1 from './components/Activity/About1'
// import SortandFilter from './components/Sorting/SortandFilter';
// // import SortandFilter2 from './components/Sorting/SortandFilter2';
// // import Filter from './components/Sorting/Filter'
// //import Filter2 from './components/Sorting/Filter2'

// function App() {
//   return (
//   //  <BrowserRouter>
//   //  <nav>
//   //   <Link to='/home'>Home</Link>
//   //   <Link to='/about'>AboutUs</Link>
//   //   <Link to='/profile'>Profile</Link>
//   //  </nav>

//   //  <Routes>
//   //   <Route path='/' element={<Home></Home>}></Route>
//   //  <Route path='/about' element={<AboutUs></AboutUs>}></Route>
//   //  <Route path='/profile' element={<Profile></Profile>}></Route>
//   //  </Routes>
//   <div>
//     {/* <Exercise01></Exercise01> */}
//   {/* <BrowserRouter>
//    <nav>
//     <Link to='/home'>Home1</Link>
//     <Link to='/about'>About1</Link>
    
//    </nav>

//    <Routes>
//     <Route path='/' element={<Home1></Home1>}></Route>
//    <Route path='/about' element={<About1></About1>}></Route>
   
//    </Routes>

// </BrowserRouter> */}
// <SortandFilter></SortandFilter> 
// {/* <SortandFilter2></SortandFilter2> */}
// {/* <Filter></Filter> */}
// {/* <Filter2></Filter2> */}

    
//   </div>





//   //  </BrowserRouter>



    
// >>>>>>> 44ad52370d6fabf8059dbe057b02b4678a10f8dc
//   );
// }

// export default App;


import './App.css'
import Home from './components/projectScl/Home'
import Student from './components/projectScl/Student'
import Teacher from './components/projectScl/Teacher'
import Nonstaff from './components/projectScl/Nonstaff'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import img1 from './assets/read-svgrepo-com.svg';



function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <img src={img1} style={{width:"100px",height:"80px",marginTop:"-15px",marginLeft:"80px"}}></img>
          <p style={{color:"#f5f3f4",fontSize:"30px",marginTop:"15px"}}>St.Joseph’sCollege</p>
          <div className='main'>
          <Link to="/" style={{marginLeft:"-40px"}}>Home</Link>
          <Link to="/student" style={{marginLeft:"40px"}}>Student</Link>
          <Link to="/teacher" style={{marginLeft:"40px"}}>Teacher</Link>
          <Link to="/nonstaff" style={{marginLeft:"40px"}}>Service Staff</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/nonstaff" element={<Nonstaff />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App; 
