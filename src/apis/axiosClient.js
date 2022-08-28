import axios from "axios";
import queryString from "query-string";
import { Redirect } from "react-router-dom";

const baseURL = "https://ig-food-menus.herokuapp.com/";

const axiosClient = axios.create({
    baseURL: baseURL,
    headers: {
        "content-type": "application/json",
    },
    paramsSerializer: (params) => queryString.stringify(params)
});

axiosClient.interceptors.request.use((config) =>{
    return config
});

axiosClient.interceptors.response.use(
    (response) =>{
        return response.data
    },
    (error) => {
        if (error.status === 401) {
          // Xử lý log out: clear Storage, đẩy người dùng vào trang chu
          localStorage.clear();
          <Redirect to="/" />;
        }
        return Promise.reject(error);
      }
);

export default axiosClient;