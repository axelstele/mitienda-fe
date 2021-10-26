import axios from 'axios';
import customAxios from 'axios.config';

export const login = async (
  { email, password } : {email: string, password: string},
) => axios.post(
  'http://localhost:8000/api/login', { email, password },
);

export const logout = async () => customAxios.post(
  '/logout',
);

export const get = async (
  { company } : {company: string},
) => axios.get(
  `http://localhost:8000/api/get/${company}`,
);

export const register = async (
  {
    name, email, url, password,
  } : {name: string, email: string, url: string, password: string},
) => axios.post(
  'http://localhost:8000/api/register', {
    name, email, url, password,
  },
);
