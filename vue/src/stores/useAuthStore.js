import { ref } from 'vue'
import { defineStore } from 'pinia'

const useAuthStore = defineStore('auth', () => {
  const isLogin = ref(false)

  const login = (userInfo) => {
    isLogin.value = true
    // 브라우제의 로컬 스토리지 안에 데이터를 저장
    localStorage.setItem('USERINFO', userInfo)
  }

  //  (5) 새로고침 눌러도 로그인 된 화면으로 보이게 하려면 각 페이지가 띄워질 때 해당 함수로 확인해보면 됨
  const checkLogin = () => {
    if (localStorage.getItem('USERINFO')) {
      isLogin.value = true
    }
    return isLogin.value
  }
  return { isLogin, checkLogin, login }
})

export default useAuthStore
