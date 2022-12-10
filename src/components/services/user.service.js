import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/Control/token/";


const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};


const UserService = {
  getPublicContent,
  getUserBoard,
};

export default UserService;