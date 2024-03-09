import apiInstance from './apiServices';

export function getUserListApi() {
  return apiInstance.get('/users').then(({ data }) => data);
}
export function deleteUserApi(id) {
  return apiInstance.delete(`/users/${id}`).then(({ data }) => data);
}
export function createUserApi(data) {
  return apiInstance.post(`/users`, { data }).then(({ data }) => data);
}

export function getUserApi(id) {
  return apiInstance.get(`/users/${id}`).then(({ data }) => data);
}
export function editUserAPi(data) {
  return apiInstance
    .put(`/users/${data.id}`, { data })
    .then(({ data }) => data);
}
