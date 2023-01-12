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
        <Box sx={{ p: 2 }}>
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

export const Horario = () => {

  const currentUser = AuthService.getCurrentUser();

  const API_URL= 'http://localhost:8080/Control/';
  //**  PETICION A LA API */
  const [data, setData ] = useState([]);


  useEffect(() => {

      axios.get(API_URL + 'alumnos/asignaturas/json/data/carga/horaria/115/' + currentUser.userId, { headers:{ 'Authorization' : 'Bearer ' + currentUser.token}})
      .then(res => {
          console.log("Getting from :::", res.data)
          setData(res.data)
      }).catch(err => console.log(err))
  }, []);


  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const keys = Object.keys(data);


  /*
  <li>
        {
          keys.forEach(key=> {
            data[key].map((bit)=>
             console.log(bit.horarios)
          
            )
          })
        }
        
        </li>
  */
  return(
    <main>
      <div className="horario">
        <h6>BIENVENIDO: {currentUser.userName}  </h6>
        <hr></hr> 
      </div>


      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>MATERIAS</TableCell>
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
        
            <Tab label="Lunes" {...a11yProps(0)} />
            <Tab label="Martes" {...a11yProps(1)}/>
            <Tab label="Miercoles" {...a11yProps(2)}/>
            <Tab label="Jueves" {...a11yProps(3)}/>
            <Tab label="Viernes" {...a11yProps(4)}/>
            <Tab label="Sabado" {...a11yProps(5)}/>
            <Tab label="Domingo" {...a11yProps(6)}/>
          </Tabs>
        </Box>
        

            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {
            //keys.forEach(key=> {
              data[keys]?.map((bit, key) => (
              <TableRow
                key={key}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align='center' size='small' component="th" scope="row">
                <p>{bit.asignatura.asignatura.replace("<br>", " ")}</p>
                </TableCell>
                <TableCell align='center' size='small'>
                  <TabPanel value={value} index={0}>
                  {bit.horarios[1]?bit.horarios[1].replace("<br>", " "):" ----:---- "}               
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                  {bit.horarios[2]?bit.horarios[2].replace("<br>", " "):" ----:----"}
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                  {bit.horarios[3]?bit.horarios[3].replace("<br>", " "):" ----:----"}
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                  {bit.horarios[4]?bit.horarios[4].replace("<br>", " "):" ----:----"}
                  </TabPanel>
                  <TabPanel value={value} index={4}>
                  {bit.horarios[5]?bit.horarios[5].replace("<br>", " "):" ----:----"}
                  </TabPanel>
                  <TabPanel value={value} index={5}>
                  {bit.horarios[6]?bit.horarios[6].replace("<br>", " "):" ----:----"}
                  </TabPanel>
                  <TabPanel value={value} index={6}>
                  {bit.horarios[0]?bit.horarios[0].replace("<br>", " "):" ----:----"}
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

export default Horario;



