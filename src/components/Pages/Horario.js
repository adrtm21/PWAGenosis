import './pages.css'
import React from 'react';

export const Horario = () => {
  return(
  <div className="horario">
      <h1>BIENVENIDO:(NOMBRE DEL ALUMNO) </h1>
      <hr></hr>
      <form className="periodo">
        <label>
          PERIODO : <input type="text" name="name" />
        </label>
       <input type="submit" value="Submit" />
      </form>
      <hr></hr>
  </div>
  );
};

export default Horario;



