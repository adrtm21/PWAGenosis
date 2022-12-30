import React from "react";
import {Input,Label, GrupoInput, LeyendaError, IconoValidacion,} from './elementos/Formularios';
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const ComponenteInput =({estado,disabled,cambiarEstado,tipo,label, placeholder,name,leyendaError, expresionRegular,funcion}) => {
    const onChange = (e) => {
        cambiarEstado({...estado, campo: e.target.value});
    }

    const validacion =() =>{
        if(expresionRegular){
            if(expresionRegular.test(estado.campo)){
                cambiarEstado({...estado, valido: 'true'})
            }else {
                cambiarEstado({...estado, valido: 'false'})
            }
        }
        if(funcion){
            funcion();
        }
    }

    return(
        <div>
        <Label htmlFor={name} valido={estado.valido}>{label}</Label>
        <GrupoInput>
        <Input type={tipo}
         placeholder={placeholder}
          id={name}
          value={estado.campo}
          onChange={onChange}
          onKeyUp={validacion}
          onBlur={validacion}
          valido={estado.valido}
          disabled={disabled}
           />
        <IconoValidacion
          icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
          valido={estado.valido}
          />
        </GrupoInput>
       <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    
      </div>
    );
}
export default ComponenteInput;