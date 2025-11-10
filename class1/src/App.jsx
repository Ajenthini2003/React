// //import { LearnComponents } from "./components/LearnComponents"
// //import { Student } from "./components/Student"
// //import { Header } from "./components/Header"
// //import { Hooks01 } from "./components/Hooks01"
// // import { ToDolist } from "./components/ToDolist"
// // import Calculate from './components/day6/Calculate';
// // import Hooks from './components/day6/Hooks';
// // import ButtonLike from './components/day7/ButtonClick';
// // import Like from './components/day7/Like'
// // import Form1 from './components/day9/Form1';
// // import Task from './components/day8(forms)/Task';
// //import Form2 from './components/Classwork/Form2'
// //import Exercise01 from "./components/Classwork/Exercise01";
// //import FirstPractice from "./components/FirstPractice"
// // import FormBrief from "./components/FormBrief"
// import Password from "./components/Password"

// function App() {
  

//   return (
//    <div>
//     {/* <div>Sanojan Archana</div>
//     <LearnComponents></LearnComponents> */}
//     {/* <Header></Header> */}
//     {/* <Student name="archana" age={22} isMarried={true}></Student>
//      <Student name="sanojan" age={22} isMarried={true}></Student>
//    <Student name="vihya" ></Student> */}
//    {/* <Hooks01></Hooks01> */}
//    {/* <ToDolist></ToDolist> */}
//     {/* <Form2></Form2>  */}

//    {/* <Exercise01></Exercise01> */}
//    {/* <FirstPractice></FirstPractice> */}
//    {/* <FormBrief></FormBrief> */}
//    {/* <Password></Password> */}
//    </div>
   
//   )
// }

// export default App
// src/App.jsx
import './School.css'
import Home from './components/School_project/Home'
import Student from './components/School_project/Student'
import Teachers from './components/School_project/Teachers'
import Non_staff from './components/School_project/Non_staff'
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
          <Link to="/" style={{marginLeft:"40px"}}>Home</Link>
          <Link to="/student" style={{marginLeft:"40px"}}>Student</Link>
          <Link to="/teacher" style={{marginLeft:"40px"}}>Teacher</Link>
          <Link to="/nonstaff" style={{marginLeft:"40px"}}>Service Staff</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/teacher" element={<Teachers />} />
          <Route path="/nonstaff" element={<Non_staff />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App; 
