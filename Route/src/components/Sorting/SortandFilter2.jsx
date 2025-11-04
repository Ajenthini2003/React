import { useState } from "react";


export default function SortandFilter2(){

const [sorted,setSorted]=useState(
    [
        {id:1,name:"Arun",marks:85,dep:"Computer"},
        {id:2,name:"Meena",marks:92,dep:"Electronics"},
        {id:3,name:"Suresh",marks:78,dep:"Mechanical"},
        {id:4,name:"Divya",marks:88,dep:"Civil"},
        {id:5,name:"Kishore",marks:95,dep:"Computer"},
        {id:6,name:"Priya",marks:81,dep:"Electronics"},
        {id:7,name:"Nirmal",marks:89,dep:"Civil"},
        
    ]
)
const marksSortingAs = () => {
    const sorting = [...sorted].sort((a,b)=>a.marks-b.marks);
    setSorted(sorting);
}

const marksSortingDs = () => {
    const sorting = [...sorted].sort((a,b)=>b.marks-a.marks);
    setSorted(sorting);
}
const depstringAse=()=>{
    const sorting = [...sorted].sort((a,b)=>
    a.dep.localeCompare(b.dep)
);
setSorted(sorting);

}

const depstringDse=()=>{
    const sorting = [...sorted].sort((a,b)=>
    b.dep.localeCompare(a.dep)
);
setSorted(sorting);
}

return(
    <>
    {
        sorted.map((item)=>(
         <div>
            <span style={{margin:"15px"}}>ID:{item.id}</span>
            <span style={{margin:"15px"}}>Name:{item.name}</span>
            <span style={{margin:"15px"}}>Marks:{item.marks}</span>
            <span style={{margin:"15px"}}>Department:{item.dep}</span>
            <hr/>
         </div>
        ))}
    
    <button onClick={marksSortingAs}>AS</button>
    <button onClick={marksSortingDs}>DS</button>
    <button onClick={depstringAse}>depAS</button>
    <button onClick={depstringDse}>depDS</button>
    
    
    
    
    </>
   
)


}