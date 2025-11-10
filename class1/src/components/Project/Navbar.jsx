import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">MyWebsite</div>

        <button
          className={`hamburger ${open ? "open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? "active" : ""}`}>
          <a href="#" onClick={() => setOpen(false)}>Home</a>
          <a href="#" onClick={() => setOpen(false)}>About</a>
          <a href="#" onClick={() => setOpen(false)}>Services</a>
          <a href="#" onClick={() => setOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
