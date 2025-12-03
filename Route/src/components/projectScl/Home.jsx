import React, { useState } from "react";
import img2 from "../../assets/stu.png";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    nic: "",
    birth: "",
    dis: "",
    dad: "",
    contact: "",
  });

  const handleAddClick = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New person added:", formData);
    setFormData({
      id: "",
      name: "",
      nic: "",
      birth: "",
      dis: "",
      dad: "",
      contact: "",
    });
    setShowForm(false);
  };

  return (
    <div style={{ position: "relative", paddingBottom: "100px" }}>
      {/* Heading Section */}
      <div>
        <p
          style={{
            fontSize: "60px",
            marginLeft: "300px",
            color: "#161a1d",
            marginTop: "300px",
          }}
        >
          "A school is not just a building;"
        </p>
        <p
          style={{
            fontSize: "60px",
            marginLeft: "300px",
            color: "#161a1d",
            marginTop: "100px",
          }}
        >
          it’s a community that shapes lives"
        </p>
      </div>

      {/* Image */}
      <div>
        <img
          src={img2}
          style={{
            width: "600px",
            marginLeft: "1300px",
            marginTop: "-400px",
          }}
          alt="School"
        />
      </div>

      {/* Buttons */}
      <div style={{ marginTop: "-100px" }}>
        <button
          onClick={handleAddClick}
          style={{
            borderRadius: "20px",
            backgroundColor: "#660708",
            border: "none",
            width: "200px",
            height: "50px",
            fontSize: "20px",
            color: "white",
            marginLeft: "350px",
            cursor: "pointer",
          }}
        >
          Add+
        </button>
        <button
          style={{
            borderRadius: "20px",
            backgroundColor: "#660708",
            border: "none",
            width: "200px",
            height: "50px",
            fontSize: "20px",
            color: "white",
            marginLeft: "150px",
            cursor: "pointer",
          }}
        >
          Change
        </button>
      </div>

      {/* Add Form (Popup) */}
      {showForm && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              width: "400px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              position: "relative",
            }}
          >
            <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
              Add New Person
            </h2>

            <input
              type="text"
              name="id"
              placeholder="ID"
              value={formData.id}
              onChange={handleChange}
              style={{ padding: "10px", fontSize: "16px" }}
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              style={{ padding: "10px", fontSize: "16px" }}
              required
            />
            <input
              type="text"
              name="nic"
              placeholder="NIC"
              value={formData.nic}
              onChange={handleChange}
              style={{ padding: "10px", fontSize: "16px" }}
              required
            />
            <input
              type="date"
              name="birth"
              placeholder="Date of Birth"
              value={formData.birth}
              onChange={handleChange}
              style={{ padding: "10px", fontSize: "16px" }}
              required
            />
            <input
              type="text"
              name="dis"
              placeholder="District"
              value={formData.dis}
              onChange={handleChange}
              style={{ padding: "10px", fontSize: "16px" }}
            />
            <input
              type="text"
              name="dad"
              placeholder="Father's Name"
              value={formData.dad}
              onChange={handleChange}
              style={{ padding: "10px", fontSize: "16px" }}
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              style={{ padding: "10px", fontSize: "16px" }}
              required
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <button
                type="submit"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#660708",
                  border: "none",
                  width: "120px",
                  height: "40px",
                  fontSize: "16px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                style={{
                  borderRadius: "20px",
                  backgroundColor: "#aaa",
                  border: "none",
                  width: "120px",
                  height: "40px",
                  fontSize: "16px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
