import { useState } from "react"
export default function BMI1(){
    let[weight,setWeight]=useState('');
    let[height,setHeight]=useState('');
    let[bmi,setBmi]=useState('');
    let[submitted,setSubmmited]=useState('')
       
      
    

    let handelClick=(event)=>{
        event.preventDefault();

      let num2=(height/100)**2; 
    let bmi=(weight/num2).toFixed(2)  
         
    setBmi(bmi);
    const data={
        weight:weight,
        height:height,
        bmi:bmi,
    }
    setSubmmited(data);
        
    }


    let fun1=()=>{
      if(0>=bmi>=18.5){
        alert ('overweight')
      }
      else if(19>=bmi>=24.5)
        alert ('normal')
      else if(19>=bmi>=24.5)
        alert('normal')

    }
        
    

    return(
          <>
        <form>
            <label>Weight(kg):</label>
            <input type="number" value={weight}  onChange={(event)=>setWeight(event.target.value)}></input><br></br><br></br>
            <label>Height(cm):</label>
            <input type="number" value={height}  onChange={(event)=>setHeight(event.target.value)}></input><br></br><br></br>
            <button type="submit" onClick={handelClick}>calculate</button>
        </form>

<br />
 {
            submitted &&(
                <>
                <div>
                <span>You Weight : {submitted.weight}</span><br />
                <span> Your Height : {submitted.height}</span><br />
                <span> Your BMI : {submitted.bmi}</span><br />
                </div>
                 
              
                </>)
            }

        
        </>
)
}

    
