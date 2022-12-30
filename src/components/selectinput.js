import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export const SelectInput =() =>{
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native" >
        Entidad federativa de nacimiento
        </InputLabel>

        <NativeSelect
          defaultValue={0}
          inputProps={{
            name: 'Entidad federativa de nacimiento',
            id: 'uncontrolled-native',
          }}
        >
          <option value={1}>Tabasco</option>
          <option value={2}>Campeche</option>
          <option value={3}>Chiapas</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}


export const SelectInputNacimiento=() =>{
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native" >
          Municipio de nacimiento
          </InputLabel>
          <NativeSelect
            defaultValue={0}
            inputProps={{
              name: 'Entidad federativa de nacimiento',
              id: 'uncontrolled-native',
              
            }}
          >
            <option value={1}>Paraiso</option>
            <option value={2}>Centro</option>
            <option value={3}>Macuspana</option>
          </NativeSelect>
        </FormControl>
      </Box>
    );
  }

  export const SelectInputEstadoCivil=() =>{
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native" >
          Estado Civil
          </InputLabel>
          <NativeSelect
            defaultValue={0}
            inputProps={{
              name: 'Estado civil',
              id: 'uncontrolled-native',
              
            }}
          >
            <option value={1}>Casado</option>
            <option value={2}>Divorciado</option>
            <option value={3}>Soltero</option>
            <option value={3}>Union Libre</option>
            <option value={3}>Viudo</option>
          </NativeSelect>
        </FormControl>
      </Box>
    );
  }

  export const SelectInputgrupoindigena=() =>{
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native" >
          Grupo indígena
          </InputLabel>
          <NativeSelect
            defaultValue={0}
            inputProps={{
              name: 'Grupo Indigena',
              id: 'uncontrolled-native',
              
            }}
          >
            <option value={0}>No</option>
            <option value={2}>aguacateco</option>
            <option value={3}>etc</option>
            <option value={3}>LOASDK KASD</option>
          </NativeSelect>
        </FormControl>
      </Box>
    );
  }
  export const SelectInputLenguaIndigena=() =>{
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native" >
          Lengua Indigena
          </InputLabel>
          <NativeSelect
            defaultValue={0}
            inputProps={{
              name: 'Lengua Indigena',
              id: 'uncontrolled-native',
              
            }}
          >
            <option value={1}>mixte</option>
            <option value={2}>tolteco</option>
            <option value={3}>etc</option>
          </NativeSelect>
        </FormControl>
      </Box>
    );
  }

  export const SelectInputEntidadFederativ=() =>{
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native" >
          Entidad Federativa
          </InputLabel>
          <NativeSelect
            defaultValue={0}
            inputProps={{
              name: 'Entidad Federativa',
              id: 'uncontrolled-native',
              
            }}
          >
            <option value={1}>Tabasco</option>
            <option value={2}>Puebla</option>
            <option value={3}>Guerrero</option>
          </NativeSelect>
        </FormControl>
      </Box>
    );
  }

  export const SelectInputInstitucionEdu=() =>{
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native" >
          Institución educativa
          </InputLabel>
          <NativeSelect
            defaultValue={0}
            inputProps={{
              name: 'Institucion edu',
              id: 'uncontrolled-native',
              
            }}
          >
            <option value={1}>15619-Colegio Nacional</option>
            <option value={2}>2859-colegio </option>
            <option value={3}>52333-Upc</option>
          </NativeSelect>
        </FormControl>
      </Box>
    );
  }
  export const SelectInputEspecialidad=() =>{
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native" >
          Especialidad
          </InputLabel>
          <NativeSelect
            defaultValue={0}
            inputProps={{
              name: 'Especialidad',
              id: 'uncontrolled-native',
              
            }}
          >
            <option value={1}>FISICO-MATEMATICAS</option>
            <option value={2}>OTROS </option>
            <option value={3}>BACHILLERATO GENERAL</option>
          </NativeSelect>
        </FormControl>
      </Box>
    );
  }
  export const SelectInputEstado=() =>{
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native" >
          Estado
          </InputLabel>
          <NativeSelect
            defaultValue={0}
            inputProps={{
              name: 'estado',
              id: 'uncontrolled-native',
              
            }}
          >
            <option value={1}>Tabasco</option>
            <option value={2}>Sinaloa</option>
            <option value={3}>Sonora</option>
          </NativeSelect>
        </FormControl>
      </Box>
    );
  }
  export const SelectInputMunicipio=() =>{
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native" >
          Especialidad
          </InputLabel>
          <NativeSelect
            defaultValue={0}
            inputProps={{
              name: 'Municipio',
              id: 'uncontrolled-native',
              
            }}
          >
            <option value={1}>Paraiso</option>
            <option value={2}>Nacajuca</option>
            <option value={3}>Frontera</option>
          </NativeSelect>
        </FormControl>
      </Box>
    );
  }
  export const SelectInputLocalidad=() =>{
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native" >
          Especialidad
          </InputLabel>
          <NativeSelect
            defaultValue={0}
            inputProps={{
              name: 'localidad',
              id: 'uncontrolled-native',
              
            }}
          >
            <option value={1}>chiltepec</option>
            <option value={2}>jndsg </option>
            <option value={3}>mdysu</option>
          </NativeSelect>
        </FormControl>
      </Box>
    );
  }

  export const SelectInputPeriodoescolar=() =>{
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native" >
          Período Escolar
          </InputLabel>
          <NativeSelect
            defaultValue={0}
            inputProps={{
              name: 'Periodo esc',
              id: 'uncontrolled-native',
              
            }}
          >
            <option value={1}>-Seleccione periodo-</option>
            <option value={2}>oasmdoad </option>
            <option value={3}>loaohe tegsgg</option>
            <option value={3}>ñpsoelrubs dysye</option>
            <option value={3}>qwfps psas</option>
          </NativeSelect>
        </FormControl>
      </Box>
    );
  }

  export const SelectInputserviciomedico=() =>{
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native" >
          Servicio Médico
          </InputLabel>
          <NativeSelect
            defaultValue={0}
            inputProps={{
              name: 'servicio medico',
              id: 'uncontrolled-native',
              
            }}
          >
            <option value={1}>pemex</option>
            <option value={2}>imss</option>
            <option value={3}>isste</option>
          </NativeSelect>
        </FormControl>
      </Box>
    );
  }
  export const SelectInputtiposangre=() =>{
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native" >
          Tipo de sangre
          </InputLabel>
          <NativeSelect
            defaultValue={0}
            inputProps={{
              name: 'tipo sangre',
              id: 'uncontrolled-native',
              
            }}
          >
            <option value={1}>a+</option>
            <option value={2}>b+</option>
            <option value={3}>c</option>
          </NativeSelect>
        </FormControl>
      </Box>
    );
  }
  export const SelectInputDiscapacidad=() =>{
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native" >
          Discapacidad
          </InputLabel>
          <NativeSelect
            defaultValue={0}
            inputProps={{
              name: 'Discapacidad',
              id: 'uncontrolled-native',
              
            }}
          >
            <option value={1}>si</option>
            <option value={2}>no</option>
            <option value={3}>leve</option>
          </NativeSelect>
        </FormControl>
      </Box>
    );
  }
  export const SelectInputBeca=() =>{
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native" >
          Beca
          </InputLabel>
          <NativeSelect
            defaultValue={0}
            inputProps={{
              name: 'beca',
              id: 'uncontrolled-native',
              
            }}
          >
            <option value={1}>Beca de jovenes escribiendo el futuro</option>
            <option value={2}>no</option>
            <option value={3}>leve</option>
          </NativeSelect>
        </FormControl>
      </Box>
    );
  }