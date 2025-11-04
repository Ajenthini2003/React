import { useState } from "react";

export default function Filter2(){
    const detail=[
        {id:1,dis:"Batticaloa",age:33,job:"Engineer"},
        {id:2,dis:"Colombo",age:23,job:"Doctor"},
        {id:3,dis:"Kandy",age:32,job:"Teacher"},
        {id:4,dis:"Mannar",age:43,job:"Lecture"},
        {id:5,dis:"Jaffna",age:28,job:"Professor"},
    ]



const[searchDetail,setSearchDetail]=useState("");
const filteredDetail=detail.filter((item)=>
item.dis.toUpperCase().includes(searchDetail.toUpperCase()));


return(
   <>
   {
    filteredDetail.map((item)=>(
        <div>
            <span>District:{item.dis}</span>
            <span>Age:{item.age}</span>
            <hr/>
        </div>
    )
    )
   }
   <input type="text"  value={searchDetail} onChange={(event)=>setSearchDetail(event.target.value)}></input>

   </>
)

}

