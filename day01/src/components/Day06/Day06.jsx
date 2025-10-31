import { useState } from "react";
export default function Day06(){

    let clicked=0;
    let [count,setCount]=useState(clicked);
    let handleClick=()=>
    {
        console.log(count)
        setCount(count+10);
    }

return(

    <>
    <button onClick={handleClick}>click</button>
    <h1 style={{ height:`${count}px`, margin:'100px'}}>Button Clicked {count}</h1>
        <h2 style={{fontSize:`${count}px`}}>chjk</h2>
        </>
)


}