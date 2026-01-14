<script setup></script>

<template class="overflow-x-hidden">
  <header class="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
    <div class="max-w-[1440px] mx-auto px-4 md:px-10 h-20 flex justify-between items-center">
      <div class="flex items-center space-x-12">
        <RouterLink to="/auction/Main_auction">
          <div
            class="luxury-font text-2xl font-bold tracking-[0.3em] text-[#A39382] uppercase cursor-pointer leading-none mt-[2px]"
          >
            Facet
          </div>
        </RouterLink>

        <nav class="hidden lg:flex items-center space-x-8 text-[14px] font-medium text-gray-500">
          <RouterLink to="/auction/Main_auction" class="text-black border-b-2 border-black py-1"
            >경매</RouterLink
          >
          <RouterLink to="/funding/main_funding" class="hover:text-black transition-colors py-1"
            >펀딩</RouterLink
          >
        </nav>
      </div>

      <div class="flex-1 max-w-md mx-8 hidden md:block">
        <div class="relative flex items-center">
          <span class="absolute left-4 text-gray-400 text-xs">🔍</span>
          <input
            type="text"
            placeholder="어떤 보석을 찾으시나요?"
            class="w-full bg-gray-50 border border-gray-100 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-[#A39382] transition-all placeholder:text-gray-300"
          />
        </div>
      </div>

      <div class="flex items-center space-x-6">
        <button
          class="hidden sm:block text-sm text-gray-500 hover:text-black transition-colors font-medium"
        >
          <RouterLink to="/login">로그인</RouterLink>
        </button>
        <div class="w-[1px] h-3 bg-gray-200 hidden sm:block"></div>
        <button
          class="hidden sm:block text-sm text-gray-500 hover:text-black transition-colors font-medium"
        >
          <RouterLink to="/signup">회원가입</RouterLink>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;0,600;1,300&family=Cinzel:wght@400;700&family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap');
</style>
