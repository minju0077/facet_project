import axios from 'axios'

const api = axios.create({
  // /api를 달고 오면 vite.config.js에 설정해 준것처럼 api를 때고 주소로 보내겠다
  // baseURL: 'http://192.168.23.31:8080',
  baseURL: '/api',
  timeout: 5000,
})

api.interceptors.request.use(
  (config) => {
    console.log('요청 보내기 전에 실행')
    return config
  },
  () => {
    console.log('요청 보낼 때 에러 발생')
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  (config) => {
    console.log('응답 받아서 화면에 띄우기 전에 실행')
    return config
  },
  () => {
    console.log('응답 받을 때 에러 발생')
    return Promise.reject(error)
  },
)


export default api
