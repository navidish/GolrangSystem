import apiInstance from './apiServices';

export function getUserListApi() {
  return apiInstance.get('/users').then(({ data }) => data);
}
export function deleteUserApi(id) {
  return apiInstance.delete(`/users/${id}`).then(({ data }) => data);
}
