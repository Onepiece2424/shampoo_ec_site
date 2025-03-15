import axios from 'axios';

export const setupAxiosHeaders = (accessToken, client, uid) => {
  axios.defaults.headers.common['access-token'] = accessToken;
  axios.defaults.headers.common['client'] = client;
  axios.defaults.headers.common['uid'] = uid;
};

export const createAPIInstance = (accessToken, client, uid) => {
  const headers = {
    'access-token': accessToken,
    'client': client,
    'uid': uid
  };

  const api = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  });

  return api;
};
