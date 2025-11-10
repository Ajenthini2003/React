import React, { useState } from "react";
import validator from 'validator';
import './Password.css'


export default function Password(){

    const[errorMessage,setErrorMessage]=useState('');

    const validate=(value)=>{
        if(validator.isStrongPassword(value,{
            minLength:8,minLowerCase:1,
            minUppercase:1,minNumbers:1,minSymbols:1
        }))
        {setErrorMessage ('Is strong Password')}
      else{setErrorMessage('Is Not strong Password')}
    };


    return(
        <div className="Main">
            <prev>
                <h2>Checking Passsword Strength in React</h2>
                <span>Enter Password:</span><input type="text" onChange={(event)=>validate(event.target.value)}></input><br></br>
                {errorMessage===' '? null:
                <span>{errorMessage}</span>}
            </prev>
        </div>
    )
}

























