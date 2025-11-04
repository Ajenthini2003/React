
import React, { useState } from "react";
import '../App.css'

export default function FormBrief(){
const[firstName,setFirstName]=useState("");
const[lastName,setLastName]=useState("");
const[enterEmail,setEnterEmail]=useState("");
const[contact,setContact]=useState("");
const [gender, setGender] = useState("male");
const[subjects,setSubjects]=useState({
    english:true,
    maths:false,
    physics:false,
});
const[resume,setResume]=useState("");
const [url, setUrl] = useState("");
const[selectedOption,setSelectedOption]=useState("");
const[about,setAbout]=useState("")

const handleSubmit=(event)=>{
   event.preventDefault();
   console.log(
    firstName,
    lastName,
    enterEmail,
    contact,
    gender,
    subjects,
    resume,
    url,
    selectedOption,
    about,

   )
}


const handleSubjectChange =(sub)=>{
    setSubjects((prev)=>({
        ...prev,
        [sub]:!prev[sub],
    }));
};


const handleReset=()=>{
    setFirstName("");
    setLastName("");
    setEnterEmail("");
    setContact("");
    setGender("male");
    setSubjects({
        english:true,
        maths:false,
        physics:false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");

}

return(
    <div className="App">
        <h1 style={{color:"green"}}>Form in React</h1>
        <form>
            <div>
                 <label>First name*</label>       
                 {/* event is undefined outside the arrow function */}
                 <input type="text" value={firstName} onChange={(event)=>setFirstName(event.target.value)} placeholder="Enter first name"></input>
            </div>
            <div>
                <label>Last name*</label>       
                <input type="text" value={lastName} onChange={(event)=>setLastName(event.target.value)} placeholder="Enter Last name"></input>
            </div>
            <div>
                <label>Enter Email</label>
                <input type="email" value={enterEmail} onChange={(event)=>setEnterEmail(event.target.value)} placeholder="Enter email"></input>
            </div>
            <div>
                <label>Contact</label>
                <input type="tel" value={contact} onChange={(event)=>setContact(event.target.value)} placeholder="Enter contact number"></input>
            </div>
            <div>
                <label>Gender</label>
                <input type="radio" value="male" checked={gender=== "male"}  onChange={(event)=>setGender(event.target.value)}></input>
                <input type="radio" value="female" checked={gender=== "female"}  onChange={(event)=>setGender(event.target.value)}></input>
                <input type="radio" value="other" checked={gender=== "other"}  onChange={(event)=>setGender(event.target.value)}></input>
            </div>
            <div>
                <label>Your best Subjects</label>
                <input type="checkbox" checked={subjects.english === true} onChange={(event)=>handleSubjectChange("maths")}></input>
                <input type="checkbox" checked={subjects.maths === true} onChange={(event)=>handleSubjectChange("physics")}></input>
                <input type="checkbox" checked={subjects.physics === true} onChange={(event)=>handleSubjectChange("english")}></input>
            </div>
            <div>
                <label>Upload Resume</label>
                <input type="file" onChange={(event)=>setResume(event.target.files[0])} placeholder="Enter upload file"></input>
            </div>
            <div>
                <label>Enter URL</label>
                <input type="url" onChange={(event)=>setUrl(event.target.value)} placeholder="Enter url"></input>
            </div>
            <div>
                <label>Select your choice</label>
                <select value={selectedOption} onChange={(event)=>setSelectedOption(event.target.value)}>
                    <option value="" disabled selected={selectedOption===""}>Select your answer</option>
                     <optgroup label="Beginers">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">
                                JavaScript
                            </option>
                        </optgroup>
                        <optgroup label="Advance">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">
                                Express
                            </option>
                            <option value="t">
                                MongoDB
                            </option>
                        </optgroup>
                </select>
            </div>
            <div>
                <label>About</label>
                <textarea cols="30" rows="10" onChange={(event)=>setAbout(event.target.value)} placeholder="About your self"></textarea>
            </div>
            <button type="reset" value="reset" onClick={()=>handleReset()}>Reset</button>
            <button type="submit" value="submit" onClick={(event)=>handleSubmit(event)}>Submit</button>
           
        </form>
    </div>

)

}













































