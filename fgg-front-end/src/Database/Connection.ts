import axios from "axios";
import http from "http";
import cors from 'cors';

const options: cors.options={
    origin: "http://localhost:8080"
}

const instance = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-type": "application/json"
    }
});

export class Connection{
    getAB_ATTRIBUTE(){
        instance.get('/ab_attribute')
            .then(response =>{
                console.log(response.data)
                return response.data
            })
    }
}

export default new Connection();