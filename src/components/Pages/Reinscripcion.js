
import React,{useState, useEffect} from "react";
import axios from "axios";
import { Formulario, ContenedorBotonCentrado, Boton, MensajeExito, Botoninscribir, Botonenviar} from "../elementos/Formularios";
import {SelectInput, SelectInputEntidadFederativ, SelectInputEspecialidad, SelectInputEstado, SelectInputEstadoCivil, SelectInputgrupoindigena, SelectInputInstitucionEdu, SelectInputLenguaIndigena, SelectInputLocalidad, SelectInputMunicipio, SelectInputNacimiento} from "../selectinput";
import '../Pages/pages.css';
import Input from "../input";
import AuthService from "../services/auth.service";
import swal from "sweetalert";

export const Reinscripcion = () => {

    const currentUser = AuthService.getCurrentUser();

  const API_URL= 'http://localhost:8080/Control/';
  //**  PETICION A LA API */
  //**                    */
  //**                    */
  const [data, setData ] = useState([]);


  useEffect(() => {
      axios.get(API_URL + 'alumnos/json/' + currentUser.userId, { headers:{ 'Authorization' : 'Bearer ' + currentUser.token}})
      .then(res => {
          console.log("Getting from :::", res.data)
          setData(res.data)
      }).catch(err => console.log(err))
  }, []);
  const mostrarAlertaReinscripcion=()=>{
    swal({
      title:"Reinscripcion",
      text:"Estás seguro que deseas Reinscribirte?",
      icon:"warning",
      buttons:["No", "Si"]
    }).then(respuesta=>{
      if(respuesta){
        swal({text:"Se han Reinscrito correctamente",
      icon:"success"})
      }
    })
  }
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
    return(
      <div className="Contenedor-Form">
        <main>
        <h1 className="Titulo">Reinscripción</h1>
        <Formulario action="" onSubmit={onSubmit}>

        <Input
           estado={usuario}
           tipo="text"
           label="Numero De Control"
           placeholder={data.numeroControl}
           name="Ncontrol"
           leyendaError=""
           expresionRegular={expresiones.usuario}
           disabled
           />
           <Input
           estado={nombre}
           tipo="text"
           label="Nombre"
           placeholder={data.nombre}
           name="NombreCompleto"
           leyendaError=""
           expresionRegular={expresiones.nombre}
           disabled
           />
           <Input
           estado={nombre}
           tipo="text"
           label="Oferta Educativa"
           placeholder={data.ofertaEducativa?.carrera}
           name="OfertaEdu"
           leyendaError=""
           expresionRegular={expresiones.nombre}
           disabled
           />
           <Input
           estado={nombre}
           tipo="text"
           label="Plan De Estudios"
           placeholder={data.planEstudio?.clave}
           name="PlanEstu"
           leyendaError=""
           expresionRegular={expresiones.nombre}
           disabled
           />
           <Input
           estado={nombre}
           tipo="number"
           label="Versión"
           placeholder={data.planEstudioVersion?.version}
           name="Version"
           leyendaError=""
           disabled
           />
           <Input
           estado={nombre}
           tipo="number"
           label="Periodo a reinscribir"
           placeholder="9"
           name="PeriodoRei"
           leyendaError=""
           disabled
           />
           <Input
           estado={nombre}
           tipo="number"
           label="Créditos cursados"
           placeholder={data.alumnoDetalle?.creditosCursados}
           name="CreditosCur"
           leyendaError=""
           disabled
           />
            <Input
           estado={nombre}
           tipo="number"
           label="Créditos totales"
           placeholder={data.alumnoDetalle?.creditosTotales}
           name="Creditostota"
           leyendaError=""
           disabled
           />
             <Input
           estado={nombre}
           tipo="number"
           label="Asignatura(s) a repetir"
           placeholder={data.alumnoDetalle?.asignaturasRepeticion}
           name="Asignaturarepe"
           leyendaError=""
           disabled
           />
           <Input
           estado={nombre}
           tipo="number"
           label="Asignatura(s) a especial"
           placeholder={data.alumnoDetalle?.asignaturasEspecial}
           name="Asignaturaespe"
           leyendaError=""
           disabled
           />
           <Input
           estado={nombre}
           tipo="number"
           label="Promedio"
           placeholder={data.alumnoDetalle?.promedio}
           name="Promedio"
           leyendaError=""
           disabled
           />
           <Input
           estado={nombre}
           tipo="number"
           label="Porcentaje de Avance"
           placeholder={data.alumnoDetalle?.porcentajeAvanceCreditos}
           name="Porcentajeavance"
           leyendaError=""
           disabled
           />
           <Input
           estado={nombre}
           tipo="text"
           label="Comité académico"
           placeholder="No"
           name="Comiteaca"
           leyendaError=""
           disabled
           />
           <Input
           estado={nombre}
           tipo="numbre"
           label="Créditos de tutoría"
           placeholder={data.tutoriasPuntos}
           name="Creditostuto"
           leyendaError=""
           disabled
           />
           <Input
           estado={usuario}
           tipo="text"
           label="Período escolar"
           placeholder={data.alumnoDetalle?.periodoEscolar}
           name="Periodoesco"
           leyendaError=""
           disabled
           />
           <Input
           estado={usuario}
           tipo="text"
           label="Estatus"
           placeholder={data.estatus?.estatus}
           name="Estatus"
           leyendaError=""
           disabled
           />

            <h1 className="Titulo3"></h1>

            <Botonenviar onClick={()=>mostrarAlertaReinscripcion()}>Reinscribir</Botonenviar>


        </Formulario>
        </main>
        </div>
    );
}