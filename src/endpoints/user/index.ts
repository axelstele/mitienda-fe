import axios from 'axios';

export const login = async (
  { email, password } : {email: string, password: string},
) => axios.post(
  'http://localhost:8000/api/login', { email, password },
);

export const get = async (
  { company } : {company: string},
) => axios.get(
  `http://localhost:8000/api/get/${company}`,
);

export const register = async (
  { name, email, password } : {name: string, email: string, password: string},
) => axios.post(
  'http://localhost:8000/api/register', { name, email, password },
);
