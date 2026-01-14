<script setup>
import { reactive } from 'vue'
import api from '@/api/user'

const signupForm = reactive({
  name: '',
  email: '',
  password: '',
})

const signup = async () => {
  const res = await api.signup(signupForm)
  console.log('singup', res.data)
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen py-16 px-6 bg-[#f8f6f4]">
    <div class="premium-card w-full max-w-[540px] rounded-3xl p-10 md:p-16">
      <!-- Logo & Header -->
      <div class="text-center mb-14">
        <h1
          class="text-3xl font-bold text-[#A39382] letter-spacing-huge uppercase mb-4 cursor-pointer"
        >
          Facet
        </h1>
        <div class="h-[1px] w-12 bg-[#A39382] mx-auto mb-6"></div>
        <h2 class="text-xl font-light font-serif-luxury italic text-[#1a1a1a] mb-2">
          Create Your Archive
        </h2>
        <p class="text-gray-400 text-[13px] font-light">
          가치 있는 아름다움을 소유하는 첫 번째 단계
        </p>
      </div>

      <form class="space-y-7">
        <!-- Name Field -->
        <div class="group">
          <label
            class="block text-[10px] font-bold uppercase tracking-[0.2em] mb-3 text-gray-400 group-focus-within:text-[#A39382] transition-colors"
            >Collector Name</label
          >
          <input
            v-model="signupForm.name"
            type="text"
            placeholder="성함 또는 닉네임"
            class="w-full input-style rounded-lg px-5 py-4 text-sm placeholder:text-gray-300"
          />
        </div>

        <!-- Email Field with Check Button -->
        <div class="group">
          <label
            class="block text-[10px] font-bold uppercase tracking-[0.2em] mb-3 text-gray-400 group-focus-within:text-[#A39382] transition-colors"
            >Email Address</label
          >
          <div class="flex gap-2">
            <input
              v-model="signupForm.email"
              type="email"
              placeholder="example@facet.com"
              class="flex-grow input-style rounded-lg px-5 py-4 text-sm placeholder:text-gray-300"
            />
            <button
              type="button"
              class="px-6 py-4 bg-gray-50 text-[10px] font-bold text-gray-500 rounded-lg hover:bg-gray-100 transition border border-gray-100 uppercase tracking-widest"
            >
              Verify
            </button>
          </div>
        </div>

        <!-- Password Field -->
        <div class="group">
          <label
            class="block text-[10px] font-bold uppercase tracking-[0.2em] mb-3 text-gray-400 group-focus-within:text-[#A39382] transition-colors"
            >Security Password</label
          >
          <input
            v-model="signupForm.password"
            type="password"
            placeholder="8-16자 영문, 숫자 조합"
            class="w-full input-style rounded-lg px-5 py-4 text-sm placeholder:text-gray-300"
          />
        </div>

        <!-- Terms & Conditions -->
        <div class="space-y-4 pt-4 mt-8">
          <div class="flex items-start">
            <input type="checkbox" id="terms" class="mt-1 w-4 h-4 border-gray-200 rounded" />
            <label for="terms" class="ml-3 text-[12px] leading-relaxed text-gray-500">
              <span class="text-[#1a1a1a] font-medium underline cursor-pointer">이용약관</span> 및
              <span class="text-[#1a1a1a] font-medium underline cursor-pointer"
                >개인정보 처리방침</span
              >
              동의 (필수)
            </label>
          </div>
          <div class="flex items-start">
            <input type="checkbox" id="marketing" class="mt-1 w-4 h-4 border-gray-200 rounded" />
            <label for="marketing" class="ml-3 text-[12px] leading-relaxed text-gray-500">
              익스클루시브 경매 프리뷰 및 멤버십 혜택 알림 수신 (선택)
            </label>
          </div>
        </div>

        <!-- Submit Button -->
        <RouterLink to="/login">
          <button
            @click="signup()"
            type="submit"
            class="w-full btn-primary font-bold py-5 rounded-lg text-[11px] tracking-[0.3em] uppercase mt-8 shadow-lg"
          >
            Create Account
          </button>
        </RouterLink>
      </form>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;1,300&family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap');

:root {
  --accent-color: #a39382;
  --accent-hover: #8e7f70;
  --bg-light: #fbfbfb;
  --text-main: #1a1a1a;
  --border-color: #e5e7eb;
}

body {
  background-color: var(--bg-light);
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
  border-color: var(--accent-color);
  outline: none;
  box-shadow: 0 0 0 4px rgba(163, 147, 130, 0.08);
}

.btn-primary {
  background-color: var(--accent-color);
  color: white;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
  background-color: #1a1a1a;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

input[type='checkbox'] {
  accent-color: var(--accent-color);
}

.letter-spacing-huge {
  letter-spacing: 0.4em;
}
</style>
