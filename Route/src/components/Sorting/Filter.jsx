import { useState } from "react";

export default function Filter(){

    const data=[
     {id:1,name:"Apple"},
     {id:2,name:"Watermelon"},
     {id:3,name:"Orange"},
     {id:4,name:"Mango"},
    ]

const[searchTerm,setSearchTerm]= useState("");
const filteredData=data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()));



return(

    <>
    {
        filteredData.map((item)=>(
         <div>
            
            <span>Name:{item.name}</span>
            <hr/>
         </div>
        ))}
    <input type="text" placeholder="search by name" value={searchTerm} onChange={(event)=>setSearchTerm(event.target.value)}></input>
    
    </>

)

}