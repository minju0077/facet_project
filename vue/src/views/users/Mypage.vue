<script setup></script>

<template>
  <main class="max-w-7xl mx-auto py-16 px-6 lg:px-10">
    <nav class="text-[10px] text-gray-400 mb-10 uppercase tracking-[0.2em]">
      Home / <span class="text-black font-medium">My Page</span>
    </nav>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <!-- Left -->
      <aside class="lg:col-span-4 border border-gray-100 bg-white shadow-sm p-8">
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-full bg-gray-100 border border-gray-200"></div>
          <div>
            <p class="text-sm text-gray-400 uppercase tracking-[0.2em]">Member</p>
            <p class="text-xl font-medium text-black">Eunseo</p>
            <p class="text-xs text-gray-500 mt-1">level: Silver</p>
          </div>
        </div>

        <div class="mt-10 space-y-3 text-sm">
          <RouterLink
            to="/users/user_information"
            class="block py-3 px-4 border border-gray-100 hover:border-gray-200 transition"
          >
            내정보
          </RouterLink>

          <RouterLink
            to="/users/shipping"
            class="block py-3 px-4 border border-gray-100 hover:border-gray-200 transition"
          >
            주문/배송
          </RouterLink>

          <RouterLink
            to="/users/add_points"
            class="block py-3 px-4 border border-gray-100 hover:border-gray-200 transition"
          >
            입찰/낙찰
          </RouterLink>

          <RouterLink
            to="/users/wish_list"
            class="block py-3 px-4 border border-gray-100 hover:border-gray-200 transition"
          >
            위시리스트
          </RouterLink>

          <RouterLink
            to="/users/ask"
            class="block py-3 px-4 border border-gray-100 hover:border-gray-200 transition"
          >
            문의내역
          </RouterLink>
        </div>

        <button
          class="w-full mt-10 py-4 btn-outline font-bold text-[11px] tracking-[0.4em] uppercase"
        >
          Edit Profile
        </button>
      </aside>

      <!-- Right -->
      <section class="lg:col-span-8 space-y-10">
        <!-- Summary -->
        <div class="border border-gray-100 bg-white shadow-sm p-8">
          <h2 class="text-xs font-bold tracking-[0.5em] uppercase text-gray-400 mb-8">Overview</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="border border-gray-100 p-6">
              <p class="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-2">진행중 입찰</p>
              <p class="text-2xl font-bold accent-text">3</p>
            </div>
            <div class="border border-gray-100 p-6">
              <p class="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-2">낙찰</p>
              <p class="text-2xl font-bold text-black">1</p>
            </div>
            <div class="border border-gray-100 p-6">
              <p class="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-2">배송중</p>
              <p class="text-2xl font-bold text-black">1</p>
            </div>
            <div class="border border-gray-100 p-6">
              <p class="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-2">포인트</p>
              <p class="text-2xl font-bold text-black">12,300</p>
            </div>
          </div>
        </div>

        <!-- Recent Orders -->
        <div class="border border-gray-100 bg-white shadow-sm p-8">
          <div class="flex items-end justify-between mb-8">
            <h2 class="text-xs font-bold tracking-[0.5em] uppercase text-gray-400">
              Recent Orders
            </h2>
            <RouterLink to="/users/shipping" class="text-xs accent-text hover:underline"
              >전체보기</RouterLink
            >
          </div>

          <div class="space-y-4">
            <RouterLink
              to="order-detail.html"
              class="block border border-gray-100 hover:border-gray-200 transition p-6"
            >
              <div class="flex items-start justify-between gap-4">
                <div>
                  <p class="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-2">
                    Order BD-2026-0102-4821
                  </p>
                  <p class="text-lg font-medium text-black">[14K] 미니멀 다이아 반지</p>
                  <p class="text-sm text-gray-500 font-light mt-2">
                    낙찰가 ₩268,000 · 판매자 OceanGem Official
                  </p>
                </div>
                <div class="text-right">
                  <p class="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">status</p>
                  <p class="text-sm font-bold accent-text">배송 출발</p>
                </div>
              </div>
            </RouterLink>

            <div class="block border border-gray-100 p-6">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <p class="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-2">
                    Order BD-2026-0101-3110
                  </p>
                  <p class="text-lg font-medium text-black">[18K] 클래식 진주 목걸이</p>
                  <p class="text-sm text-gray-500 font-light mt-2">입찰 종료 · 미낙찰</p>
                </div>
                <div class="text-right">
                  <p class="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">status</p>
                  <p class="text-sm font-bold text-gray-500">종료</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RouterLink
            to="/users/ask"
            class="border border-gray-100 bg-white shadow-sm p-8 hover:border-gray-200 transition"
          >
            <p class="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3">Support</p>
            <p class="text-lg font-medium text-black">1:1 문의</p>
            <p class="text-sm text-gray-500 font-light mt-2">배송/결제/환불 문의</p>
          </RouterLink>

          <RouterLink
            to="/users/shipping"
            class="border border-gray-100 bg-white shadow-sm p-8 hover:border-gray-200 transition"
          >
            <p class="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3">Tracking</p>
            <p class="text-lg font-medium text-black">배송 조회</p>
            <p class="text-sm text-gray-500 font-light mt-2">상태를 한눈에</p>
          </RouterLink>
          <RouterLink
            to="policy.html"
            class="border border-gray-100 bg-white shadow-sm p-8 hover:border-gray-200 transition"
          >
            <p class="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3">Policy</p>
            <p class="text-lg font-medium text-black">반품/환불 규정</p>
            <p class="text-sm text-gray-500 font-light mt-2">절차와 조건 확인</p>
          </RouterLink>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Cormorant+Garamond:ital,wght@0,300;0,500;1,300&family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap');

