<script setup></script>

<template>
  <footer class="bg-[#FBFBFB] border-t border-gray-100 pt-16 pb-10 px-6 md:px-10">
    <div class="max-w-[1440px] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-100 pb-16 mb-10">
        <div class="col-span-1">
          <div class="text-xl font-bold tracking-[0.2em] text-[#A39382] uppercase mb-6">
            <RouterLink to="/auction/Main_auction"> FACET </RouterLink>
          </div>
          <p class="text-[12px] text-gray-400 leading-relaxed font-light">
            프리미엄 주얼리 펀딩 및 경매 플랫폼 Facet입니다.<br />
            가치 있는 아름다움을 연결하여 당신만의 빛을 찾도록 돕습니다.
          </p>
        </div>

        <div>
          <h4 class="text-[11px] font-bold uppercase tracking-widest mb-6 text-gray-500">
            Service
          </h4>
          <ul class="text-[13px] space-y-3 text-gray-600">
            <li><a href="#" class="hover:text-black transition-colors">경매 가이드</a></li>
            <li><a href="#" class="hover:text-black transition-colors">펀딩 시작하기</a></li>
            <li><a href="#" class="hover:text-black transition-colors">멤버십 혜택</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-[11px] font-bold uppercase tracking-widest mb-6 text-gray-500">
            Support
          </h4>
          <ul class="text-[13px] space-y-3 text-gray-600">
            <li><a href="#" class="hover:text-black transition-colors">1:1 문의하기</a></li>
            <li><a href="#" class="hover:text-black transition-colors">이용약관 및 정책</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-[11px] font-bold uppercase tracking-widest mb-6 text-gray-500">
            Contact
          </h4>
          <p class="text-lg font-bold text-[#A39382]">1588-0000</p>
          <p class="text-[11px] text-gray-400 mt-2">평일 09:00 - 18:00 (점심 13:00 - 14:00)</p>
          <p class="text-[11px] text-gray-400">서울 동작구 보라매로 87</p>
        </div>
      </div>

      <div class="text-center text-[10px] text-gray-300 tracking-[0.5em] uppercase">
        © 2026 FACET. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;0,600;1,300&family=Cinzel:wght@400;700&family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap');

.font-serif-luxury {
  font-family: 'Cormorant Garamond', serif;
}
.luxury-font {
  font-family: 'Cinzel', serif;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.premium-gradient {
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(26, 26, 26, 0.2) 100%);
}

.progress-bar-shine {
  position: relative;
  overflow: hidden;
}
.progress-bar-shine::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shine 3s infinite;
}
@keyframes shine {
  to {
    left: 100%;
  }
}

.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}
.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

.hover-lift {
  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.4s ease;
}
.hover-lift:hover {
  transform: translateY(-12px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.08);
}

/* 탭 전환 애니메이션 */
#project-grid {
  transition: opacity 0.4s ease;
}
.tab-item-enter {
  animation: tabFadeIn 0.6s ease-out forwards;
}
@keyframes tabFadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.filter-btn.active {
  background-color: #000;
  color: #fff;
}

/* 로딩 애니메이션 (버튼용) */
.loading-dots::after {
  content: '...';
  animation: dots 1.5s steps(5, end) infinite;
}
@keyframes dots {
  0%,
  20% {
    color: rgba(0, 0, 0, 0);
    text-shadow:
      0.25em 0 0 rgba(0, 0, 0, 0),
      0.5em 0 0 rgba(0, 0, 0, 0);
  }
  40% {
    color: black;
    text-shadow:
      0.25em 0 0 rgba(0, 0, 0, 0),
      0.5em 0 0 rgba(0, 0, 0, 0);
  }
  60% {
    text-shadow:
      0.25em 0 0 black,
      0.5em 0 0 rgba(0, 0, 0, 0);
  }
  80%,
  100% {
    text-shadow:
      0.25em 0 0 black,
      0.5em 0 0 black;
  }
}
</style>
