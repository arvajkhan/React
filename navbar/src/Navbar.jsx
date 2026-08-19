import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
          <span>Dev</span>Zone
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          <a href="#home">Home</a>
          <a href="#about">About</a>

          {/* Dropdown */}
          <div className="dropdown">
            <button
              className="dropdown-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Services ▾
            </button>

            {dropdownOpen && (
              <div className="dropdown-menu">
                <a href="#web">Web Development</a>
                <a href="#app">App Development</a>
                <a href="#ui">UI/UX Design</a>
                <a href="#seo">SEO</a>
              </div>
            )}
          </div>

          <a href="#contact">Contact</a>

        </div>

        {/* Search */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search..."
          />
          <button>🔍</button>
        </div>

        {/* Mobile Menu */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
