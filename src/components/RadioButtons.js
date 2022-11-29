import {
    Box,
    FormControl,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
} from '@mui/material'

export const RadioButtonSex =() =>{
 return (
  <Box>
  <FormControl>
    <FormLabel id='sexoactualizaciondatos'>
    Sexo
    </FormLabel>
    <RadioGroup name='sexoactualizacion'
    aria-labelledby='sexo-actualizacion-datos-group-label'>
        <FormControlLabel control={<Radio/>} label="Masculino" value='1'/>
        <FormControlLabel control={<Radio/>} label="Femenino" value= '0'/>
    </RadioGroup>
  </FormControl>
  </Box>
 )
}