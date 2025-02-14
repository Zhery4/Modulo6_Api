import axios from 'axios';

//Ejercicio 1

//const apiUrl = 'https://rickandmortyapi.com/api';

//Ejercicio 2
const apiUrl = 'http://localhost:3000/api';

export const getRequests = async (url: string, params?: any) => {
  const response = await axios.get(`${apiUrl}/${url}`);
  return await response.data;
};

export const postRequests = async (url: string, body: any) => {
  const response = await axios.post(`${apiUrl}/${url}`, body);
  return await response.data;
};

export const putRequests = async (url: string, body: any) => {
  const response = await axios.put(`${apiUrl}/${url}`, body);
  return await response.data;
};
