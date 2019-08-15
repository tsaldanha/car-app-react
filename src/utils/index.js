import axios from 'axios';

let Request = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
      'Content-Type': 'application/json'
    }
});

export default Request;