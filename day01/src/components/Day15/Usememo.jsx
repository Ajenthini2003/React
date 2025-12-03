import React,{useState,useMemo } from 'react';
export default function Usememo ({items}){
    const [filterTerm,setFilterTerm]=useState('');

    const visibleItems=useMemo(()=>{
        console.log('Running expensive filtering calculation');
        return items.filter(item=>item.name.includes(filterTerm));
    },[items,filterTerm]);

  return(
    <div>
        <input type='text' placeholder='Filter items' value={filterTerm} onChange={(event)=>setFilterTerm(event.target.value)}></input>
        <ul>
            {visibleItems.map(item=>(
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>




  )


}