import axios from 'axios';
// create an axios instance
const service = axios.create({
  baseURL: 'http://47.112.201.72:9010',
  // baseURL: 'http://localhost:3000',
  timeout: 20000, // request timeout
  showToast: true
})
export default service
