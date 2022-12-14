import React, { useEffect, useState } from 'react';
import axios  from 'axios';
import  Component  from 'react';
/*
export default class ContactUs extends Component{
    constructor(){
        super();
        this.state = {};
        this.AlumnosServive = new AlumnosServive();
    }

    componentDidMount(){
        this.AlumnosServive.getAll.then(data =>{
            console.log(data);
        })
    }

    render(){
        return(
            <h1>HELLO</h1>
        )
    }
}*/

function ContactUs(){
    
    const [data, setData ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/Control/alumnos/json/13747')
        .then(res => {
            console.log("Getting from :::", res.data)
            setData(res.data)
        }).catch(err => console.log(err))
    }, []);
    
    return (
        <div>
            AXIOS CON useEffect 
            <h4>{data.idAlumno}</h4>
        </div>
    );
}


export default ContactUs;