import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

api.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

api.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err)
);
const apiInstance = {
  get: api.get,
  post: api.post,
  delete: api.delete,
  put: api.put,
};
export default apiInstance;
