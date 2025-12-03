import { useState } from "react";

export default function Student() {
  // Split name into first/last and assign country + image
  const studentsData = [
    { id:"UOV150001", name:"M.Ajenthini", age:22, course:"IT", gender:"Female", add:"Batticaloa", country:"Sri Lanka", skills:"C++,Java,JavaScript", image:"https://via.placeholder.com/150" },
    { id:"UOV150002", name:"P.Sanojan", age:22, course:"Commerce", gender:"Male", add:"Batticaloa", country:"Sri Lanka", skills:"Business Algorithm", image:"https://via.placeholder.com/150" },
    { id:"UOV150003", name:"M.Vithya", age:23, course:"Arts", gender:"Female", add:"Jaffna", country:"Sri Lanka", skills:"Communication,Problem solving", image:"https://via.placeholder.com/150" },
    { id:"UOV150004", name:"L.Dakshina", age:24, course:"IT", gender:"Female", add:"Colombo", country:"Sri Lanka", skills:"C++,Java,JavaScript,React", image:"https://via.placeholder.com/150" },
    { id:"UOV150005", name:"M.Archana", age:22, course:"IT", gender:"Female", add:"Nuwara Eliya", country:"Sri Lanka", skills:"C++,Java,JavaScript", image:"https://via.placeholder.com/150" },
    { id:"UOV150006", name:"M.Thushan", age:22, course:"Maths", gender:"Male", add:"Batticaloa", country:"Sri Lanka", skills:"Trignometry solution founder", image:"https://via.placeholder.com/150" },
    { id:"UOV150007", name:"P.Sopna", age:21, course:"", gender:"Female", add:"Badulla", country:"Sri Lanka", skills:"First aid,dentist", image:"https://via.placeholder.com/150" },
    { id:"UOV150001", name:"M.Ajenthini", age:22, course:"IT", gender:"Female", add:"Batticaloa", country:"Sri Lanka", skills:"C++,Java,JavaScript", image:"https://via.placeholder.com/150" },
    { id:"UOV150002", name:"P.Sanojan", age:22, course:"Commerce", gender:"Male", add:"Batticaloa", country:"Sri Lanka", skills:"Business Algorithm", image:"https://via.placeholder.com/150" },
    { id:"UOV150003", name:"M.Vithya", age:23, course:"Arts", gender:"Female", add:"Jaffna", country:"Sri Lanka", skills:"Communication,Problem solving", image:"https://via.placeholder.com/150" },
    { id:"UOV150004", name:"L.Dakshina", age:24, course:"IT", gender:"Female", add:"Colombo", country:"Sri Lanka", skills:"C++,Java,JavaScript,React", image:"https://via.placeholder.com/150" },
    { id:"UOV150005", name:"M.Archana", age:22, course:"IT", gender:"Female", add:"Nuwara Eliya", country:"Sri Lanka", skills:"C++,Java,JavaScript", image:"https://via.placeholder.com/150" },
    { id:"UOV150006", name:"M.Thushan", age:22, course:"Maths", gender:"Male", add:"Batticaloa", country:"Sri Lanka", skills:"Trignometry solution founder", image:"https://via.placeholder.com/150" },
    { id:"UOV150007", name:"P.Sopna", age:21, course:"", gender:"Female", add:"Badulla", country:"Sri Lanka", skills:"First aid,dentist", image:"https://via.placeholder.com/150" }
  ];

  // Convert name → { firstName, lastName }
  const students = studentsData.map((s) => {
    const [firstName, lastName] = s.name.split(".");
    return { ...s, firstName, lastName };
  });

  const [fontSize, setFontSize] = useState("16px");
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        backgroundColor: "#a0a6bbff",
        marginLeft: "100px",
        marginRight: "100px",
        padding: "20px",
        borderRadius: "10px",
        fontSize: fontSize
      }}
    >

      {/* LEFT SIDE TABLE */}
      <div style={{ width: "60%" }}>

        <h2>Student List</h2>

        {/* Font Size Buttons */}
        <div style={{ marginBottom: "10px" }}>
          <b>Font Size: </b>
          <button onClick={() => setFontSize("16px")} style={{ marginLeft: "5px" }}>Small</button>
          <button onClick={() => setFontSize("20px")} style={{ marginLeft: "5px" }}>Medium</button>
          <button onClick={() => setFontSize("24px")} style={{ marginLeft: "5px" }}>Large</button>
        </div>

        <table 
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "white",
            border: "1px solid #008000ff"
          }}
        >
          <thead>
            <tr style={{ background: "#d7dbf5" }}>
              <th style={thStyle}>First Name</th>
              <th style={thStyle}>Last Name</th>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Country</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((item) => (
              <tr key={item.id}>
                <td style={tdStyle}>{item.firstName}</td>
                <td style={tdStyle}>{item.lastName}</td>
                <td style={tdStyle}>{item.course}</td>
                <td style={tdStyle}>{item.country}</td>

                <td style={tdStyle}>
                  <button
                    onClick={() => setSelectedStudent(item)}
                    style={{
                      padding: "5px 12px",
                      borderRadius: "5px",
                      background: "#007bff",
                      color: "white",
                      border: "none",
                      cursor: "pointer"
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* RIGHT SIDE PROFILE */}
      <div
        style={{
          width: "40%",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid gray",
        }}
      >
        <h2>Student Profile</h2>

        {!selectedStudent ? (
          <p>Select a student to view details.</p>
        ) : (
          <div>
            <img
              src={selectedStudent.image}
              alt="Profile"
              style={{ width: "150px", borderRadius: "10px", marginBottom: "20px" }}
            />

            <p><b>ID:</b> {selectedStudent.id}</p>
            <p><b>Name:</b> {selectedStudent.firstName} {selectedStudent.lastName}</p>
            <p><b>Age:</b> {selectedStudent.age}</p>
            <p><b>Gender:</b> {selectedStudent.gender}</p>
            <p><b>Course:</b> {selectedStudent.course}</p>
            <p><b>Address:</b> {selectedStudent.add}</p>
            <p><b>Country:</b> {selectedStudent.country}</p>
            <p><b>Skills:</b> {selectedStudent.skills}</p>
          </div>
        )}
      </div>

    </div>
  );
}

/* TABLE CELL STYLING */
const thStyle = {
  border: "1px solid #2a2e7dff",
  padding: "8px",
  textAlign: "left"
};

const tdStyle = {
  border: "1px solid #030927ff",
  padding: "8px"
};
