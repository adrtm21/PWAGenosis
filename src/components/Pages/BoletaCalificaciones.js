import './pages.css';
import React, { useState } from 'react';
import { Tabs, Tab, Typography } from '@mui/material';

const Panel = (props) => (
   <div hidden={props.value !== props.index}>
    {props.value === props.index &&<Typography>{props.children}</Typography>}
   </div>
)

export const BoletaCalificaciones = ()=> {

  const [index, setIndex] = useState(0);
  const onTabClicked = (event, index) =>{
    setIndex(index);
  }

    return( 
      <div>
        
        <Tabs variant='scrollable' value= {index} onChange={onTabClicked}>
          <Tab label= 'first tab'/>
          <Tab label= 'second tab'/>
          <Tab label= 'third tab'/>
          <Tab label= 'fourd tab'/>
          <Tab label= 'five tab'/>
        </Tabs>

        <Panel value= {index} index={0}>
         Calificacion
        </Panel>
        <Panel value= {index} index={1}>
          muestra
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
}