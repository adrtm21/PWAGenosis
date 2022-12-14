import './pages.css'

/*    Imports scroll dias    */
import React, { useState } from 'react';
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



const Panel = (props) => (
  <div hidden={props.value !== props.index}>
   {props.value === props.index &&<Typography>{props.children}</Typography>}
  </div>
)

/* FUNCIONES DE LA TABLA  */
function createData(name, dias) {
  return { name, dias};
}

const rows = [
  createData('Materia 1', 159),
  createData('Materia 2', 237),
  createData('Materia 3', 262),
  createData('Materia 4', 305),
  createData('Materia 5', 356),
  createData('Materia 6', 356),
  createData('Materia 7', 356),
];

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

export const Horario = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <main>
      <div className="horario">
        <h6>BIENVENIDO:(Nombre) </h6>
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
          </Tabs>
        </Box>
        

            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>
               <TabPanel value={value} index={0}>
                LUNES 
                {row.dias}
                </TabPanel>
                <TabPanel value={value} index={1}>
                MARTES
                </TabPanel>
                <TabPanel value={value} index={2}>
                MIERCOLES
                </TabPanel>
                <TabPanel value={value} index={3}>
                JUEVES
                </TabPanel>
                <TabPanel value={value} index={4}>
                VIERNES
                </TabPanel>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     </TableContainer>
      
    </main>
  );
};

export default Horario;



