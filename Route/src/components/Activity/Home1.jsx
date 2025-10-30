import { useEffect,useState } from "react"
export default function Home1(){

    const[UserName,setUsername]=useState('');
    const[Email,setEmail]=useState('');
    const[Comment,setComment]=useState('');
    const[submitted,setSubmmited]=useState('');
    
    let handelClick=(event)=>{
        event.preventDefault();
        const data={
          userName:UserName,
          email:Email,
          comment:Comment,
        }
        setSubmmited(data);}

        let fun1=()=>{
                if(submitted)
                { 
                alert(
  "Username: " + UserName +
  "\nEmail: " + Email +
  "\nComment: " + Comment
)

        
                }
        
            }
            useEffect(fun1,[submitted])
            


    return(
        <>
         <form >
            <label>Username</label>
            <input  type="text" value={UserName} onChange={(event)=>setUsername(event.target.value)}/><br /><br />
            <label placeholder="e.g.,sample@gmail.com">Email:</label>
            <input type="text" value={Email} onChange={(event)=>setEmail(event.target.value)}/><br /><br />
            <label>comment</label>
             <textarea value={Comment} onChange={(event)=>setComment(event.target.value)}></textarea><br /><br />
             <button type="submit" onClick={event=>handelClick(event)}>Submit</button>
        </form>


         {
            submitted &&(
                <>
                 <tr>
   <td>{submitted.userName}</td>
    <td>{submitted.email}</td>
   <td>{submitted.comment}</td>
                    </tr>
                
                </>)}
        
        </>
)
}