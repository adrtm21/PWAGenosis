import './pages.css'
import React, { useState } from 'react';
import { Tabs, Tab, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const Panel = (props) => (
  <div hidden={props.value !== props.index}>
   {props.value === props.index &&<Typography>{props.children}</Typography>}
  </div>
)

export const Horario = () => {

  const [index, setIndex] = useState(0);
  const onTabClicked = (event, index) =>{
    setIndex(index);
  }

  return(
  <div className="horario">
      <h6>BIENVENIDO:(Nombre) </h6>
      <hr></hr>
      <Box sx={{ minWidth: 60 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Periodo
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>ENERO-JULIO</option>
          <option value={20}>AGOSTO-DICIEMBRE</option>
        </NativeSelect>
      </FormControl>
    </Box>
      <hr></hr>
     
        
        <Tabs variant='scrollable' scrollButtons='on' orientation='Horizontal'  value= {index} onChange={onTabClicked}>
          <Tab label= 'Lunes'/>
          <Tab label= 'Martes'/>
          <Tab label= 'Miercoles'/>
          <Tab label= 'Jueves'/>
          <Tab label= 'Viernes '/>
        </Tabs>

        <Panel value= {index} index={0}>
          first tab
        </Panel>
        <Panel value= {index} index={1}>
          second tab
        </Panel>
        <Panel value= {index} index={2}>
          third tab
        </Panel>
        <Panel value= {index} index={3}>
          forth tab
        </Panel>
        <Panel value= {index} index={4}>
          five tab
        </Panel>

  </div>

  );
};

export default Horario;



