import React from "react";
import { useState } from "react";
import img1 from "../assests/1.jpg";
import img2 from "../assests/2.jpg";
import img3 from "../assests/3.jpg";
import img4 from "../assests/4.jpg";
import img5 from "../assests/5.jpg";
import img6 from "../assests/6.jpg";
import img7 from "../assests/7.jpg";
import img8 from "../assests/8.jpg";
import img9 from "../assests/9.jpg";
import img10 from "../assests/10.jpg";
import img11 from "../assests/11.jpg";
import img12 from "../assests/12.jpg";
import img13 from "../assests/13.jpg";
import img14 from "../assests/14.jpg";
import img15 from "../assests/15.jpg";
import img16 from "../assests/16.jpg";
import img17 from "../assests/17.jpg";
import img18 from "../assests/18.jpg";

export default function Student_portal(){
    const students=[
        {id:"UOV15651",firstName:"James",lastName:"Kim",course:"IT",country:"Korea",profilePic:img1,gender:"Male",skills:"C++,Java,Javascript"},
        {id:"UOV15652",firstName:"Emily",lastName:"Jones",course:"Computer science",country:"Korea",profilePic:img2,gender:"Female",skills:"C++,Java,Javascript"},
        {id:"UOV15653",firstName:"Micheal",lastName:"Smith",course:"Engineering",country:"Korea",profilePic:img3,gender:"Male",skills:"C++,Java,Javascript"},
        {id:"UOV15654",firstName:"Sophia",lastName:"Miller",course:"Mathematics",country:"Korea",profilePic:img4,gender:"ale",skills:"C++,Java,Javascript"},
        {id:"UOV15655",firstName:"Daniel",lastName:"Brown",course:"Business",country:"Korea",profilePic:img5,gender:"Male",skills:"C++,Java,Javascript"},
        {id:"UOV15656",firstName:"Olivia",lastName:"Jhonson",course:"Design",country:"Korea",profilePic:img6,gender:"Female",skills:"C++,Java,Javascript"},
        {id:"UOV15657",firstName:"William",lastName:"Wilson",course:"Physics",country:"Korea",profilePic:img7,gender:"Male",skills:"C++,Java,Javascript"},
        {id:"UOV15658",firstName:"Ava",lastName:"Davis",course:"Medicine",country:"Korea",profilePic:img8,gender:"Female",skills:"C++,Java,Javascript"},
        {id:"UOV15659",firstName:"Liam",lastName:"Taylor",course:"Psychology",country:"Korea",profilePic:img9,gender:"Male",skills:"C++,Java,Javascript"},
        {id:"UOV15660",firstName:"Emma",lastName:"Thomas",course:"Environmental science",country:"Korea",profilePic:img10,gender:"Female",skills:"C++,Java,Javascript"},
        {id:"UOV15661",firstName:"Noah",lastName:"White",course:"Political science",country:"Korea",profilePic:img11,gender:"Male",skills:"C++,Java,Javascript"},
        {id:"UOV15662",firstName:"Isabella",lastName:"Anderon",course:"Sociology",country:"Korea",profilePic:img12,gender:"Female",skills:"C++,Java,Javascript"},
        {id:"UOV15663",firstName:"Mason",lastName:"Moore",course:"Economics",country:"Korea",profilePic:img13,gender:"Male",skills:"C++,Java,Javascript"},
        {id:"UOV15664",firstName:"Aria",lastName:"Martin",course:"History",country:"Korea",profilePic:img14,gender:"Male",skills:"C++,Java,Javascript"},
        {id:"UOV15665",firstName:"Ethan",lastName:"Clark",course:"Chemistry",country:"Korea",profilePic:img15,gender:"Female",skills:"C++,Java,Javascript"},
        {id:"UOV15666",firstName:"Grace",lastName:"Lewis",course:"Nursing",country:"Korea",profilePic:img16,gender:"Female",skills:"C++,Java,Javascript"},
        {id:"UOV15667",firstName:"Legan",lastName:"Hill",course:"Astronomy",country:"Korea",profilePic:img17,gender:"Male",skills:"C++,Java,Javascript"},
        {id:"UOV15668",firstName:"Mia",lastName:"Ward",course:"Lingustics",country:"Korea",profilePic:img18,gender:"Female",skills:"C++,Java,Javascript"},

    ];
    const [fontSize,setFontSize]=useState("medium");
    const [clickedStudent,setClickedStudent]=useState(null);

    const fontSizeMap = {
        small:"16px",
        medium:"20px",
        large:"24px",
    };

    const handleFontSizeChange= (size)=>{
        setFontSize(size);
    };

    const handleProfileView=(student)=>{
        setClickedStudent(student);
    };

    return(
        <div style={{
            fontSize:fontSizeMap[fontSize],
            display:"flex",
            marginLeft:"30px"
        }}>
            <div>
                <div style={{margin:"30px",fontSize:"25px"}}>
                    <label>Font size:</label>
                    <button style={{fontSize:"25px"}} onClick={()=>handleFontSizeChange("small")}>S</button>
                    <button style={{fontSize:"25px"}} onClick={()=>handleFontSizeChange("medium")}>M</button>
                    <button style={{fontSize:"25px"}} onClick={()=>handleFontSizeChange("large")}>L</button>
                </div>

                <table style={{borderCollapse:"collapse",border: "1px solid black"
,width:"100%"}}>

                    <thead>
                        <tr><th style={{ border: "1px solid #000", padding: "8px" }}>ID</th>
                            <th style={{ border: "1px solid #000", padding: "8px" }}>First Name</th>
                            <th style={{ border: "1px solid #000", padding: "8px" }}>Last Name</th>
                            <th style={{ border: "1px solid #000", padding: "8px" }}>Gender</th>
                            <th style={{ border: "1px solid #000", padding: "8px" }}>Course</th>
                            <th style={{ border: "1px solid #000", padding: "8px" }}>Skills</th>
                            <th style={{ border: "1px solid #000", padding: "8px" }}>Country</th>
                            <th style={{ border: "1px solid #000", padding: "8px" }}>Profile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((stu) => (
                            <tr key={stu.id}>
                                <td style={{ border: "1px solid #000", padding: "8px" }}>{stu.id}</td>
                                <td style={{ border: "1px solid #000", padding: "8px" }}>{stu.firstName}</td>
                                <td style={{ border: "1px solid #000", padding: "8px" }}>{stu.lastName}</td>
                                <td style={{ border: "1px solid #000", padding: "8px" }}>{stu.gender}</td>
                                <td style={{ border: "1px solid #000", padding: "8px" }}>{stu.course}</td>
                                <td style={{ border: "1px solid #000", padding: "8px" }}>{stu.skills}</td>
                                <td style={{ border: "1px solid #000", padding: "8px" }}>{stu.country}</td>
                                <td style={{ border: "1px solid #000", padding: "8px" }}><button onClick={()=>handleProfileView(stu)}>View</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            

            <div>
                {clickedStudent ? ( 
                    <table
  style={{
    borderCollapse: "collapse",
    border: "1px solid black",
    width: "100%",
    marginLeft: "100px",
    marginTop: "100px"
  }}
>
  <tbody>
    <tr>
      {/* LEFT COLUMN - PHOTO */}
      <td
        style={{
          border: "1px solid #000",
          padding: "10px",
          width: "40%"
        }}
      >
        <img
          src={clickedStudent.profilePic}
          alt={`${clickedStudent.firstName} ${clickedStudent.lastName}`}
          style={{ width: "300px", height: "300px" }}
        />
      </td>
      <td
        style={{
          border: "1px solid #000",
          padding: "10px",
          width: "60%"
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px", fontWeight: "bold" }}>ID</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{clickedStudent.id}</td>
            </tr>

            <tr>
              <td style={{ border: "1px solid black", padding: "8px", fontWeight: "bold" }}>Full Name</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {clickedStudent.firstName} {clickedStudent.lastName}
              </td>
            </tr>

            <tr>
              <td style={{ border: "1px solid black", padding: "8px", fontWeight: "bold" }}>Gender</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{clickedStudent.gender}</td>
            </tr>

            <tr>
              <td style={{ border: "1px solid black", padding: "8px", fontWeight: "bold" }}>Course</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{clickedStudent.course}</td>
            </tr>

            <tr>
              <td style={{ border: "1px solid black", padding: "8px", fontWeight: "bold" }}>Address</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{clickedStudent.country}</td>
            </tr>

            <tr>
              <td style={{ border: "1px solid black", padding: "8px", fontWeight: "bold" }}>Skills</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{clickedStudent.skills}</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

                ) : (
                    <p style={{margin:"300px",fontSize:"30px"}}>Please select a student to view profile</p>
                )
            }
            </div>

        </div>



    );
}