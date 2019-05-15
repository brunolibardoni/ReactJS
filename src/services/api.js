import axios from 'axios';

// buscando os produtos da API
const api = axios.create({baseURL: 'https://rocketseat-node.herokuapp.com/api'});

export default api;