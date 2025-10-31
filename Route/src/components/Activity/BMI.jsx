import { useEffect,useState } from "react"
export default function BMI(){
    let[Weight,setWeight]=useState('')
    let[Height,setHeight]=useState('')

      let handelClick=(event)=>{
        event.preventDefault();
        const data={
          weight:Weight,
          height:Height,
          submitted:Submitted,
        }
        setSubmmited(data);}



    return(

        <form>
            <label>Weight(kg):</label>
            <input type="number" value={Weight}  onChange={(event)=>setWeight(event.target.value)}></input>
            <label>Height(cm):</label>
            <input type="number" value={Weight}  onChange={(event)=>setHeight(event.target.value)}></input>
            <button type="submit" onClick={event=>handelClick(event)}></button>
        </form>






    )

}


