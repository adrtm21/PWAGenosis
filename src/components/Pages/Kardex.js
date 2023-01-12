import React, { useState, useEffect } from 'react';
import '../Pages/pages.css';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AuthService from '../services/auth.service';
/**  
 * Card Complex Interaction
 * Mui material
 */
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/**
 * expanded card
 */
//import Collapse from 'antd';




/**
 * CARD
 */
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

// PARA LOS SEMESTRES
//const { Panel } = Collapse;

export const Kardex = () => {


  const currentUser = AuthService.getCurrentUser();

  const API_URL= 'http://localhost:8080/Control/';
  //**  PETICION A LA API */
  const [data, setData ] = useState([]);


  useEffect(() => {

      axios.get(API_URL + 'kardex/modificacion/json/alumno/' + currentUser.userId, { headers:{ 'Authorization' : 'Bearer ' + currentUser.token}})
      .then(res => {
          console.log("Getting from :::", res.data)
          setData(res.data)
      }).catch(err => console.log(err))
  }, []);

 // const keys = Object.keys(data.alumnosCalificaciones);

  /**
   * 
   */
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    const onChange = (key) => {
      console.log(key);
    };

  return ( 
    <>
    <br></br>
    <Card sx={{ maxWidth: 400 }} align='center'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="info">
            I
          </Avatar>
        }

        title={currentUser.userName }
        subheader={data.alumno?.ofertaEducativa.carrera} 

      />
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent align="left">
          <Typography variant='subtitle2'>Numero de Control : {data.alumno?.numeroControl}</Typography>
          <Typography variant='subtitle2'>Plan de Estudios : {data.alumno?.planEstudio.clave}</Typography>
          <Typography variant='subtitle2'>Especialidad : {data.alumno?.especialidad.especialidad}</Typography>
          <Typography variant='subtitle2'>Estatus : {data.alumno?.estatus.estatus}</Typography>
        </CardContent>
        <CardContent align="left">
          <Typography variant='subtitle2'>Creditos Totales :{data.alumno?.alumnoDetalle.creditosTotales}</Typography>
          <Typography variant='subtitle2'>Asignaturas Totales :{data.alumno?.alumnoDetalle.asignaturasTotales}</Typography>
          <Typography variant='subtitle2'>Asignaturas aprobadas :{data.alumno?.alumnoDetalle.asignaturaAprobadas}</Typography>
          <Typography variant='subtitle2'>Promedio con reprobadas :{data.alumno?.alumnoDetalle.promedioReprobadas}</Typography>
          <Typography variant='subtitle2'>Porcentaje de Avance :{data.alumno?.alumnoDetalle.porcentajeAvanceCreditos}</Typography>
          <Typography variant='subtitle2'>Creditos Cursados :{data.alumno?.alumnoDetalle.creditosCursados}</Typography>
          <Typography variant='subtitle2'>Asignaturas cursadas :{data.alumno?.alumnoDetalle.asignaturasCursadas}</Typography>
          <Typography variant='subtitle2'>Asignaturas reprobadas :{data.alumno?.alumnoDetalle.asignaturasReprobadas}</Typography>
          <Typography variant='subtitle2'>Promedio sin reprobadas :{data.alumno?.alumnoDetalle.promedio}</Typography>
          <Typography variant='subtitle2'>Periodo : {data.alumno?.alumnoPeriodo.periodo}</Typography>
        </CardContent>
      </Collapse>
    </Card>
    <br></br>
    <hr></hr>
    
    <br></br>
    <hr></hr>
    {/**<Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header="This is panel header 1" key="1">
        <p>HOLA 1</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>HOLA 2</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>HOLA 3</p>
      </Panel>
    </Collapse>
      */}


    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center' colSpan={7}>ASIGNATURAS CURSADAS</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="right">Clave</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Creditos</TableCell>
            <TableCell align="right">Calificacion</TableCell>
            <TableCell align="right">Tipo Calificacion</TableCell>
            <TableCell align="right">Periodo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.alumnosCalificaciones?.map((row, key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {key+1}
              </TableCell>
              <TableCell align="center">
                {row.asignatura.clave}
               </TableCell>
              <TableCell align="center">
                {row.asignatura.asignatura}
              </TableCell>
              <TableCell align="center">
                {row.asignatura.creditos}
              </TableCell>
              <TableCell align="center">
                {row.calificacion}
              </TableCell>
              <TableCell align="center">
                {row.calificacionBase.calificacionBase}
              </TableCell>
              <TableCell align="center">
                {row.periodoEscolar.customPeriodo}, {row.periodo}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <br></br>
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center' colSpan={4}>ASIGNATURAS CURSANDO</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="right">Clave</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Creditos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.alumnosAsignaturas?.map((row, key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {key+1}
              </TableCell>
              <TableCell align="center">
                {row.asignatura.clave}
               </TableCell>
              <TableCell align="center">
                {row.asignatura.asignatura}
              </TableCell>
              <TableCell align="center">
                {row.asignatura.creditos}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br></br>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center' colSpan={4}>ASIGNATURAS POR CURSAR</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="right">Clave</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Creditos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.alumnosAsignaturasOtros?.map((row, key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {key+1}
              </TableCell>
              <TableCell align="center">
                {row.asignatura.clave}
               </TableCell>
              <TableCell align="center">
                {row.asignatura.asignatura}
              </TableCell>
              <TableCell align="center">
                {row.asignatura.creditos}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     
    <br></br>
    </>
  );
}

export default Kardex;