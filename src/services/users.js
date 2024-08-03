import apiInstance from './apiServices';

export async function getUserListApi() {
  return await apiInstance.get('/users').then(({ data }) => data);
}
export async function deleteUserApi(id) {
  return await apiInstance.delete(`/users/${id}`).then(({ data }) => data);
}
export async function createUserApi(data) {
  return await apiInstance.post(`/users`, { data }).then(({ data }) => data);
}

export async function getUserApi(id) {
  return await apiInstance.get(`/users/${id}`).then(({ data }) => data);
}
export async function editUserAPi(data) {
  return await apiInstance
    .put(`/users/${data.id}`, { data })
    .then(({ data }) => data);
}
