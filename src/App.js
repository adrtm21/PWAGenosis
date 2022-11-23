import './App.css';

import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Horario } from "./components/Pages/Horario";
import { BoletaCalificaciones } from "./components/Pages/BoletaCalificaciones";
import  Blog from "./components/Pages/Blog";
import  ContactUs  from "./components/Pages/ContactUs";
import { Home } from "./components/Pages/Home";
import Login from './components/login/login';

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
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
