import './pages.css'
import React, { useState } from 'react';
import { Tabs, Tab, Typography } from '@mui/material';


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
      <h1>BIENVENIDO:(NOMBRE DEL ALUMNO) </h1>
      <hr></hr>
      <form className="periodo">
        <label>
          PERIODO : <input type="text" name="name" />
        </label>
       <input type="submit" value="Submit" />
      </form>
      <hr></hr>
     
      <div style={{display: 'flex'}}>
        
        <Tabs orientation='vertical' scrollButtons='off' value= {index} onChange={onTabClicked}>
          <Tab label= 'first tab'/>
          <Tab label= 'second tab'/>
          <Tab label= 'third tab'/>
          <Tab label= 'fourd tab'/>
          <Tab label= 'five tab'/>
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
  </div>
  );
};

export default Horario;



