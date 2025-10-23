import { useEffect,useState } from "react";
export default function Day0702(){

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
     return(

        <>
        <button onClick={handleClick}>Increase</button>
     
       
        
        </>



         )


   

}