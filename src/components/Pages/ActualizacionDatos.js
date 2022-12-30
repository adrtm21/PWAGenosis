import React,{useState, useEffect} from "react";
import axios from "axios";
import { Formulario, ContenedorBotonCentrado,ContenedorBotonActualizar, Boton, MensajeExito, Botonactualizar, Botonenviar, Botoncancelar} from "../elementos/Formularios";
import '../Pages/pages.css';
import Input from "../input";
import { RadioButtonSex } from "../RadioButtons";
import {SelectInput,SelectInputserviciomedico,SelectInputBeca,SelectInputDiscapacidad,SelectInputtiposangre, SelectInputEntidadFederativ, SelectInputEspecialidad, SelectInputEstado, SelectInputEstadoCivil, SelectInputgrupoindigena, SelectInputInstitucionEdu, SelectInputLenguaIndigena, SelectInputLocalidad, SelectInputMunicipio, SelectInputNacimiento} from "../selectinput";
import AuthService from "../services/auth.service";
import authHeader from "../services/auth-header";
import swal from "sweetalert";

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

  const mostrarAlerta=()=>{
    swal({
      title:"Actualización de datos",
      text:"Estás seguro que desea actualizar sus datos?",
      icon:"warning",
      buttons:["No", "Si"]
    }).then(respuesta=>{
      if(respuesta){
        swal({text:"Se han actualizado los datos exitosamente",
      icon:"success"})
      }
    })
  }

 
    const[usuario, cambiarUsuario]= useState({Campo:'', valido: null});
    const[apepaterno, cambiarApepaterno]= useState({Campo:'', valido: null});
    const[apematerno, cambiarApematerno]= useState({Campo:'', valido: null});
    const[nombre, cambiarNombre]= useState({Campo:'', valido: null});
    const[correo, cambiarCorreo]= useState({Campo:'', valido: null});
    const[telefono, cambiarTelefono]= useState({Campo:'', valido: null});
    const[curp, cambiarCurp]= useState({Campo:'', valido: null});
    const[rfc, cambiarRfc]= useState({Campo:'', valido: null});
    const[promediogeneral, cambiarPromediogeneral]= useState({Campo:'', valido: null});
    const[anoegreso, cambiarAnoegreso]= useState({Campo:'', valido: null});
    const[callealumno, cambiarCallealumno]= useState({Campo:'', valido: null});
    const[numeroextAlumno, cambiarNumeroextalumno]= useState({Campo:'', valido: null});
    const[numerointAlumno, cambiarNumerointalumno]= useState({Campo:'', valido: null});
    const[coloniaalumno, cambiarColoniaalumno]= useState({Campo:'', valido: null});
    const[cpalumno, cambiarCpalumno]= useState({Campo:'', valido: null});
    const[padre, cambiarPadre]= useState({Campo:'', valido: null});
    const[telefonopadre, cambiarTelefonopadre]= useState({Campo:'', valido: null});
    const[madre, cambiarMadre]= useState({Campo:'', valido: null});
    const[telefonomadre, cambiarTelefonoMadre]= useState({Campo:'', valido: null});
    const[tutor, cambiarTutor]= useState({Campo:'', valido: null});
    const[telefonotutor, cambiarTelefonotutor]= useState({Campo:'', valido: null});
    const[correotutor, cambiarCorreotutor]= useState({Campo:'', valido: null});
    const[centrotutor, cambiarCentrotutor]= useState({Campo:'', valido: null});
    const[calletutor, cambiarCalletutor]= useState({Campo:'', valido: null});
    const[numeroexttutor, cambiarNumeroexttutor]= useState({Campo:'', valido: null});
    const[numerointtutor, cambiarNumerointtutor]= useState({Campo:'', valido: null});
    const[coloniatutor, cambiarColoniatutor]= useState({Campo:'', valido: null});
    const[cptutor, cambiarCptutor]= useState({Campo:'', valido: null});
    const[nafiliacion, cambiarNafiliacion]= useState({Campo:'', valido: null});
    const[nafiliacionimss, cambiarNafiliacionimss]= useState({Campo:'', valido: null});
    const[prosalud, cambiarProsalud]= useState({Campo:'', valido: null});
    const[medpreinscritos, cambiarMedpreinscritos]= useState({Campo:'', valido: null})
    const[talla, cambiarTalla]= useState({Campo:'', valido: null});
    const[peso, cambiarPeso]= useState({Campo:'', valido: null});
    const[formularioValido, cambiarFormularioValido] = useState(null);
  
    const expresiones = {
      usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
      nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
      password: /^.{4,12}$/, // 4 a 12 digitos.
      correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      telefono: /^\d{7,14}$/, // 7 a 14 numeros.
      numerounocien: /^([1-9 ]|[ 1-9 ][ 0-9 ]|[ 1-1 ][ 0-0 ][ 0-0 ])$/,
    }
  
    const onSubmit = (e) => {
      e.preventDefault();
      if(
        usuario.valido === 'true' &&
        nombre.valido === 'true' &&
        apepaterno.valido === 'true' &&
        apematerno.valido === 'true' &&
        correo.valido === 'true' &&
        curp.valido === 'true' &&
        rfc.valido === 'true' &&
        promediogeneral.valido === 'true' &&
        anoegreso.valido === 'true' &&
        callealumno.valido === 'true' &&
        numeroextAlumno.valido === 'true' &&
        numerointAlumno.valido === 'true' &&
        coloniaalumno.valido === 'true' &&
        cpalumno.valido === 'true' &&
        padre.valido === 'true' &&
        telefonopadre.valido === 'true' &&
        madre.valido === 'true' &&
        telefonomadre.valido === 'true' &&
        tutor.valido === 'true' &&
        telefonotutor.valido === 'true' &&
        correotutor.valido === 'true' &&
        centrotutor.valido === 'true' &&
        calletutor.valido === 'true' &&
        numeroexttutor.valido === 'true' &&
        numerointtutor.valido === 'true' &&
        coloniatutor.valido === 'true' &&
        cptutor.valido === 'true' &&
        nafiliacion.valido === 'true' &&
        nafiliacionimss.valido === 'true' &&
        prosalud.valido === 'true' &&
        medpreinscritos.valido === 'true' &&
        talla.valido === 'true' &&
        peso.valido === 'true' &&
        telefono.valido === 'true' 
      ){
        cambiarFormularioValido(true);
        cambiarUsuario({campo: '', valido: ''});
        cambiarNombre({campo: '', valido: null});
        cambiarCorreo({campo: '', valido: null});
        cambiarTelefono({campo: '', valido: null});
        cambiarApepaterno({campo: '', valido: null});
        cambiarApematerno({campo: '', valido: null});
        cambiarCurp({campo: '', valido: null});
        cambiarRfc({campo: '', valido: null});
        cambiarPromediogeneral({campo: '', valido: null});
        cambiarAnoegreso({campo: '', valido: null});
        cambiarCallealumno({campo: '', valido: null});
        cambiarNumeroextalumno({campo: '', valido: null});
        cambiarNumerointalumno({campo: '', valido: null});
        cambiarColoniaalumno({campo: '', valido: null});
        cambiarCpalumno({campo: '', valido: null});
        cambiarPadre({campo: '', valido: null});
        cambiarTelefonopadre({campo: '', valido: null});
        cambiarMadre({campo: '', valido: null});
        cambiarTelefonoMadre({campo: '', valido: null});
        cambiarTutor({campo: '', valido: null});
        cambiarTelefonotutor({campo: '', valido: null});
        cambiarCorreotutor({campo: '', valido: null});
        cambiarCentrotutor({campo: '', valido: null});
        cambiarCalletutor({campo: '', valido: null});
        cambiarNumeroexttutor({campo: '', valido: null});
        cambiarNumerointtutor({campo: '', valido: null});
        cambiarColoniatutor({campo: '', valido: null});
        cambiarCptutor({campo: '', valido: null});
        cambiarNafiliacion({campo: '', valido: null});
        cambiarNafiliacionimss({campo: '', valido: null});
        cambiarProsalud({campo: '', valido: null});
        cambiarMedpreinscritos({campo: '', valido: null});
        cambiarTalla({campo: '', valido: null});
        cambiarPeso({campo: '', valido: null});
      } else {
        cambiarFormularioValido(false);
      }
    }
  
    return ( 

      <div className="Contenedor-Form">
      <main>
      <h1 className="Titulo">Datos Generales</h1>
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
           disabled
           />


           <Input 
           estado={nombre}
           cambiarEstado={cambiarNombre}
           tipo="text"
           label="Nombre(s)"
           placeholder={data.nombre?data.nombre:"--:--"}
           name="Nombres"
           leyendaError="El nombre solo puede contener letras y espacios."
           expresionRegular={expresiones.nombre}
           
           />
           <Input
           estado={apepaterno}
           cambiarEstado={cambiarApepaterno}
           tipo="text"
           label="Apellido Paterno"
           placeholder={data.apellidoPaterno}
           name="ApellidoPaterno"
           leyendaError="El nombre solo puede contener letras y espacios."
           expresionRegular={expresiones.nombre}
           />
           <Input
           estado={apematerno}
           cambiarEstado={cambiarApematerno}
           tipo="text"
           label="Apellido Materno"
           placeholder={data.apellidoMaterno}
           name="ApellidoMaterno"
           leyendaError="El nombre solo puede contener letras y espacios."
           expresionRegular={expresiones.nombre}
           />
           <RadioButtonSex/>        
           <SelectInput/>
           <SelectInputNacimiento/>
  
           <Input
           estado={curp}
           cambiarEstado={cambiarCurp}
           tipo="name"
           label="CURP(Clave Única de Registro de Población)"
           placeholder={data.curp}
           leyendaError=""
           funcion={""}
           />
           
           <Input
           estado={rfc}
           cambiarEstado={cambiarRfc}
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
           name="TelefonoMovil"
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
           disabled
           />
           <SelectInputgrupoindigena/>
           <SelectInputLenguaIndigena/>
  
           <h1 className="Titulo">Bachillerato de Procedencia</h1>
  
           <SelectInputEntidadFederativ/>
           <SelectInputInstitucionEdu/>
           
           <Input
           estado={promediogeneral}
           cambiarEstado={cambiarPromediogeneral}
           tipo="number"
           label="Promedio General"
           placeholder={data.promedioGeneralProcedencia}
           name="Promedio General"
           expresionRegular={expresiones.numerounocien}
           leyendaError="El promedio general solo puede ser del 1 al 100"
           />
           <Input
           estado={anoegreso}
           cambiarEstado={cambiarAnoegreso}
           tipo="number"
           label="Año de Egreso"
           placeholder={data.anioEgresoProcedencia}
           name="AñoEgreso"
           />
           <SelectInputEspecialidad/>
           <h1 className="Titulo">Domicilio</h1>

           <Input
           estado={callealumno}
           cambiarEstado={cambiarCallealumno}
           tipo="text"
           label="CalleAlumno"
           placeholder={data.calle}
           name="Calle"
           />
           <Input
           estado={numeroextAlumno}
           cambiarEstado={cambiarNumeroextalumno}
           tipo="number"
           label="Número Exterior"
           placeholder={data.numeroExterior}
           name="NumeroExtalumno"
           />
           <Input
           estado={numerointAlumno}
           cambiarEstado={cambiarNumerointalumno}
           tipo="number"
           label="Número Interior"
           placeholder={data.numeroInterior}
           name="NumeroIntalumno"
           />
           <Input
           estado={coloniaalumno}
           cambiarEstado={cambiarColoniaalumno}
           tipo="text"
           label="Colonia"
           placeholder={data.colonia}
           name="Coloniaalumno"
           />
           <Input
           estado={cpalumno}
           cambiarEstado={cambiarCpalumno}
           tipo="number"
           label="Codigo Postal"
           placeholder={data.codigoPostal}
           name="Cpalumno"
           />
  
           <SelectInputEstado/>
  
           <SelectInputMunicipio/>
  
           <SelectInputLocalidad/>

           <h1 className="Titulo">Datos Personales</h1>

           <Input 
           estado={padre}
           cambiarEstado={cambiarPadre}
           tipo="text"
           label="Nombre completo del padre"
           placeholder={data.padre}
           name="Nombre padre"
           leyendaError="El nombre solo puede contener letras y espacios."
           expresionRegular={expresiones.nombre}
           />

           <Input
           estado={telefonopadre}
           cambiarEstado={cambiarTelefonopadre}
           tipo="number"
           label="Teléfono"
           placeholder={""}
           name="Telefono padre"
           leyendaError=""
           expresionRegular={expresiones.telefono}
           />

          <Input 
           estado={madre}
           cambiarEstado={cambiarMadre}
           tipo="text"
           label="Nombre completo de la Madre"
           placeholder={data.madre}
           name="Nombre madre"
           leyendaError="El nombre solo puede contener letras y espacios."
           expresionRegular={expresiones.nombre}
           />

           <Input
           estado={telefonomadre}
           cambiarEstado={cambiarTelefonoMadre}
           tipo="number"
           label="Teléfono"
           placeholder={""}
           name="Telefono Madre"
           leyendaError=""
           expresionRegular={expresiones.telefono}
           />

           <h1 className="Titulo3">--Tutor--</h1>

           <Input 
           estado={tutor}
           cambiarEstado={cambiarTutor}
           tipo="text"
           label="Nombre completo del tutor"
           placeholder={data.tutor?data.tutor:"--:--"}
           name="Nombre Tutor"
           leyendaError="El nombre solo puede contener letras y espacios."
           expresionRegular={expresiones.nombre}
           />

           <Input
           estado={telefonotutor}
           cambiarEstado={cambiarTelefonotutor}
           tipo="number"
           label="Teléfono"
           placeholder={""}
           name="Telefono Tutor"
           leyendaError=""
           expresionRegular={expresiones.telefono}
           />

          <Input 
           estado={correotutor}
           cambiarEstado={cambiarCorreotutor}
           tipo="text"
           label="Correo Electrónico"
           placeholder={""}
           name="Correomadre"
           leyendaError="Esto no parece un correo electronico"
           expresionRegular={expresiones.correo}
           />

           <Input
           estado={centrotutor}
           cambiarEstado={cambiarCentrotutor}
           tipo="text"
           label="Centro de trabajo"
           placeholder={""}
           name="Tutor Centro Trabajo"
           leyendaError=""
           expresionRegular={expresiones.nombre}
           />

          <h1 className="Titulo4">Domicilio</h1>
          
          <Input
           estado={calletutor}
           cambiarEstado={cambiarCalletutor}
           tipo="text"
           label="Calle"
           placeholder={""}
           name="CalleTutor"
           />
           <Input
           estado={numeroexttutor}
           cambiarEstado={cambiarNumeroexttutor}
           tipo="number"
           label="Número Exterior"
           placeholder={""}
           name="NumeroExttutor"
           />
           <Input
           estado={numerointtutor}
           cambiarEstado={cambiarNumerointtutor}
           tipo="number"
           label="Número Interior"
           placeholder={""}
           name="NumeroInttutor"
           />
           <Input
           estado={coloniatutor}
           cambiarEstado={cambiarColoniatutor}
           tipo="text"
           label="Colonia"
           placeholder={""}
           name="Coloniatutor"
           />
           <Input
           estado={cptutor}
           cambiarEstado={cambiarCptutor}
           tipo="number"
           label="Codigo Postal"
           placeholder={""}
           name="Cptutor"
           />
  
           <SelectInputEstado/>
  
           <SelectInputMunicipio/>
  
           <SelectInputLocalidad/>

           <h1 className="Titulo">Datos clínicos</h1>

           <SelectInputserviciomedico/>

           <Input
           estado={nafiliacion}
           cambiarEstado={cambiarNafiliacion}
           tipo="text"
           label="No. de afiliación"
           placeholder={data.numeroAfiliacion}
           name="Nafiliacion"
           />
           <Input
           estado={nafiliacionimss}
           cambiarEstado={cambiarNafiliacionimss}
           tipo="number"
           label="No. de afiliación IMSS"
           placeholder={data.numeroAfiliacionIMSS}
           name="Nafiliacionimss"
           />

           <SelectInputtiposangre/>
           <SelectInputDiscapacidad/>

           <Input
           estado={prosalud}
           cambiarEstado={cambiarProsalud}
           tipo="text"
           label="Problemas de salud"
           placeholder={data.enfermedades}
           name="Prosalud"
           />

           <Input
           estado={medpreinscritos}
           cambiarEstado={cambiarMedpreinscritos}
           tipo="text"
           label="Medicamentos preinscritos"
           placeholder={data.medicamentosPreinscritos}
           name="Medpreinscritos"
           />
           <Input
           estado={talla}
           cambiarEstado={cambiarTalla}
           tipo="number"
           label="Talla"
           placeholder={data.talla}
           name="Talla"
           />
           <Input
           estado={peso}
           cambiarEstado={cambiarPeso}
           tipo="number"
           label="Peso"
           placeholder={data.peso}
           name="Peso"
           />
           <SelectInputBeca/>

           <h1 className="Titulo3">--------------</h1>






               <Botonenviar onClick={()=>mostrarAlerta()}>Enviar</Botonenviar>
               
               {formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
              
            
        </Formulario>
      </main>
      </div>
     );
  }