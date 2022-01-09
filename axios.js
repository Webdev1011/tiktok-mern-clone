import axios from "axios";

const instance = axios.create({
  baseURL: "https://mern-tiktok-backend-3458.herokuapp.com/",
});

export default instance;
