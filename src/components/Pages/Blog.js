import React from 'react';
import {useState} from "react";
import { Formulario, ContenedorBotonCentrado, Boton, MensajeExito} from "../elementos/Formularios";
import Input from "../input";
import '../Pages/pages.css';

export const Blog = () => {
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
        <div className='reinscrpcion'>
        <main>
        <h1 className="Titulo">Reinscripción</h1>
        <Formulario action="" onSubmit={onSubmit}>

        <Input
           estado={usuario}
           tipo="text"
           label="Numero De Control"
           placeholder="TE123"
           name="Ncontrol"
           leyendaError=""
           expresionRegular={expresiones.usuario}
           
           />
           <Input
           estado={nombre}
           tipo="text"
           label="Nombre"
           placeholder="Carlos hambre xasdo mdkflpeor"
           name="NombreCompleto"
           leyendaError=""
           expresionRegular={expresiones.nombre}
           />
           <Input
           estado={nombre}
           tipo="text"
           label="Oferta Educativa"
           placeholder="Ingenieria x"
           name="OfertaEdu"
           leyendaError=""
           expresionRegular={expresiones.nombre}
           />
           <Input
           estado={nombre}
           tipo="text"
           label="Plan De Estudios"
           placeholder="Ilog-2009-202"
           name="PlanEstu"
           leyendaError=""
           expresionRegular={expresiones.nombre}
           />
           <Input
           estado={nombre}
           tipo="number"
           label="Versión"
           placeholder="2014"
           name="Version"
           leyendaError=""
           />
           <Input
           estado={nombre}
           tipo="number"
           label="Periodo a reinscribir"
           placeholder="9"
           name="PeriodoRei"
           leyendaError=""
           />
           <Input
           estado={nombre}
           tipo="number"
           label="Créditos cursados"
           placeholder="229"
           name="CreditosCur"
           leyendaError=""
           />
            <Input
           estado={nombre}
           tipo="number"
           label="Créditos totales"
           placeholder="260"
           name="Creditostota"
           leyendaError=""
           />
             <Input
           estado={nombre}
           tipo="number"
           label="Asignatura(s) a repetir"
           placeholder="0"
           name="Asignaturarepe"
           leyendaError=""
           />
           <Input
           estado={nombre}
           tipo="number"
           label="Asignatura(s) a especial"
           placeholder="0"
           name="Asignaturaespe"
           leyendaError=""
           />
           <Input
           estado={nombre}
           tipo="number"
           label="Promedio"
           placeholder="91"
           name="Promedio"
           leyendaError=""
           />
           <Input
           estado={nombre}
           tipo="number"
           label="Porcentaje de Avance"
           placeholder="88"
           name="Porcentajeavance"
           leyendaError=""
           />
           <Input
           estado={nombre}
           tipo="text"
           label="Comité académico"
           placeholder="No"
           name="Comiteaca"
           leyendaError=""
           />
           <Input
           estado={nombre}
           tipo="numbre"
           label="Créditos de tutoría"
           placeholder="3"
           name="Creditostuto"
           leyendaError=""
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
           placeholder="Reinscrito"
           name="Estatus"
           leyendaError=""
           />


        </Formulario>
        </main>
        </div>
    );
}