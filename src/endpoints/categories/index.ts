import axios from 'axios.config';

const get = async () => axios.get(
  '/categories',
);

export default get;
