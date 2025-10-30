import img1 from '/home/uki-dsa-05/Desktop/React/day01/src/assets/heart.jpeg'
import img2 from '/home/uki-dsa-05/Desktop/React/day01/src/assets/car.jpeg'
import img3 from '/home/uki-dsa-05/Desktop/React/day01/src/assets/doll.jpeg'
 import img4 from '/home/uki-dsa-05/Desktop/React/day01/src/assets/jpeg'

import { useEffect,useState } from "react";
export default function Day0703(){
     let [count,setCount]=useState(0);

    let handleClick=()=>
    {
        
        setCount(count+1);

    }
    let fun1=()=>{
        if(count>=5)
        
{
    alert('count more than 5')
}

    }
    useEffect(fun1,[count]);


    let handleClick2=()=>
    {
        
        setCount(count+1);

    }
    let fun2=()=>{
        if(count>=4)
        
{
    alert('count more than 4')
}

    }
    useEffect(fun2,[count]);


    let handleClick3=()=>
    {
        
        setCount(count+1);

    }
    let fun3=()=>{
        if(count>=3)
        
{
    alert('count more than 3')
}

    }
    useEffect(fun3,[count]);


    let handleClick4=()=>
    {
        
        setCount(count+1);

    }
    let fun4=()=>{
        if(count>=2)
        
{
    alert('count more than 2')
}

    }
    useEffect(fun4,[count]);
     return(

        <>
        <img src={img1}></img>
        <button onClick={handleClick}>heart</button>
         <img src={img2}></img>
        <button onClick={handleClick2}>car</button>
        <img src={img3}></img>
        <button onClick={handleClick3}>doll</button>
         <img src={img4}></img>
        <button onClick={handleClick4}>house</button> 
       
       
        
        </>



         )


   

}