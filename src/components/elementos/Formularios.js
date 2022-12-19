import styled,{css} from "styled-components";
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";

const colores = {
    borde: "#0075FF",
    error: "#F66060",
    exito: "#1ed12d"
}

const Formulario = styled.form `
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 20px;
   position: relative;
   z-index: 10;

   @media (max-width: 800px){
    grid-template-columns: 1fr;
    padding-bottom: 25px;

   }
`;

const Label =styled.label`
font-size: 15px;
display: block;
font-weight: 700;
padding: 15px;
min-height: 40px;
cursor: pointer;
color: black;
font-style:var()

 ${props => props.valido === 'false' && css`
 color: ${colores.error};
 `}
`;

const GrupoInput = styled.div`
position: relative;
z-index: 90;
`;

const Input = styled.input`
width: 100%;
background: #fff;
border-radius: 3px;
display: grid;
height: 45px;
line-height: 45px;
padding: 0 48px 0 18px;
transition: .3s ease all;
border: 3px solid transparent;

::placeholder{
    color: black;
}


&:focus {
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
}

${props => props.valido === 'true' && css`
border: 3px solid transparent;
`}

${props => props.valido === 'false' && css`
border: 3px solid ${colores.error} !important;
`}
`;

const LeyendaError = styled.p`
font-size: 12px;
margin-bottom: 0;
color: ${colores.error};
display: none;
${props => props.valido === 'true' && css`
 display: none;
`}

${props => props.valido === 'false' && css`
display: block;
`}

`;

const IconoValidacion = styled(FontAwesomeIcon)`
position: absolute;
right: 10px;
bottom: 14px;
z-index: 100;
font-size: 16px;
 opacity: 0;

 ${props => props.valido === 'false' && css`
opacity: 1;
color: ${colores.error};
`}

${props => props.valido === 'true' && css`
opacity: 1;
color: ${colores.exito};
`}


`;

const ContenedorTerminos = styled.div`
grid-column: span 2;

input {
    margin-right: 10px;
}

@media (max-width: 800px){
    grid-column: span 1;
}

`;

const ContenedorBotonActualizar = styled.div`
padding-top: 45px;
padding-bottom: 35px;
display: flex;
justify-content: center;

`;

const ContenedorBotonCentrado = styled.div`
display: inline-flex;
justify-content: space-between;

`;

const Botonenviar = styled.button`
height: 45px;
line-height: 45px;
padding-left: 24px;
width: 30%;
background: blue;
color: #fff;
font-weight: bold;
border: none;
border-radius: 3px;
cursor: pointer;
transition:.1s ease all;

&:hover {
    box-shadow: 3px 0px 30px rgba(163,163,163, 1);
}
`;

const Botonactualizar = styled.button`
height: 45px;
line-height: 45px;
width: 40%;
background: black;
color: #fff;
font-weight: bold;
border: none;
border-radius: 3px;
cursor: pointer;
transition:.1s ease all;

&:hover {
    box-shadow: 3px 0px 30px rgba(163,163,163, 1);
}
`;
const Botoncancelar = styled.button`
height: 45px;
padding-left: 16px;
line-height: 45px;
width: 30%;
background: red;
color: #fff;
font-weight: bold;
border: none;
border-radius: 3px;
cursor: pointer;
transition:.1s ease all;

&:hover {
    box-shadow: 3px 0px 30px rgba(163,163,163, 1);
}
`;


const MensajeExito = styled.p`
font-size: 14px;
color: ${colores.exito};
`;

const MensajeError = styled.div`
height: 45px;
line-height: 45px;
background: #F66060;
padding: 0px 15px;
border-radius: 3px;
grid-column: span 2;
p{
    margin: 0;
}
b{
    margin-left: 10px;
}
`;

export {Formulario,
     Label,
     GrupoInput,
     Input,
     LeyendaError,
     IconoValidacion,
     ContenedorTerminos,
     ContenedorBotonCentrado,
     Botonactualizar,
     Botoncancelar,
     Botonenviar,
     MensajeError,
     MensajeExito,
     ContenedorBotonActualizar
    };