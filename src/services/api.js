import axios from 'axios';

import {SERVER_MOBILE_HOST} from '../../environment';

const api = axios.create({
  baseURL: SERVER_MOBILE_HOST ,
})
export default api;