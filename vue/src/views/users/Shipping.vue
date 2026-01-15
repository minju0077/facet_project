<script setup></script>

<template>
  <main class="max-w-7xl mx-auto py-16 px-6 lg:px-10">
    <!-- Breadcrumb -->
    <nav class="text-[10px] text-gray-400 mb-10 uppercase tracking-[0.2em]">
      Home / My / <span class="text-black font-medium">Orders</span>
    </nav>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <!-- Left: My Side -->
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
            포인트 충전
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

        <!-- Orders Summary -->
        <div class="mt-10 border-t border-gray-100 pt-8">
          <p class="text-[10px] text-gray-400 uppercase tracking-[0.35em] mb-4">Orders Summary</p>
          <div class="grid grid-cols-3 gap-3">
            <div class="border border-gray-100 p-4 text-center">
              <p class="text-[10px] text-gray-400 uppercase tracking-[0.2em]">Total</p>
              <p class="text-lg font-bold accent-text mt-1">6</p>
            </div>
            <div class="border border-gray-100 p-4 text-center">
              <p class="text-[10px] text-gray-400 uppercase tracking-[0.2em]">Shipping</p>
              <p class="text-lg font-bold text-black mt-1">2</p>
            </div>
            <div class="border border-gray-100 p-4 text-center">
              <p class="text-[10px] text-gray-400 uppercase tracking-[0.2em]">Done</p>
              <p class="text-lg font-bold text-black mt-1">3</p>
            </div>
          </div>
        </div>
      </aside>

      <!-- Right: Orders -->
      <section class="lg:col-span-8 space-y-10">
        <!-- Title + Actions -->
        <div class="border border-gray-100 bg-white shadow-sm p-8">
          <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 class="text-2xl font-medium text-black">주문/배송</h1>
              <p class="text-sm text-gray-500 font-light mt-2">
                경매 낙찰 및 펀딩 참여 내역의 상태와 배송 현황을 확인할 수 있어요.
              </p>
            </div>

            <div class="flex items-center gap-2">
              <button class="btn-ghost px-4 py-3 text-[11px] font-bold uppercase tracking-[0.25em]">
                <i class="fa-regular fa-file-lines mr-2"></i>주문내역 다운로드
              </button>
              <button
                class="btn-outline px-4 py-3 text-[11px] font-bold uppercase tracking-[0.25em]"
              >
                <i class="fa-solid fa-location-dot mr-2"></i>배송지 관리
              </button>
            </div>
          </div>

          <!-- Filters Row -->
          <div class="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div class="flex items-center gap-2 flex-wrap">
              <button
                class="chip active px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em]"
                data-filter="all"
              >
                All
              </button>
              <button
                class="chip px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em]"
                data-filter="auction"
              >
                Auction
              </button>
              <button
                class="chip px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em]"
                data-filter="funding"
              >
                Funding
              </button>
              <button
                class="chip px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em]"
                data-filter="shipping"
              >
                배송중
              </button>
              <button
                class="chip px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em]"
                data-filter="done"
              >
                배송완료
              </button>
              <button
                class="chip px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em]"
                data-filter="issue"
              >
                이슈/문의
              </button>
            </div>

            <div class="flex items-center gap-3">
              <div class="relative">
                <i
                  class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[12px]"
                ></i>
                <input
                  id="search"
                  type="text"
                  placeholder="상품명/판매자/주문번호 검색"
                  class="w-[290px] bg-gray-50 border border-gray-100 rounded-full pl-9 pr-4 py-2 text-xs text-gray-800 focus:outline-none focus:border-[#A39382] transition-all"
                />
              </div>

              <select
                id="sort"
                class="bg-white border border-gray-100 rounded-full px-4 py-2 text-xs text-gray-700 focus:outline-none focus:border-[#A39382] transition-all"
              >
                <option value="recent">최근 주문순</option>
                <option value="status">상태순</option>
                <option value="priceDesc">금액 높은순</option>
                <option value="priceAsc">금액 낮은순</option>
              </select>
            </div>
          </div>
        </div>

        <!-- List -->
        <div class="space-y-4">
          <!-- Order 1 (Auction / Shipping) -->
          <div v-for="i in [1, 2, 3]">
            <article
              class="card p-6"
              data-type="auction"
              data-status="shipping"
              data-name="미니멀 다이아 반지"
              data-seller="OceanGem Official"
              data-order="BD-2026-0102-4821"
              data-price="268000"
            >
              <div class="flex items-start gap-5">
                <RouterLink to="order-detail.html" class="thumb w-24 h-24 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=240&q=80"
                    class="w-full h-full object-cover"
                    alt="order item"
                  />
                </RouterLink>

                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-2 flex-wrap">
                    <span class="badge">Auction</span>
                    <span class="badge badge-accent">Shipping</span>
                    <span class="badge">Order BD-2026-0102-4821</span>
                  </div>

                  <RouterLink to="order-detail.html" class="block">
                    <h3 class="text-lg font-medium text-black hover:accent-text transition">
                      [14K] 미니멀 다이아 반지
                    </h3>
                  </RouterLink>

                  <p class="text-sm text-gray-500 font-light mt-2">
                    낙찰가 <span class="font-medium text-black">₩268,000</span> · 판매자 OceanGem
                    Official
                  </p>

                  <div
                    class="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                  >
                    <div class="flex items-center gap-3 flex-wrap">
                      <button
                        class="btn-ghost px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em]"
                      >
                        <i class="fa-solid fa-truck mr-2"></i>배송 조회
                      </button>
                      <button
                        class="btn-outline px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em]"
                      >
                        <i class="fa-regular fa-file-lines mr-2"></i>주문 상세
                      </button>
                      <button
                        class="btn-ghost px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em]"
                      >
                        <i class="fa-regular fa-circle-question mr-2"></i>문의하기
                      </button>
                    </div>

                    <div class="text-right">
                      <p class="text-[10px] uppercase tracking-[0.2em] text-gray-400">Tracking</p>
                      <p class="text-sm font-medium text-black">1234-5678</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <!-- Empty State -->
        <div class="hidden border border-gray-100 bg-white shadow-sm p-14 text-center" id="empty">
          <p class="text-[10px] text-gray-400 uppercase tracking-[0.5em] mb-4">No Orders</p>
          <h3 class="text-xl font-medium text-black">주문/배송 내역이 없어요</h3>
          <p class="text-sm text-gray-500 font-light mt-3">
            상품을 구매하거나 낙찰받으면 여기에 표시됩니다.
          </p>
          <div class="flex justify-center mt-10">
            <RouterLink
              to="/funding/funding_list"
              class="btn-outline px-6 py-3 text-[11px] font-bold uppercase tracking-[0.3em]"
            >
              Shop Now
            </RouterLink>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap');

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

