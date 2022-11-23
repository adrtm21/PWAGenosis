/*import React from 'react';

export const Blog = () => {
    return(
        <div className='reinscrpcion'>
            <h1>REINSCRIPCION</h1>
        </div>
    );
}   
http://localhost:8080/Control/alumnos/json/data/filter?numeroControl=TE190112
*/

import React, { Component } from 'react';
import axios from 'axios';
import API from '../API/API';


class Blog extends Component{
  state = {
    alumno: []
  }
  async componentDidMount() {
    const res = await axios.get("http://localhost:8080/Control/alumnos/json/13747", {
      method : "GET",
      headers: {
        'content-type': 'application/json',
        'Accept' : 'application/json',
        'Access-Control-Max-Age': '360',
        'Access-Control-Allow-Credentials' : 'false' , 
        'Acces-Control-Allow-Origin': 'GET, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin'
      },
      auth: {
        username: "adrian",
        password: "fe01ce2a7fbac8fafaed7c982a04e229"
      },
      credentials: true
    });
    this.setState({alumno: res.data.data})
    console.log(this.state.alumno);
  }

  render () {
    return(
        <div>
           {this.state.alumno} 
        </div>
    )
  }
}



export default Blog;


