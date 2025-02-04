import axios from 'axios'
import { BASE_URL, showAxiosError } from '@/assets/js/utils'
const instance = axios.create({
  baseURL: BASE_URL
})
// Add a request interceptor
instance.interceptors.request.use(
  config =>
    // Do something before request is sent
    config,
  error => {
    // Do something with request error
    showAxiosError(error)
    return Promise.reject(error)
  }
)
// Add a response interceptor
instance.interceptors.response.use(
  response =>
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    response,
  error => {
    showAxiosError(error)
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)
export default instance
