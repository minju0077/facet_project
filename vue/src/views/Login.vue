<script setup>
import { reactive } from 'vue'
import api from '@/api/user'
import { useRouter } from 'vue-router'

const router = useRouter()

const loginForm = reactive({
  name: '',
  password: '',
})
import useAuthStore from '@/stores/useAuthStore'

const authStore = useAuthStore()
const login = async () => {
  const res = await api.login(loginForm)
  console.log(loginForm.name, loginForm.password)

  if (res.status == 200) {
    // 보안상 안전하지 않은 방식이라 실무에서는 절대 사용 안함
    // localStorage.setItem('ATOKEN', res.data.token)
    authStore.login(JSON.stringify(res.data))
    router.push({name:'wishlist'})
  } else {
    alert('아이디와 비밀번호를 확인해보세요.')
  }
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen py-16 px-6">
    <div class="premium-card w-full max-w-[540px] rounded-3xl p-10 md:p-16">
      <!-- Logo & Header -->
      <RouterLink :to="{name: 'Main_auction'}" class="text-center mb-14">
        <h1
          class="text-3xl font-bold text-[#A39382] letter-spacing-huge uppercase mb-4 cursor-pointer"
        >Facet
        </h1>
        <div class="h-[1px] w-12 bg-[#A39382] mx-auto mb-6"></div>
        <h2 class="text-xl font-light font-serif-luxury italic text-[#1a1a1a] mb-2">
          Welcome Back
        </h2>
        <p class="text-gray-400 text-[13px] font-light">당신의 소중한 아카이브에 접속하세요</p>
      </RouterLink>

      <form class="space-y-7">
        <!-- Email Field -->
        <div class="group">
          <label
            class="block text-[10px] font-bold uppercase tracking-[0.2em] mb-3 text-gray-400 group-focus-within:text-[#A39382] transition-colors"
            >Email Address</label
          >
          <input
            v-model="loginForm.name"
            type="email"
            placeholder="example@facet.com"
            class="w-full input-style rounded-lg px-5 py-4 text-sm placeholder:text-gray-300"
          />
        </div>

        <!-- Password Field -->
        <div class="group">
          <div class="flex justify-between items-center mb-3">
            <label
              class="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 group-focus-within:text-[#A39382] transition-colors"
              >Security Password</label
            >
          </div>
          <input
            v-model="loginForm.password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            class="w-full input-style rounded-lg px-5 py-4 text-sm placeholder:text-gray-300"
          />
        </div>

        <!-- Auto Login -->
        <div class="flex items-center space-x-2 pb-2">
          <input
            type="checkbox"
            id="remember"
            class="w-4 h-4 border-gray-200 rounded accent-[#A39382]"
          />
          <label for="remember" class="text-[12px] text-gray-500 cursor-pointer"
            >Stay signed in</label
          >
        </div>

        <!-- Buttons -->
        <div class="flex gap-3 mt-10">
          <RouterLink to="auction/Main_auction" class="btn-base btn-outline">
            <button @click="login()">Login</button></RouterLink
          >
          <RouterLink to="/signup" class="btn-base btn-outline">Join Now</RouterLink>
        </div>
      </form>
      <a
        href="#"
        class="text-[14px] text-gray-300 hover:text-[#A39382] transition italic font-serif-luxury"
        >Forgot Password?</a
      >
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;1,300&family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap');

:root {
  --accent-color: #1a1a1a; /* 배경과 대비되면서도 세련되게 어울리는 블랙/차콜 */
  --accent-hover: #404040;
  --bg-page: #f8f6f4;
  --text-main: #1a1a1a;
  --border-color: #e5e7eb;
}

body {
  background-color: var(--bg-page);
  color: var(--text-main);
  font-family: 'Noto Sans KR', sans-serif;
  word-break: keep-all;
}

.font-serif-luxury {
  font-family: 'Cormorant Garamond', serif;
}

.premium-card {
  background: #ffffff;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.03);
}

.input-style {
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.input-style:focus {
  border-color: #a39382; /* 포커스 시에는 기존 브랜드 컬러 유지 */
  outline: none;
  box-shadow: 0 0 0 4px rgba(163, 147, 130, 0.08);
}

/* 버튼 기본 스타일 */
.btn-base {
  flex: 1;
  font-weight: 700;
  padding: 1.25rem 0;
  border-radius: 0.5rem;
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
}

.btn-primary {
  background-color: var(--accent-color);
  color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  background-color: var(--accent-hover);
  transform: translateY(-2px);
}

.btn-outline {
  border: 1px solid #e5e7eb;
  color: #767676;
  background-color: transparent;
}

.btn-outline:hover {
  border-color: #a39382;
  color: #a39382;
  background-color: #fcfcfc;
}

.letter-spacing-huge {
  letter-spacing: 0.4em;
}
</style>
