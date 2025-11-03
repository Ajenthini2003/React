import React from "react";
import { useState } from "react";
export default function FirstPractice     (){

const [message,setMessage]=useState ("Hello world!")
let handleClick=()=>{
    setMessage ("welcome to react")
}

return(
<div>
    <h1>{message}</h1>
    <button onClick={handleClick}>Click Me</button>

</div>
)
}