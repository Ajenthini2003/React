

import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      minHeight: "100vh",
      margin: 0,
      padding: 0,
      backgroundColor: darkMode ? "#1a1a1a" : "#f5f5f5",
      color: darkMode ? "#f5f5f5" : "#1a1a1a",
      transition: "all 0.3s ease",
    },
    header: {
      padding: "20px",
      textAlign: "center",
      backgroundColor: darkMode ? "#333" : "#fff",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },
    button: {
      padding: "8px 16px",
      marginTop: "10px",
      cursor: "pointer",
      backgroundColor: darkMode ? "#f5f5f5" : "#1a1a1a",
      color: darkMode ? "#1a1a1a" : "#f5f5f5",
      border: "none",
      borderRadius: "5px",
      transition: "all 0.3s ease",
    },
    section: {
      padding: "40px 20px",
      textAlign: "center",
    },
    card: {
      backgroundColor: darkMode ? "#333" : "#fff",
      padding: "20px",
      margin: "20px auto",
      maxWidth: "300px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease",
    },
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1>Welcome to My React Webpage</h1>
        <button style={styles.button} onClick={toggleDarkMode}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <section style={styles.section}>
        <h2>About Me</h2>
        <p>
          Hi! I'm a web developer learning React. This is a simple single-page
          app with modern styling.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Projects</h2>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          <div style={styles.card}>
            <h3>Project 1</h3>
            <p>A React To-Do List App with interactive UI.</p>
          </div>
          <div style={styles.card}>
            <h3>Project 2</h3>
            <p>A Portfolio Webpage with Dark Mode toggle.</p>
          </div>
          <div style={styles.card}>
            <h3>Project 3</h3>
            <p>Upcoming Projects will be added soon!</p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2>Contact Me</h2>
        <p>Email: example@email.com</p>
        <p>Phone: +123 456 7890</p>
      </section>

      <footer style={{ textAlign: "center", padding: "20px", backgroundColor: darkMode ? "#222" : "#eee" }}>
        &copy; 2025 My React Webpage
      </footer>
    </div>
  );
}

export default App;

