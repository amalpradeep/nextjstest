import axios from "axios";
import configs from "../configs";

const request = axios.create({
  baseURL: configs.API_URL,
});


request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;