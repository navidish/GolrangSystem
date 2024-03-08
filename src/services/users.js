import apiInstance from './apiServices';

export function getUserListApi() {
  return apiInstance.get('/users').then(({ data }) => data);
}
