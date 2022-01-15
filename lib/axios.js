const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:3001/',
  //   baseURL: 'http://ec2-13-233-199-161.ap-south-1.compute.amazonaws.com:3001/',
});

export default instance;
