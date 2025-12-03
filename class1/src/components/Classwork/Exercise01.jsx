
import { useState,useEffect } from "react"

export default function Exercise01(){
    let[count,setCount]=useState(0);
    let handleClick=()=>{
        setCount(count+1)
    }



        let fun1=()=>{
            if(count>=5){
                alert ('more than 5')
            }
        } 
        useEffect(fun1,[count])

    
    return(

        <>
        
        <button onClick={handleClick}>LOVE</button>
        <p>{count}</p>
        </>




    )
}