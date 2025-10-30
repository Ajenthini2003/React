import { useState,useEffect } from "react";

export default function Extra (){
    let [count,setCount]=useState(0);
    let handleClick=()=>{
        setCount(count+1)
    }

    let fun1=()=>{
        if(count>=4)
        { 
            alert ('count more than 4')

        }

    }
    useEffect(fun1,[count])


return(
    <>
    <img src={img1}></img>
    <button onClick={handleClick}>heart</button>
    </>





)
}