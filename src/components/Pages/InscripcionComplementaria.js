import React,{useState, useEffect} from "react";
import axios from "axios";
import { Formulario} from "../elementos/Formularios";
import '../Pages/pages.css';
import Input from "../input";
import AuthService from "../services/auth.service";

export const InscripcionComplementria = () => {
    const currentUser = AuthService.getCurrentUser();
    const API_URL= 'http://localhost:8080/Control/';
    //**  PETICION A LA API */
    //**                    */
    //**                    */
    const [data, setData ] = useState([]);
  
    console.log(currentUser.token)
  
  
    useEffect(() => {
        axios.get(API_URL + 'alumnos/json/' + currentUser.userId, { headers:{ 'Authorization' : 'Bearer ' + currentUser.token}})
        .then(res => {
            console.log("Getting from :::", res.data)
            setData(res.data)
        }).catch(err => console.log(err))
    }, []);
    const[usuario, cambiarUsuario]= useState({Campo:'', valido: null});
    const[nombre, cambiarNombre]= useState({Campo:'', valido: null});
    const[password, cambiarPassword]= useState({Campo:'', valido: null});
    const[password2, cambiarPassword2]= useState({Campo:'', valido: null});
    const[correo, cambiarCorreo]= useState({Campo:'', valido: null});
    const[telefono, cambiarTelefono]= useState({Campo:'', valido: null});
    const[terminos, cambiarTerminos]= useState(false);
    const[formularioValido, cambiarFormularioValido] = useState(null);
    const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
      }
      const onSubmit = (e) => {
          e.preventDefault();
          if(
            usuario.valido === 'true' &&
            nombre.valido === 'true' &&
            password.valido === 'true' &&
            password2.valido === 'true' &&
            correo.valido === 'true' &&
            telefono.valido === 'true' &&
            terminos
          ){
            cambiarFormularioValido(true);
            cambiarUsuario({campo: '', valido: ''});
            cambiarNombre({campo: '', valido: null});
            cambiarPassword({campo: '', valido: null});
            cambiarPassword2({campo: '', valido: 'null'});
            cambiarCorreo({campo: '', valido: null});
            cambiarTelefono({campo: '', valido: null});
          } else {
            cambiarFormularioValido(false);
          }
        }





    return (
    <div className="Contenedor-Form">
    <main>
    <h1 className="Titulo">Inscripción Actividad Complementaria</h1>
    <Formulario action="" onSubmit={onSubmit}>

<Input
   estado={usuario}
   tipo="text"
   label="Numero De Control"
   placeholder={data.numeroControl}
   name="Ncontrol"
   leyendaError=""
   expresionRegular={expresiones.usuario}
   
   />
   <Input
   estado={nombre}
   tipo="text"
   label="Nombre"
   placeholder={data.nombre}
   name="NombreCompleto"
   leyendaError=""
   expresionRegular={expresiones.nombre}
   />
   <Input
   estado={nombre}
   tipo="text"
   label="Oferta Educativa"
   placeholder={data.ofertaEducativa}
   name="OfertaEdu"
   leyendaError=""
   expresionRegular={expresiones.nombre}
   />
   <Input
   estado={nombre}
   tipo="text"
   label="Plan De Estudios"
   placeholder={data.planEstudio}
   name="PlanEstu"
   leyendaError=""
   expresionRegular={expresiones.nombre}
   />
    <Input
   estado={usuario}
   tipo="text"
   label="Período escolar"
   placeholder="2022B-AGO 2022-ENE 2023"
   name="Periodoesco"
   leyendaError=""
   />
  
   <Input
   estado={usuario}
   tipo="text"
   label="Estatus"
   placeholder="En proceso"
   name="Estatus"
   leyendaError=""
   />
   </Formulario>
    </main>
    </div>
    );
}