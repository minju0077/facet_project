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

router.beforeEach((to, from, next) => {
  console.log('vue에서 링크를 이동할 때 매번 실행되는 함수')

  // 페이지를 이동할때, 탭에 나오는 title를 다르게 뜰 수 있게 설정
  document.title = to.meta.title

  // meta에 있는 requiresAuth 참이면
  if (to.meta.requiresAuth) {
    // 꼭 로컬스토리지에서 확인하는 방법 말고도 백엔드에서 확인하는 방법도 있음
    // 로그인한 사람인지 확인하고 안했으면

    // 브라우저에 저장 되어 있는 localStorage 에 USERINFO가 없다면
    if (localStorage.getItem('USERINFO') == null) {
      // 로그인 페이지로 이동 /
      // query는 주소에 ?를 사용해서 하는거 / {redirect : to.fullPath} 사용자를 로그인 페이지로 보내고 원래 가려고 했던 곳을 저장하여 로그인을 하면 갈 수 있도록 설정
      next({ name: 'login', query: { redirect: to.fullPath } })
    }
  }
  next()
})
export default api
