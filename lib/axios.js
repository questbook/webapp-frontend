const axios = require('axios');

const instance = axios.create({
  // baseURL: 'http://localhost:3001/',
  baseURL: 'http://backend.openquest.xyz/',
});

export default instance;
