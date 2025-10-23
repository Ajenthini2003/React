import { useState } from "react";
export default function Day0602(){

   let clicked=1;
    let num1=10;
    let num2=20;
    let [count,setCount]=useState(clicked);
    let handleClick=()=>
    {
        setCount(num1+num2)
        console.log(count);}


    let handleClick2=()=>{

       
        console.log(count)
        setCount(num1-num2);
    }


    let handleClick3=()=>{
        console.log(count)
        setCount(num1*num2);}


        let handleClick4=()=>{
        console.log(count)
        setCount(num1/num2);
    }
     return(


        <>
        <button onClick={handleClick}>+</button>
     
        <button onClick={handleClick2}>-</button>
        <button onClick={handleClick3}>*</button>
        <button onClick={handleClick4}>/</button>
        <h1>the {num1} and {num2} is {count}</h1>
        
        
        </>
    )


   

}