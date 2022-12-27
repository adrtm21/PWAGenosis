import './pages.css'

/*    Imports scroll dias    */
import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
/*  imports table */
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AuthService from '../services/auth.service';
import axios from 'axios';

const Panel = (props) => (
  <div hidden={props.value !== props.index}>
   {props.value === props.index &&<Typography>{props.children}</Typography>}
  </div>
)



/*   FUNCIONES TABLAS DENTRO DE... */
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const BoletaCalificaciones = () => {

  const currentUser = AuthService.getCurrentUser();

  const API_URL= ' http://localhost:8080/Control/';
  //**  PETICION A LA API */
  const [data, setData ] = useState([]);


  useEffect(() => {

      axios.get(API_URL + 'boleta/calificaciones/json/115/' + currentUser.userId, { headers:{ 'Authorization' : 'Bearer ' + currentUser.token}})
      .then(res => {
          console.log("Getting from :::", res.data.alumnosAsignaturas)
          setData(res.data.alumnosAsignaturas)
      }).catch(err => console.log(err))
  }, []);


  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  var ES = {};
  //const keys = Object.keys(data);
  /*
  <li>
        {
          //keys.forEach(key=> {
            data[key]?.map((bit)=> (
             console.log(bit.asignatura.asignatura)
             //<h1>{bit.asignatura.asignatura}</h1>

            ))
          //})
        }
        
        </li>*/
  
  return(
    <main>
      <div className="horario">
        <h6>{currentUser.userName}</h6>
        {
             data?.map((bit) => (
              ES = Math.max(bit.calificaciones.length)
              
              ))
             
            }
            
        <hr></hr> 
      </div>


      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Materias</TableCell>
            <TableCell align="center">
            <Box
              sx={{
              flexGrow: 1,
              maxWidth: { xs: 180, sm: 180 },
              bgcolor: 'background.paper',
            }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="visible arrows tabs example"
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                '&.Mui-disabled': { opacity: 0.3 },
              },
            }}
            >
            
           
            <Tab label="ES1" {...a11yProps(0)} />
            <Tab label="ES2" {...a11yProps(1)}/>
            <Tab label="ES3" {...a11yProps(2)}/>
            <Tab label="ES4" {...a11yProps(3)}/>
            <Tab label="ES5" {...a11yProps(4)}/>
            <Tab label="Calificacion" {...a11yProps(5)}/>
          </Tabs>
        </Box>
        

            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {
            //keys.forEach(key=> {
              data?.map((bit) => (
              <TableRow
                key={bit}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align='center' size='small' component="th" scope="row">
                <p>{bit.asignatura.asignatura}</p>
                </TableCell>
                <TableCell align='center' size='small'>
                  <TabPanel value={value} index={0}>
                  {bit.calificaciones[0]}                 
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                  {bit.calificaciones[1]}
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                  {bit.calificaciones[2]}
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                  {bit.calificaciones[3]}
                  </TabPanel>
                  <TabPanel value={value} index={4}>
                  {bit.calificaciones[4]}
                  </TabPanel>
                  <TabPanel value={value} index={5}>
                  {bit.calificaciones.length}
                  </TabPanel>
                </TableCell>
              </TableRow>
              )) // Cierre de llaves del map()
            //})
          }
        </TableBody>
      </Table>
     </TableContainer>
      
    </main>
  );
};

export default BoletaCalificaciones;



