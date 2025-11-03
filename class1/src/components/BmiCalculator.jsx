import React from "react";
import { useState } from "react";

export default function BmiCalculator(){

    const BmiCalculator=()=>{
        const [weight,setWeight]= useState ('') ;
        const [height,setHeight]= useState ('') ;
        const [bmi,setBmi] =useState ('');
        const [status,setStatus]= useState ('');

    const CalculateBMI=()=>{
        if(!weight || !height ){
           alert('please enter height and weight');
            return;
        }
    const heightInMeters=parseFloat(height/100);
    const bmiValue=(parseFloat(weight/heightInMeters*heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    let bmiStatus='';
    if(bmiValue<18.5){
        bmiStatus='underWeight'
    }
    else if(bmiValue<24.9){
        bmiStatus='normal weight'
    }
    else if(bmiValue<29.9){
        bmiStatus='over weight'
    }
    else{
        bmiStatus='obesity'
    }
    setStatus(bmiStatus);
    }

}
    return(
        <div className="container">
            <h2>BMI Calculator</h2>
            <div>
                <label>Weight</label>
                <input type="number" value={weight} onChange={(event)=>setWeight(event.target.value)} placeholder="Enter your weight here"></input>
            </div>
            <div>
                <label>Height</label>
                <input type="number" value={Height} onChange={(event)=>setWeight(event.target.value)} placeholder="Enter your weight here"></input>
            </div>
            <button onClick={CalculateBMI}>Calculate</button>

    
     {bmi && (
        <div className="result">
            <h3>Your BMI:{bmiValue}</h3>
            <h3>Status:{bmiStatus}</h3>
    )
    }
        </div>
    )
} 