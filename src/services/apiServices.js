import axios from 'axios';
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

const apiInstance = {
  get: api.get,
  post: api.post,
  delete: api.delete,
  put: api.put,
};
export default apiInstance;
