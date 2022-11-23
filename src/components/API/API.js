import axios from 'axios';

export class AlumnosServive {
  baseUrl = "http://localhost:8080/Control/alumnos/json/";

  async getAll(){
    const res = await axios.get(this.baseUrl + "13747");
    return res.data;
  }
}

export default AlumnosServive;