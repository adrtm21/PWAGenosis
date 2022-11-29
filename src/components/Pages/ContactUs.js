import React, { useEffect } from 'react';
import axios  from 'axios';
import {AlumnosServive, API} from '../API/API';
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
    
    useEffect(() => {
        axios.get('http://192.168.1.67:8080/Control/alumnos/json/13747')
        .then(res => console.log(res.data)).catch(err => console.log(err))
    }, []);
    
    return (
        <div>
            AXIOS CON useEffect 
        </div>
    );
}


export default ContactUs;