.btn-ghost {
  border: 1px solid var(--border-color);
  background: #fff;
  transition: all 0.25s ease;
}

.btn-ghost:hover {
  border-color: var(--accent-color);
  color: var(--accent-color);
  transform: translateY(-1px);
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.04);
}

.nav-link {
  color: #6b7280;
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
  position: relative;
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

.chip {
  background: var(--chip-bg);
  border: 1px solid var(--border-color);
  color: #6b7280;
  transition: all 0.2s ease;
}

.chip:hover {
  border-color: var(--accent-color);
  color: var(--accent-color);
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.03);
}

.chip.active {
  border-color: var(--accent-color);
  color: var(--accent-color);
  background: #fff;
  box-shadow: 0 10px 18px rgba(163, 147, 130, 0.08);
}

.card {
  border: 1px solid var(--border-color);
  background: #fff;
  transition: all 0.25s ease;
}

.card:hover {
  border-color: rgba(163, 147, 130, 0.55);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}

.thumb {
  background: #f7f7f7;
  border: 1px solid #f1f1f1;
  overflow: hidden;
}

.badge {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--border-color);
  background: #fff;
  font-size: 10px;
  padding: 4px 10px;
  border-radius: 9999px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #6b7280;
}

.badge-accent {
  border-color: rgba(163, 147, 130, 0.35);
  background: rgba(163, 147, 130, 0.08);
  color: var(--accent-color);
  font-weight: 700;
}

.badge-dark {
  background: #111827;
  border-color: #111827;
  color: #fff;
  font-weight: 700;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f8f8f8;
}

::-webkit-scrollbar-thumb {
  background: var(--accent-color);
  border-radius: 3px;
}
</style>
