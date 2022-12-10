
import React,{useState, useEffect} from "react";
import axios from "axios";
import { Formulario, ContenedorBotonCentrado, Boton, MensajeExito} from "../elementos/Formularios";
import Input from "../input";
import '../Pages/pages.css';
import { RadioButtonSex } from "../RadioButtons";
import {SelectInput, SelectInputEntidadFederativ, SelectInputEspecialidad, SelectInputEstado, SelectInputEstadoCivil, SelectInputgrupoindigena, SelectInputInstitucionEdu, SelectInputLenguaIndigena, SelectInputLocalidad, SelectInputMunicipio, SelectInputNacimiento} from "../selectinput";
import AuthService from "../services/auth.service";
import authHeader from "../services/auth-header";

export const ActualizacionDatos = () => {

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
  
    /*const validarPassword2 = () => {
      if(password.campo.length >0){
        if(password.campo !== password2.campo){
          cambiarPassword2((prevState) => {
            return {...prevState, valido: 'false'}
          });
        }else {
           cambiarPassword2((prevState) => {
            return {...prevState,valido: 'true'}
           });
        }
      }
    }
    */
  
    /*const onChangeTerminos = (e) =>{
         cambiarTerminos(e.target.checked);
    }
  */
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
      <h1 className="Titulo">Datos generales</h1>
        <Formulario action="" onSubmit={onSubmit}>
  
           <Input
           estado={usuario}
          /*cambiarEstado={cambiarUsuario}*/
           tipo="text"
           label="Numero De Control"
           placeholder={data.numeroControl}
           name="Ncontrol"
           leyendaError=""
           expresionRegular={expresiones.usuario}
           
           />
           <Input
           estado={nombre}
           cambiarEstado={cambiarNombre}
           tipo="text"
           label="Nombre(s)"
           placeholder={data.nombre}
           name="nombres"
           leyendaError="El nombre solo puede contener letras y espacios."
           expresionRegular={expresiones.nombre}
           />
           <Input
           estado={nombre}
           cambiarEstado={cambiarNombre}
           tipo="text"
           label="Apellido Paterno"
           placeholder={data.apellidoPaterno}
           name="ApePaterno"
           leyendaError="El nombre solo puede contener letras y espacios."
           expresionRegular={expresiones.nombre}
           />
           <Input
           estado={nombre}
           cambiarEstado={cambiarNombre}
           tipo="text"
           label="Apellido Materno"
           placeholder={data.apellidoMaterno}
           name="ApeMa"
           leyendaError="El nombre solo puede contener letras y espacios."
           expresionRegular={expresiones.nombre}
           />
           <RadioButtonSex/>
  
           <Input
           estado={password}
           cambiarEstado={cambiarPassword}
           label="Fecha de Nacimiento"
           name= {data.fechaNacimiento}
           placeholder={data.fechaNacimiento}
           leyendaError="La contraseña tiene que ser de 4 a 12 digitos."
           expresionRegular={""}
           />
  
           <SelectInput/>
  
           <SelectInputNacimiento/>
  
           <Input
           estado={nombre}
           cambiarEstado={nombre}
           tipo="name"
           label="CURP(Clave Única de Registro de Población)"
           placeholder={data.curp}
           leyendaError=""
           funcion={""}
           />
           
           <Input
           estado={nombre}
           cambiarEstado={nombre}
           tipo="name"
           label="RFC (Registro Federal de Contribuyentes"
           placeholder={data.rfc}
           leyendaError=""
           funcion={""}
           />
  
           <SelectInputEstadoCivil/>
  
           <Input
           estado={telefono}
           cambiarEstado={cambiarTelefono}
           tipo="number"
           label="Telefono"
           placeholder={data.telefono}
           name=""
           leyendaError=""
           expresionRegular={expresiones.telefono}
           />
  
           <Input
           estado={correo}
           cambiarEstado={cambiarCorreo}
           tipo="email"
           label="Correo electronico"
           placeholder={data.correoElectronico}
           name="Correo"
           leyendaError="Esto no parece un correo electronico valido"
           expresionRegular={expresiones.correo}
           />
           <SelectInputgrupoindigena/>
           <SelectInputLenguaIndigena/>
  
           <h1 className="Titulo2">Bachillerato de Procedencia</h1>
  
           <SelectInputEntidadFederativ/>
           <SelectInputInstitucionEdu/>
           
           <Input
           estado={""}
           cambiarEstado={""}
           tipo="number"
           label="Promedio General"
           placeholder="0.00"
           name="Promedio General"
           />
           <Input
           estado={""}
           cambiarEstado={""}
           tipo="number"
           label="Año de Egreso"
           placeholder={data.ano}
           name="AñoEgreso"
           />
           <SelectInputEspecialidad/>
           <h1 className="Titulo2">Domicilio</h1>
           <Input
           estado={""}
           cambiarEstado={""}
           tipo="text"
           label="Calle"
           placeholder={data.calle}
           name="Calle"
           />
           <Input
           estado={""}
           cambiarEstado={""}
           tipo="number"
           label="Número Exterior"
           placeholder={data.numeroExterior}
           name="NumeroExt"
           />
           <Input
           estado={""}
           cambiarEstado={""}
           tipo="number"
           label="Número Interior"
           placeholder={data.numeroInterior}
           name="NumeroInt"
           />
           <Input
           estado={""}
           cambiarEstado={""}
           tipo="text"
           label="Colonia"
           placeholder={data.colonia}
           name="Colonia"
           />
           <Input
           estado={""}
           cambiarEstado={""}
           tipo="number"
           label="Codigo Postal"
           placeholder={data.codigoPostal}
           name="Cp"
           />
  
           <SelectInputEstado/>
  
           <SelectInputMunicipio/>
  
           <SelectInputLocalidad/>
  
            <ContenedorBotonCentrado>
               <Boton type="submit">Enviar</Boton>
               {formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
            </ContenedorBotonCentrado>
        </Formulario>
      </main>
      </div>
     );
  }