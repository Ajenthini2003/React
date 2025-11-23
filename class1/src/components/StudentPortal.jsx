import React, { useState } from "react";

// ஒரு உதாரணமான students data — உங்கள் data-வை இதை போலவே உருவாக்கலாம்
const students = [
  { id: 1, firstName: "James", lastName: "Kim", course: "IT", country: "Korea", age: 21, gender: "Male", address: "Seoul Korea", skills: ["C++", "Java", "JavaScript"], profilePic: "https://via.placeholder.com/150" },
  { id: 2, firstName: "Emily", lastName: "Jones", course: "Computer Science", country: "USA", age: 22, gender: "Female", address: "New York, USA", skills: ["Python", "ML"], profilePic: "https://via.placeholder.com/150" },
  { id: 3, firstName: "Michael", lastName: "Smith", course: "Engineering", country: "UK", age: 23, gender: "Male", address: "London, UK", skills: ["CAD", "C"], profilePic: "https://via.placeholder.com/150" },
  // ... கூடுதல் மாணவர்கள்
];

export default function StudentPortal() {
  // Font size state: small / medium / large
  const [fontSize, setFontSize] = useState("medium");
  // Currently viewed student profile
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Font size mapping
  const fontSizeMap = {
    small: "16px",
    medium: "20px",
    large: "24px",
  };

  const handleFontSizeChange = (size) => {
    setFontSize(size);
  };

  const handleViewProfile = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
        fontSize: fontSizeMap[fontSize],
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* இடது பகுதி: பட்டியல் மற்றும் font size controls */}
      <div style={{ flex: 1, marginRight: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Font Size: </label>
          <button onClick={() => handleFontSizeChange("small")}>Small</button>
          <button onClick={() => handleFontSizeChange("medium")}>Medium</button>
          <button onClick={() => handleFontSizeChange("large")}>Large</button>
        </div>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid #ccc",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                First Name
              </th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                Last Name
              </th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                Course
              </th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                Country
              </th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                Profile
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((stu) => (
              <tr key={stu.id}>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {stu.firstName}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {stu.lastName}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {stu.course}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {stu.country}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  <button onClick={() => handleViewProfile(stu)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* வலது பகுதி: Profile View */}
      <div style={{ flex: 1, padding: "20px", border: "1px solid #ccc" }}>
        {selectedStudent ? (
          <table>
            <tr>
              <td>
                <img
              src={selectedStudent.profilePic}
              alt="Profile"
              style={{ width: "150px", borderRadius: "50%" }}
            />
              </td>
              <td>
                <h2>
              {selectedStudent.firstName} {selectedStudent.lastName}
            </h2>
            <p><strong>Course:</strong> {selectedStudent.course}</p>
            <p><strong>Country:</strong> {selectedStudent.country}</p>
            <p><strong>Age:</strong> {selectedStudent.age}</p>
            <p><strong>Gender:</strong> {selectedStudent.gender}</p>
            <p><strong>Address:</strong> {selectedStudent.address}</p>
            <p>
              <strong>Skills:</strong>{" "}
              {selectedStudent.skills.join(", ")}
            </p>

              </td>
            </tr>
          </table>
            
            
         
        ) : (
          <p>Please select a student to view profile</p>
        )}
      </div>
    </div>
  );
}
