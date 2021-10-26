import axios from 'axios.config';

const get = async () => axios.get(
  '/articles',
);

export default get;
