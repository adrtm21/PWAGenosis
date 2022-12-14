import './App.css';

import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Horario } from "./components/Pages/Horario";
import  BoletaCalificaciones  from "./components/Pages/BoletaCalificaciones";
import  {Blog} from "./components/Pages/Blog";
import  ContactUs  from "./components/Pages/ContactUs";
import { Home } from "./components/Pages/Home";
import Login from './components/login/login';
import { InscripcionIngles } from './components/Pages/Inscripcioningles';
import { Kardex } from './components/Pages/Kardex';
import { Pagos } from './components/Pages/Pagos';
import EvaluacionDocente from './components/Pages/EvaluacionDocente';
import { InscripcionComplementria } from './components/Pages/InscripcionComplementaria';
import { SolicitudBaja } from './components/Pages/SolicitudBaja';
import {ActualizacionDatos} from './components/Pages/ActualizacionDatos';
import {carousel} from './components/Pages/Carousel'

function App() {
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
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contactUs" element={<ContactUs/>} />
          <Route path="/actualizaciondatos" element={<ActualizacionDatos/>} />
          <Route path="/inscripcioningles" element={<InscripcionIngles/>} />
          <Route path="/kardex" element={<Kardex/>} />
          <Route path="/pagos" element={<Pagos/>} />
          <Route path="/evaluaciondocente" element={<EvaluacionDocente/>} />
          <Route path="/inscripcioncomplementaria" element={<InscripcionComplementria/>} />
          <Route path="/solicitudbaja" element={<SolicitudBaja/>} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
