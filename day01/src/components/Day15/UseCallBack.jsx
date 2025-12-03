import React,{useState,useCallback } from 'react';

const Button =React.memo(({onClick,children})=>{
    console.log('Button component rendered');
    return <button onClick={onClick}>{children}</button>
});

const UseCallBack=()=>{
    const [count,setCount]=useState(0);
    const[text,setText]=useState('');


    const increment=useCallback(()=>{
        setCount(c=>c+1);
    },[]);

    const handleChange=(event)=>{
        setText(event.target.value);
    }

    return(
        <div>
            <input type='text' value={text} onChange={handleChange} placeholder='typing....'></input>
            <p>Count:{count}</p>
            <button onClick={increment}>Increment count</button>
        </div>
    )
}


export default UseCallBack