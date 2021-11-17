import Axios from 'axios';

export const randomUserAPi = Axios.create({
  baseURL: 'https://randomuser.me/api/',
});
