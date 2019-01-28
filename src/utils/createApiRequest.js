import axios from 'axios';

const apiPath = 'http://127.0.0.1:8000/';

export default function (path, options = {}){
    return axios({
        url: apiPath + path,
        ...options
    })
}