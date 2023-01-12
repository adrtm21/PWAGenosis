import './App.css';
import React, {Component} from 'react';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Horario } from "./components/Pages/Horario";
import  BoletaCalificaciones  from "./components/Pages/BoletaCalificaciones";


import { Home } from "./components/Pages/Home";
import Login from './components/login/login';
import { InscripcionIngles } from './components/Pages/Inscripcioningles';
import { Kardex } from './components/Pages/Kardex';
import { Pagos } from './components/Pages/Pagos';
import EvaluacionDocente from './components/Pages/EvaluacionDocente';
import { InscripcionComplementria } from './components/Pages/InscripcionComplementaria';
import { SolicitudBaja } from './components/Pages/SolicitudBaja';
import {ActualizacionDatos} from './components/Pages/ActualizacionDatos';
import AuthService from './components/services/auth.service';
import eventBus from './components/commons/EventBus';
import {Reinscripcion} from './components/Pages/Reinscripcion'

class App extends Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();

    
    eventBus.on("logout", () => {
      this.logOut();
    });
  }

componentWillUnmount() {
  eventBus.remove("logout");
}

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }
  render(){
  return (
    
    <>
    <Router>
      <NavBar/>
      
      <div className="pages">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/horario" element={<Horario/>} />
          <Route path="/calificaciones" element={<BoletaCalificaciones/>} />
          <Route path="/reinscripcion" element={<Reinscripcion/>} />
          <Route path="/actualizaciondatos" element={<ActualizacionDatos/>} />
          <Route path="/inscripcioningles" element={<InscripcionIngles/>} />
          <Route path="/kardex" element={<Kardex/>} />
          <Route path="/pagos" element={<Pagos/>} />
          <Route path="/evaluaciondocente" element={<EvaluacionDocente/>} />
          <Route path="/inscripcioncomplementaria" element={<InscripcionComplementria/>} />
          <Route path="/solicitudbaja" element={<SolicitudBaja/>} />

        </Routes>
      </div>
      <authVerify logOut={this.logOut}/>
    </Router>
    </>
  );
  }
}

export default App;
