import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
  
function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            GNOSIS 
            <i className="fas fa-graduation-cap"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink exact to="/horario" activeClassName="active" className="nav-links"
                onClick={handleClick}
              >
                Horario
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/calificaciones"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Boleta de Calificacion
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contactUs"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;