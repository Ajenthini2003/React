import { useState } from "react";
export default function Day07{

    let clicked=1;
    let {setCount,count}=useState(clicked);
    let handleClick=()=>{
        console.log(count)
        setCount(count+10);
    }




    return(
<button onClick={handleClick}>click</button>


    )

}