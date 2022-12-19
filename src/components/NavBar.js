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
          <NavLink exact to="/home" className="nav-logo">
            GNOSIS 
            <i className="fas fa-graduation-cap"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink exact to="/horario" activeclassname="active" className="nav-links"
                onClick={handleClick}
              >
                Horario
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact to="/calificaciones"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Boleta de Calificacion
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact to="/reinscripcion"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Reinscripcion
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact to="/contactUs"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact to="/kardex"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
               Kardex
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact to="/pagos"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
               Pagos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact to="/evaluaciondocente"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
               Evaluación Docente
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact to="/actualizaciondatos"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
               Actualización de Datos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact to="/inscripcioningles"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Inscripción Ingles
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/inscripcioncomplementaria"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Inscripción De Actividad Complementaria
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/solicitudbaja"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Solicitud De Baja
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