<script setup></script>

<template>
  <!-- Hero & Ranking Section -->
  <section
    class="max-w-[1440px] mx-auto px-4 md:px-10 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-gray-50 pb-12"
  >
    <!-- [좌측] 메인 비주얼 슬라이더 -->
    <div
      class="lg:col-span-9 relative group h-[400px] md:h-[550px] overflow-hidden rounded-md shadow-sm"
    >
      <div id="hero-slider" class="relative w-full h-full">
        <img
          id="slider-img"
          src="https://images.unsplash.com/photo-1515562141207-7a18b5ce7142?auto=format&fit=crop&w=1500&q=80"
          class="w-full h-full object-cover fade-in"
          alt="Main Jewelry"
        />

        <div class="absolute inset-0 banner-gradient"></div>

        <div class="absolute bottom-10 left-10 text-white max-w-lg fade-in" id="slider-content">
          <h2
            id="slider-title"
            class="text-3xl md:text-5xl font-light font-serif-luxury leading-tight italic mb-4"
          >
            Eternal Radiance
          </h2>
          <p
            id="slider-desc"
            class="text-sm font-light text-gray-200 leading-loose mb-6 opacity-90"
          >
            역사적 가치를 지닌 빈티지 주얼리부터, 현대적 마스터피스까지 당신만의 빛을 찾으세요.
          </p>
          <div class="flex space-x-2">
            <span
              class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest"
              >Ongoing</span
            >
            <span class="px-3 py-1 bg-[#A39382] rounded-full text-[10px] uppercase tracking-widest"
              >Exclusive</span
            >
          </div>
        </div>
      </div>

      <div
        class="absolute bottom-6 right-10 flex items-center space-x-4 text-white text-[10px] tracking-widest z-10"
      >
        <span id="slider-counter">01 / 05</span>
        <div class="flex space-x-1">
          <button
            id="prev-btn"
            class="w-8 h-8 flex items-center justify-center bg-black/20 hover:bg-black/40 rounded-full transition-colors"
          >
            ←
          </button>
          <button
            id="next-btn"
            class="w-8 h-8 flex items-center justify-center bg-black/20 hover:bg-black/40 rounded-full transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </div>

    <!-- [우측] 실시간 랭킹 -->
    <div class="lg:col-span-3 flex flex-col">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-lg font-bold">실시간 랭킹</h3>
        <span class="text-[10px] text-gray-400">Live Ranking</span>
      </div>
      <div class="flex-1 flex flex-col justify-between space-y-4">
        <RouterLink
          :to="`/auction/auction_desc/${i}`"
          class="flex items-center space-x-3 group"
          v-for="i in [1, 2, 3, 4, 5]"
        >
          <span class="text-xl font-bold italic text-[#A39382] w-6">{{ i }}</span>
          <div class="flex-1">
            <p class="text-[13px] font-medium group-hover:underline line-clamp-1">
              티파니 빈티지 다이아몬드 링
            </p>
            <p class="text-[11px] text-[#A39382] font-bold">1,400% 달성</p>
          </div>
          <div class="w-12 h-12 rounded bg-gray-100 overflow-hidden shrink-0">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=100&q=80"
              class="w-full h-full object-cover"
              alt="Ring"
            />
          </div>
        </RouterLink>
      </div>
      <button
        class="w-full mt-6 py-3 bg-gray-50 text-[11px] text-gray-500 rounded-md hover:bg-gray-100 transition"
      >
        랭킹 전체보기
      </button>
    </div>
  </section>

  <!-- Categories -->
  <section class="max-w-[1440px] mx-auto py-10 px-4 md:px-10">
    <div
      class="flex items-center justify-between overflow-x-auto no-scrollbar pb-4 border-b border-gray-50 space-x-6 md:space-x-0"
    >
      <div class="flex flex-col items-center min-w-[80px] cursor-pointer group">
        <div
          class="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-2xl group-hover:border-[#A39382] border border-transparent transition-all shadow-sm"
        >
          💍
        </div>
        <span class="text-[11px] mt-3 font-medium text-gray-600">반지</span>
      </div>
      <div class="flex flex-col items-center min-w-[80px] cursor-pointer group">
        <div
          class="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-2xl group-hover:border-[#A39382] border border-transparent transition-all shadow-sm"
        >
          ✨
        </div>
        <span class="text-[11px] mt-3 font-medium text-gray-600">목걸이</span>
      </div>
      <div class="flex flex-col items-center min-w-[80px] cursor-pointer group">
        <div
          class="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-2xl group-hover:border-[#A39382] border border-transparent transition-all shadow-sm"
        >
          💎
        </div>
        <span class="text-[11px] mt-3 font-medium text-gray-600">귀걸이</span>
      </div>
      <div class="flex flex-col items-center min-w-[80px] cursor-pointer group">
        <div
          class="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-2xl group-hover:border-[#A39382] border border-transparent transition-all shadow-sm"
        >
          📿
        </div>
        <span class="text-[11px] mt-3 font-medium text-gray-600">팔찌</span>
      </div>
      <div class="flex flex-col items-center min-w-[80px] cursor-pointer group">
        <div
          class="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-2xl group-hover:border-[#A39382] border border-transparent transition-all shadow-sm"
        >
          ⌚
        </div>
        <span class="text-[11px] mt-3 font-medium text-gray-600">시계</span>
      </div>
      <div class="flex flex-col items-center min-w-[80px] cursor-pointer group">
        <div
          class="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-2xl group-hover:border-[#A39382] border border-transparent transition-all shadow-sm"
        >
          🔍
        </div>
        <span class="text-[11px] mt-3 font-medium text-gray-600">다이아</span>
      </div>
      <div class="flex flex-col items-center min-w-[80px] cursor-pointer group">
        <div
          class="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-2xl group-hover:border-[#A39382] border border-transparent transition-all shadow-sm"
        >
          🏺
        </div>
        <span class="text-[11px] mt-3 font-medium text-gray-600">빈티지</span>
      </div>
      <div class="flex flex-col items-center min-w-[80px] cursor-pointer group">
        <div
          class="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-2xl group-hover:border-[#A39382] border border-transparent transition-all shadow-sm"
        >
          🔮
        </div>
        <span class="text-[11px] mt-3 font-medium text-gray-600">원석</span>
      </div>
      <div class="flex flex-col items-center min-w-[80px] cursor-pointer group">
        <div
          class="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-2xl group-hover:border-[#A39382] border border-transparent transition-all shadow-sm"
        >
          🛠️
        </div>
        <span class="text-[11px] mt-3 font-medium text-gray-600">커스텀</span>
      </div>
    </div>
  </section>

  <!-- 추천 프로젝트 Grid -->
  <section class="max-w-[1440px] mx-auto py-12 px-4 md:px-10">
    <div class="flex justify-between items-end mb-8">
      <h2 class="text-2xl font-bold">인기 프로젝트</h2>
      <nav class="flex space-x-4 text-sm font-medium text-gray-400">
        <button class="text-black border-b-2 border-black">전체</button>
        <button class="hover:text-black">경매중</button>
        <button class="hover:text-black">펀딩중</button>
      </nav>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
      <!-- Project Card 1 -->
      <div class="group cursor-pointer flex flex-col h-full" v-for="num in [1, 2, 3, 4]">
        <div class="aspect-video overflow-hidden bg-gray-100 mb-4 relative rounded-md">
          <RouterLink :to="`/auction/auction_desc/${num}`">
            <img
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt="Jewelry"
            />
          </RouterLink>

          <div class="absolute top-3 left-3">
            <span
              class="bg-[#A39382] text-white px-2 py-0.5 text-[10px] font-bold rounded-sm uppercase"
              >Coming Soon</span
            >
          </div>
        </div>
        <div class="flex flex-col flex-grow">
          <!-- min-h-[48px]를 통해 제목이 1줄이어도 2줄 높이를 차지하게 하여 아래 요소들의 위치를 고정합니다 -->
          <h3
            class="text-md font-bold leading-snug group-hover:text-[#A39382] transition-colors line-clamp-2 min-h-[48px]"
          >
            Victoria Sapphire High Jewelry Necklace
          </h3>
          <p class="text-[12px] text-gray-400 mb-4">명품 주얼리 | Facet Collection</p>

          <!-- mt-auto를 통해 게이지바 세트가 항상 하단에 붙도록 합니다 -->
          <div class="mt-auto pt-2">
            <div class="w-full h-[3px] bg-gray-100 rounded-full overflow-hidden">
              <div class="w-[45%] h-full bg-[#A39382]"></div>
            </div>
            <div class="flex justify-between items-center mt-3">
              <div class="flex items-center space-x-2">
                <span class="text-red-500 font-bold text-lg">14일 남음</span>
                <span class="text-[13px] font-medium text-gray-400 italic">₩ 14,000,000</span>
              </div>
              <span class="text-[12px] text-gray-400">24명 참여</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-20">
      <button
        class="px-10 py-3 border border-gray-200 text-sm font-medium hover:bg-gray-50 transition rounded-md"
      >
        <RouterLink to="/auction/auction_list">프로젝트 더보기</RouterLink>
      </button>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;1,300&family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap');
/* Cinzel(로고용) 및 Noto Sans KR 폰트 추가 */
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Cormorant+Garamond:ital,wght@0,300;0,500;1,300&family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap');

body {
  font-family: 'Noto Sans KR', sans-serif;
  word-break: keep-all;
}

.font-serif-luxury {
  font-family: 'Cormorant Garamond', serif;
}

.luxury-font {
  font-family: 'Cinzel', serif;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.banner-gradient {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 60%);
}

/* 슬라이드 전환 애니메이션 */
.fade-in {
  animation: fadeIn 0.8s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0.3;
  }

  to {
    opacity: 1;
  }
}
</style>
