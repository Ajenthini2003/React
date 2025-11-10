import { useState } from "react";
import '../SortandFilter.css'

export default function SortandFilter(){

const [sorted,setSorted]=useState(
    [
        {id:1,name:"Varshini",age:26},
        {id:2,name:"Ajenthini",age:22},
        {id:3,name:"Dilani",age:23},
        {id:4,name:"Monika",age:25,},
        
    ]
)

const idSortingAs = () => {
    const sorting = [...sorted].sort((a,b)=>a.id-b.id);
    setSorted(sorting);
}

const idSortingDs = () => {
    const sorting = [...sorted].sort((a,b)=>b.id-a.id);
    setSorted(sorting);
}
const idSortingAsAge = () => {
    const sorting = [...sorted].sort((a,b)=>a.age-b.age);
    setSorted(sorting);
}
const idSortingDsAge = () => {
    const sorting = [...sorted].sort((a,b)=>b.age-a.age);
    setSorted(sorting);
}

const stringAse=()=>{
    const sorting = [...sorted].sort((a,b)=>
    a.name.localeCompare(b.name)
);
setSorted(sorting);

}

const stringDse=()=>{
    const sorting = [...sorted].sort((a,b)=>
    b.name.localeCompare(a.name)
);
setSorted(sorting);
}
                                                   
return(
    <>
    {
        sorted.map((item)=>(
         <div className="App">
            <span>ID:{item.id}</span>
            <span>Name:{item.name}</span>
            <span>Age:{item.age}</span>
            <hr/>
         </div>
        ))}
    
    <button onClick={idSortingAs}>AS</button>
    <button onClick={idSortingDs}>DS</button>
    <button onClick={idSortingAsAge}>asAge</button>
    <button onClick={idSortingDsAge}>dsAge</button>
    <button onClick={stringAse}>stringAS</button>
    <button onClick={stringDse}>stringDS</button>
    
    
    
    
    </>
   
)


}