import axios from "axios"
import { environment } from "./Enviroment"

const instance = axios.create({
    baseURL: environment.endpointApi
})

instance.interceptors.request.use(
     (config) => {

        const token = localStorage.getItem("token");
        if (token) {
            config.headers["x-access-token"] = token;
        }

        return config;
    },
   (error) => {
        // Do something with request error
        console.log("hola")
        return Promise.reject(error);
    }
);

export default instance