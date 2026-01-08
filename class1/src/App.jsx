// //import { LearnComponents } from "./components/LearnComponents"
// //import { Student } from "./components/Student"
// //import { Header } from "./components/Header"

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
import FormBrief from "./components/FormBrief"
// import Password from "./components/Password"
 function App() {
  
  return (
   <div>
//     {/* <div>Sanojan Archana</div>
//     <LearnComponents></LearnComponents> */}
//     {/* <Header></Header> */}
//     {/* <Student name="archana" age={22} isMarried={true}></Student>
//      <Student name="sanojan" age={22} isMarried={true}></Student>
//    <Student name="vihya" ></Student> */}

//    {/* <ToDolist></ToDolist> */}
//     {/* <Form2></Form2>  */}

//    {/* <Exercise01></Exercise01> */}
//    {/* <FirstPractice></FirstPractice> */}
 <FormBrief></FormBrief>
//    {/* <Password></Password> */}
//    </div>
   
   )
 }
 export default App
// src/App.jsx
//App.js

// import React from "react";
// import StudentPortal from "./components/StudentPortal";

// function App() {
//   return (
//     <div className="App">
//       <h1 style={{ textAlign: "center" }}>Students Information Portal</h1>
//       <StudentPortal />
//     </div>
//   );
// }

// export default App;

// FileName: App.js

// import styled from "styled-components";
// import Tracker from "./components/Tracker";
// import GlobalStyles from "./components/globalStyles";

// const Main = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const App = () => {
//   return (
//     <Main>
//       <GlobalStyles />
//       <Tracker />
//     </Main>
//   )
// }

// export default App;


// App.jsx

// import React, { useState } from 'react';
// import './App.css';

// const Calculator = () => {
//   const [input, setInput] = useState('');
//   const [result, setResult] = useState('');

//   const handleClick = (value) => {
//     if (value === '=') {
//       try {
//         const evalResult = eval(input);
//         setResult(evalResult);
//         setInput('');
//       } catch (error) {
//         setResult('Math Error');
//         setInput('');
//       }
//     } else if (value === 'Clear') {
//       setInput('');
//       setResult('');
//     } else {
//       setInput((prev) => prev + value);
//     }
//   };

//   return (
//     <div className="calculator">
//       <h2>React Calculator</h2>
//       <div className="screen">
//         <input type="text" readOnly value={input} placeholder="0" />
//         <input type="text" readOnly value={result} placeholder="Result" />
//       </div>
//       <div className="button-row">
//         {['7', '8', '9', '/'].map((item) => (
//           <button key={item} onClick={() => handleClick(item)}>
//             {item}
//           </button>
//         ))}
//         {['4', '5', '6', '*'].map((item) => (
//           <button key={item} onClick={() => handleClick(item)}>
//             {item}
//           </button>
//         ))}
//         {['1', '2', '3', '-'].map((item) => (
//           <button key={item} onClick={() => handleClick(item)}>                                     
//             {item}
//           </button>
//         ))}
//         <button onClick={() => handleClick('0')}>0</button>
//         <button onClick={() => handleClick('+')}>+</button>
//         <button className="equals" onClick={() => handleClick('=')}>=</button>
//         <button className="clear" onClick={() => handleClick('Clear')}>Clear</button>
//       </div>
//     </div>
//   );
// };

// export default Calculator;