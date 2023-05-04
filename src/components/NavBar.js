import "./NavbarStyles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to={`${process.env.PUBLIC_URL}/`}>
        <img src={`${process.env.PUBLIC_URL}/logo.PNG`} alt="Logo" height={75} />
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
        </li>
        <li>
          <Link to={`${process.env.PUBLIC_URL}/infotutor`}>Info Tutor</Link>
        </li>
        <li>
          <Link to={`${process.env.PUBLIC_URL}/listtutors`}>List Tutors</Link>
        </li>
        <li>
          <Link to={`${process.env.PUBLIC_URL}/myschedule`}>My Schedule</Link>
        </li>
        <li>
          <Link to={`${process.env.PUBLIC_URL}/reservetutor`}>Reserve A Tutor</Link>
        </li>
        <li>
          <Link to={`${process.env.PUBLIC_URL}/favorites`}>My Favorites</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