:root {
  --accent-color: #a39382;
  --accent-hover: #8e7f70;
  --bg-light: #ffffff;
  --text-main: #1a1a1a;
  --text-soft: #3a3a3a;
  --border-color: #eeeeee;
  --chip-bg: #fbfaf9;
}

body {
  font-family: 'Noto Sans KR', sans-serif;
  background: var(--bg-light);
  color: var(--text-main);
  margin: 0;
  word-break: keep-all;
}

.luxury-font {
  font-family: 'Cinzel', serif;
}

.accent-text {
  color: var(--accent-color);
}

.accent-bg {
  background: var(--accent-color);
}

.border-accent {
  border-color: var(--accent-color);
}

.btn-outline {
  transition: all 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  background: transparent;
}

.btn-outline:hover {
  background: var(--accent-color);
  color: #fff;
  box-shadow: 0 10px 20px rgba(163, 147, 130, 0.18);
  transform: translateY(-2px);
}

/* ✅ 상단 네비 글자색/아이콘 톤 통일 + 더 눈에 띄게 */
.nav-link {
  color: #6b7280;
  /* gray-500 */
  transition: all 0.25s ease;
  position: relative;
  padding: 6px 0;
}

.nav-link:hover {
  color: var(--text-main);
}

.nav-link.active {
  color: var(--text-main);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 2px;
  background: var(--accent-color);
  border-radius: 2px;
  box-shadow: 0 6px 16px rgba(163, 147, 130, 0.25);
}

.icon-btn {
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(163, 147, 130, 0.35);
  background: #fff;
  color: var(--accent-color);
  border-radius: 9999px;
  transition: all 0.25s ease;
}

.icon-btn:hover {
  background: var(--accent-color);
  color: #fff;
  border-color: var(--accent-color);
  transform: translateY(-2px);
  box-shadow: 0 12px 22px rgba(163, 147, 130, 0.22);
}

.icon-badge {
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 18px;
  height: 18px;
  padding: 0 6px;
  border-radius: 9999px;
  background: var(--accent-color);
  color: #fff;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  box-shadow: 0 10px 18px rgba(163, 147, 130, 0.25);
}
</style>
