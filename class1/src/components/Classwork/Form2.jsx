import { useState } from "react"
export default function Form(){
const[FirstName,setFirstname]=useState('');
const[LastName,setLastname]=useState('');
const[Email,setEmail]=useState('');
const[Gender,setGender]=useState('');
const[Address,setAddress]=useState('');
const[Comment,setComment]=useState('');
const[submitted,setSubmmited]=useState('');

let handelClick=(event)=>{
    event.preventDefault();
    const data={
      firstName:FirstName,
      lastNAme:LastName,
      email:Email,
      gender:Gender,
      address:Address,
      comment:Comment,
    }
    setSubmmited(data);
}
    return(
        <>
        <form style={{marginLeft:"300px",marginTop:"200px",border:"green 2px solid",width:"400px",height:"500px",backgroundColor:"#dcfbe5ff"}}>
            <div style={{margin:"50px"}}>
                <label>FirstName:</label>
            <input  style={{width:"300px"}} type="text" value={FirstName} onChange={(event)=>setFirstname(event.target.value)}/><br /><br />
            <label>LastName:</label>
            <input style={{width:"300px"}} type="text" value={LastName} onChange={(event)=>setLastname(event.target.value)}/><br /><br />
            <label>Email:</label>
            <input style={{width:"300px"}} type="text" value={Email} onChange={(event)=>setEmail(event.target.value)}/><br /><br />
            <label>Male:</label>
            <input  type="radio" name="Gender" value={"Male"} onChange={(event)=>setGender(event.target.value)}/><br /><br />
            <label>Female:</label>
            <input type="radio" name="Gender" value={"Female"} onChange={(event)=>setGender(event.target.value)} /><br /><br />
            <label>Address:</label>
            <input style={{width:"300px"}} type="text" value={Address} onChange={(event)=>setAddress(event.target.value)}/><br /><br />
            <label>Comment:</label>
             <textarea style={{width:"300px"}} value={Comment} onChange={(event)=>setComment(event.target.value)}></textarea><br /><br />
             <button type="submit" onClick={event=>handelClick(event)}>Submit</button>
            </div>
        </form>

        {
            submitted &&(
                <>
                <table style={{border:"2px solid black"}}>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Comment</th>
                    </tr>
                    <tr>
                        <td>{submitted.firstName}</td>
                        <td>{submitted.lastNAme}</td>
                        <td>{submitted.email}</td>
                        <td>{submitted.gender}</td>
                        <td>{submitted.address}</td>
                        <td>{submitted.comment}</td>
                    </tr>
 
                </table>
                </>
            )
        }
        </>
    )
}