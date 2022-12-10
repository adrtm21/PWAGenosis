import axios from "axios";

const API_URL = "http://localhost:8080/Control/";


const login = (user, password) => {
  return axios
    .post(API_URL + "tokens/user", {
      
    },{
    header:{
      'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      
    },
    params:{
      user,
      password,
    }
    }
      )
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log(response.data)
      return response.data;
      
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  login,
  logout,
  getCurrentUser,
};

export default AuthService;