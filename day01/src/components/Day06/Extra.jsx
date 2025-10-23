import img1 from '/home/uki-dsa-05/Desktop/React/day01/src/assets/heart.jpeg'
import { useState } from "react";
export default function Day0602(){

    let clicked=1;
    let [count,setCount]=useState(clicked);
    let handleClick=()=>
    {
        console.log(count)
        setCount(count+10);
    }
     let handleClick2=()=>
    {
        console.log(count)
        setCount(count-10);
    }


     return(

        <>
        <button onClick={handleClick}>Increase</button>
        <button onClick={handleClick2}>Decrease</button>
        <img src="img1" style={{height:`${count}px`}}></img>
        
        </>



         )


   

}