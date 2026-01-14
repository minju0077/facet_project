<script setup>
import { reactive } from 'vue'
import api from '@/api/funding'

const fundingDesc_list = reactive([])

const getlist = async () => {
  const res = await api.fundescList()
  console.log(res.result)

  fundingDesc_list.push(...res.result)
}
getlist()

// // ====== Gallery (A안) ======
// const mainImg = document.getElementById('main-img')
// const thumbs = document.querySelectorAll('.thumb')

// thumbs.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     thumbs.forEach((b) => {
//       b.classList.remove('border-[#A39382]')
//       b.classList.add('border-gray-100')
//     })
//     btn.classList.remove('border-gray-100')
//     btn.classList.add('border-[#A39382]')
//     mainImg.src = btn.dataset.src
//   })
// })

// // ====== Tabs ======
// const tabBtns = document.querySelectorAll('.tab')
// const panels = {
//   story: document.getElementById('tab-story'),
//   maker: document.getElementById('tab-maker'),
//   process: document.getElementById('tab-process'),
//   shipping: document.getElementById('tab-shipping'),
// }

// tabBtns.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     tabBtns.forEach((b) => {
//       b.classList.remove('tab-active', 'font-bold')
//       b.classList.add('text-gray-400')
//     })
//     btn.classList.add('tab-active', 'font-bold')
//     btn.classList.remove('text-gray-400')

//     const key = btn.dataset.tab
//     Object.keys(panels).forEach((k) => panels[k].classList.add('hidden'))
//     panels[key].classList.remove('hidden')
//   })
// })

// // ====== Rewards selection + Total ======
// const rewardBtns = document.querySelectorAll('.reward')
// const selectedText = document.getElementById('selected-reward-text')
// const supportBtn = document.getElementById('support-btn')
// const supportBtn2 = document.getElementById('support-btn-2')
// const qtyInput = document.getElementById('qty')
// const qtyMinus = document.getElementById('qty-minus')
// const qtyPlus = document.getElementById('qty-plus')
// const totalEl = document.getElementById('total')

// let selectedPrice = 0
// let selectedTitle = ''

// function parseKRW(str) {
//   return Number(String(str).replace(/[^0-9]/g, '') || 0)
// }
// function formatKRW(num) {
//   return '₩ ' + Number(num).toLocaleString('ko-KR')
// }
// function updateTotal() {
//   const qty = Math.max(1, Number(qtyInput.value || 1))
//   qtyInput.value = qty
//   totalEl.innerText = formatKRW(selectedPrice * qty)
// }

// rewardBtns.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     rewardBtns.forEach((b) => b.classList.remove('reward-selected'))
//     btn.classList.add('reward-selected')

//     selectedTitle = btn.dataset.title
//     selectedPrice = parseKRW(btn.dataset.price)

//     selectedText.innerText = `${selectedTitle} · ${btn.dataset.price} (${btn.dataset.left})`
//     supportBtn.disabled = false
//     supportBtn2.disabled = false

//     updateTotal()
//   })
// })

// qtyMinus.addEventListener('click', () => {
//   qtyInput.value = Math.max(1, Number(qtyInput.value || 1) - 1)
//   updateTotal()
// })
// qtyPlus.addEventListener('click', () => {
//   qtyInput.value = Math.max(1, Number(qtyInput.value || 1) + 1)
//   updateTotal()
// })
// qtyInput.addEventListener('input', updateTotal)

// // Demo action
// function handleSupport() {
//   if (!selectedTitle) return
//   const qty = Math.max(1, Number(qtyInput.value || 1))
//   alert(
//     `후원하기(데모)\n\n리워드: ${selectedTitle}\n수량: ${qty}\n결제금액: ${formatKRW(selectedPrice * qty)}\n\n※ 실제 결제/주문 로직은 백엔드 연동 필요`,
//   )
// }
// supportBtn.addEventListener('click', handleSupport)
// supportBtn2.addEventListener('click', handleSupport)

// // ====== Countdown (예시) ======
// let days = 4,
//   hours = 12,
//   minutes = 34,
//   seconds = 56
// const display = document.getElementById('countdown')

// setInterval(() => {
//   seconds--
//   if (seconds < 0) {
//     seconds = 59
//     minutes--
//   }
//   if (minutes < 0) {
//     minutes = 59
//     hours--
//   }
//   if (hours < 0) {
//     hours = 23
//     days--
//   }
//   if (days < 0) return

//   const h = String(hours).padStart(2, '0')
//   const m = String(minutes).padStart(2, '0')
//   const s = String(seconds).padStart(2, '0')
//   display.innerText = `${String(days).padStart(2, '0')}일 ${h}:${m}:${s}`
// }, 1000)
</script>

<template>
  <main class="max-w-[1440px] mx-auto px-4 md:px-10 py-8">
    <!-- Breadcrumb -->
    <nav class="text-[10px] text-gray-400 mb-6 uppercase tracking-[0.2em]">
      Home / Funding / Handmade /
      <span class="text-gray-600">Celestial Rose — 수공예 다이아 귀걸이</span>
    </nav>

    <!-- Cover -->
    <section
      class="relative overflow-hidden rounded-md border border-gray-100 shadow-sm h-[260px] md:h-[340px] mb-10"
    >
      <img
        src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1800&q=80"
        alt="Funding Cover"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 banner-gradient"></div>

      <div class="absolute left-6 md:left-10 bottom-8 md:bottom-10 text-white max-w-2xl">
        <div class="flex items-center space-x-2 mb-4">
          <span
            class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest"
            >Handmade</span
          >
          <span class="px-3 py-1 bg-[#A39382] rounded-full text-[10px] uppercase tracking-widest"
            >Funding</span
          >
          <span
            class="px-3 py-1 bg-black/35 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest"
            id="status-badge"
            >Ongoing</span
          >
        </div>
        <h1 class="text-3xl md:text-5xl font-light font-serif-luxury italic leading-tight">
          Celestial Rose Earring
        </h1>
        <p class="text-sm md:text-[14px] font-light text-gray-200 leading-loose mt-4 opacity-95">
          장인의 손끝에서 완성되는 수공예 주얼리. 펀딩으로 제작을 응원하고, 리워드로 당신만의 작품을
          받아보세요.
        </p>
      </div>
    </section>

    <section class="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <!-- Left: Story / Detail -->
      <div class="lg:col-span-8">
        <!-- ✅ Gallery만 A안으로 교체 (정사각 메인 + 하단 필름스트립) -->
        <section class="mb-10">
          <div class="border border-gray-100 bg-gray-50 rounded-md overflow-hidden">
            <div class="aspect-square w-full">
              <img
                id="main-img"
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1400&q=80"
                class="w-full h-full object-cover"
                alt="Main"
              />
            </div>
          </div>

          <div class="mt-4 flex items-center gap-3 overflow-x-auto no-scrollbar pb-2">
            <button
              class="thumb shrink-0 border border-[#A39382] rounded-md overflow-hidden w-24 aspect-square bg-white"
              data-src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1400&q=80"
            >
              <img
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=240&q=80"
                class="w-full h-full object-cover"
                alt="Thumb 1"
              />
            </button>

            <button
              class="thumb shrink-0 border border-gray-100 rounded-md overflow-hidden w-24 aspect-square bg-white"
              data-src="https://images.unsplash.com/photo-1515562141207-7a18b5ce7142?auto=format&fit=crop&w=1400&q=80"
            >
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a18b5ce7142?auto=format&fit=crop&w=240&q=80"
                class="w-full h-full object-cover"
                alt="Thumb 2"
              />
            </button>

            <button
              class="thumb shrink-0 border border-gray-100 rounded-md overflow-hidden w-24 aspect-square bg-white"
              data-src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1400&q=80"
            >
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=240&q=80"
                class="w-full h-full object-cover"
                alt="Thumb 3"
              />
            </button>

            <button
              class="thumb shrink-0 border border-gray-100 rounded-md overflow-hidden w-24 aspect-square bg-white"
              data-src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1400&q=80"
            >
              <img
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=240&q=80"
                class="w-full h-full object-cover"
                alt="Thumb 4"
              />
            </button>
          </div>
        </section>

        <!-- Tabs -->
        <div class="flex border-b border-gray-100 mb-6">
          <button
            class="tab px-6 py-3 text-[11px] font-bold tab-active uppercase tracking-[0.2em]"
            data-tab="story"
          >
            Story
          </button>
          <button
            class="tab px-6 py-3 text-[11px] font-medium text-gray-400 hover:text-gray-600 uppercase tracking-[0.2em] transition-colors"
            data-tab="maker"
          >
            Maker
          </button>
          <button
            class="tab px-6 py-3 text-[11px] font-medium text-gray-400 hover:text-gray-600 uppercase tracking-[0.2em] transition-colors"
            data-tab="process"
          >
            Process
          </button>
          <button
            class="tab px-6 py-3 text-[11px] font-medium text-gray-400 hover:text-gray-600 uppercase tracking-[0.2em] transition-colors"
            data-tab="shipping"
          >
            Shipping
          </button>
        </div>

        <!-- Tab Contents -->
        <div id="tab-story" class="tab-panel space-y-10">
          <section class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="p-6 border border-gray-100 rounded-md bg-white">
              <p class="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-2">Key Point</p>
              <p class="text-sm text-gray-700 leading-relaxed font-light">
                100% 수작업 세공으로 동일한 패턴이 없는
                <span class="accent-text font-medium">원-오프(One-off)</span> 텍스처를 구현합니다.
              </p>
            </div>
            <div class="p-6 border border-gray-100 rounded-md bg-white">
              <p class="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-2">Material</p>
              <p class="text-sm text-gray-700 leading-relaxed font-light">
                925 Silver / 14K Gold Plated 옵션, 원석은 프로젝트별로 엄선해 사용합니다.
              </p>
            </div>
            <div class="p-6 border border-gray-100 rounded-md bg-white">
              <p class="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-2">Handmade</p>
              <p class="text-sm text-gray-700 leading-relaxed font-light">
                주문(펀딩) 종료 후 제작 시작. 제작 기간에 맞춰
                <span class="accent-text font-medium">개별 검수</span> 후 발송합니다.
              </p>
            </div>
          </section>

          <section class="p-8 border border-gray-100 rounded-md bg-white space-y-5">
            <h2 class="text-xl font-light tracking-[0.25em] uppercase text-gray-900">
              Project Story
            </h2>
            <p class="text-sm text-gray-600 leading-relaxed font-light">
              Celestial Rose는 “빛이 머무는 자리”를 모티브로 한 수공예 주얼리입니다. 장인이 원석의
              결을 관찰한 뒤, 금속을 한 번에 찍어내지 않고 여러 단계로 다듬어 빛의 확산이 가장
              아름답게 드러나는 각도를 찾습니다.
            </p>
            <p class="text-sm text-gray-600 leading-relaxed font-light">
              대량 생산이 아닌, 펀딩을 통해 필요한 수량만 제작해 불필요한 재고를 줄이고 제작 과정의
              품질에 더 많은 시간을 투자합니다.
            </p>
          </section>

          <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-8 border border-gray-100 rounded-md bg-white">
              <h3 class="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-3">
                For Supporters
              </h3>
              <p class="text-sm text-gray-600 leading-relaxed font-light">
                사이즈/도금 옵션은 결제 후에도 마감 전까지 변경 가능(프로젝트 정책에 따라 상이).
                수공예 특성상 미세한 결 차이가 있을 수 있으며, 이는 불량이 아닌 작품의 개성으로
                안내됩니다.
              </p>
            </div>
            <div class="p-8 border border-gray-100 rounded-md bg-white">
              <h3 class="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-3">Care Guide</h3>
              <p class="text-sm text-gray-600 leading-relaxed font-light">
                착용 후 부드러운 천으로 닦아 보관해 주세요. 향수/헤어스프레이/수영장 등 화학 성분
                접촉은 변색을 유발할 수 있습니다.
              </p>
            </div>
          </section>
        </div>

        <div id="tab-maker" class="tab-panel hidden space-y-10">
          <section class="p-8 border border-gray-100 rounded-md bg-white">
            <div class="flex items-center justify-between mb-6">
              <div>
                <p class="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-2">Maker</p>
                <h2 class="text-2xl font-light text-gray-900">Atelier Park</h2>
              </div>
              <button
                class="px-5 py-2 text-[11px] font-bold tracking-widest uppercase ghost-btn rounded-sm"
              >
                Follow
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="p-5 bg-gray-50 rounded-md border border-gray-100">
                <p class="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-2">Experience</p>
                <p class="text-sm text-gray-700 font-light">금속 공예 7년 / 주얼리 제작 5년</p>
              </div>
              <div class="p-5 bg-gray-50 rounded-md border border-gray-100">
                <p class="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-2">Style</p>
                <p class="text-sm text-gray-700 font-light">미니멀 & 클래식, 자연 텍스처</p>
              </div>
              <div class="p-5 bg-gray-50 rounded-md border border-gray-100">
                <p class="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-2">Promise</p>
                <p class="text-sm text-gray-700 font-light">전량 수작업 · 개별 검수 · 안전 포장</p>
              </div>
            </div>

            <div class="mt-8 text-sm text-gray-600 leading-relaxed font-light">
              <p>
                “작품이 되는 순간은, 재료의 작은 결을 읽어내는 시간에서 시작됩니다.” Atelier Park는
                수공예의 결을 살리는 제작 방식으로, 똑같은 제품이 반복되지 않도록 각 작품에 미세한
                변주를 남깁니다.
              </p>
            </div>
          </section>
        </div>

        <div id="tab-process" class="tab-panel hidden space-y-10">
          <section class="p-8 border border-gray-100 rounded-md bg-white space-y-6">
            <h2 class="text-xl font-light tracking-[0.25em] uppercase text-gray-900">
              Making Process
            </h2>

            <div class="space-y-4">
              <div class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 rounded-full accent-bg text-white flex items-center justify-center text-sm font-bold"
                >
                  1
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-900">디자인 확정 & 재료 선별</p>
                  <p class="text-sm text-gray-600 font-light leading-relaxed mt-1">
                    원석 결/색감을 기준으로 페어링하고, 금속 도금 옵션에 맞춰 공정을 확정합니다.
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 rounded-full accent-bg text-white flex items-center justify-center text-sm font-bold"
                >
                  2
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-900">세공(수작업)</p>
                  <p class="text-sm text-gray-600 font-light leading-relaxed mt-1">
                    절삭/연마/세팅을 여러 차례 반복해 광택과 내구성을 확보합니다.
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 rounded-full accent-bg text-white flex items-center justify-center text-sm font-bold"
                >
                  3
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-900">검수 & 패키징</p>
                  <p class="text-sm text-gray-600 font-light leading-relaxed mt-1">
                    마감 품질/도금 균일도/스크래치 여부를 점검하고 안전 포장 후 발송합니다.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div id="tab-shipping" class="tab-panel hidden space-y-10">
          <section class="p-8 border border-gray-100 rounded-md bg-white space-y-6">
            <h2 class="text-xl font-light tracking-[0.25em] uppercase text-gray-900">
              Shipping & Policy
            </h2>

            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600 font-light leading-relaxed"
            >
              <div class="p-6 bg-gray-50 rounded-md border border-gray-100">
                <p class="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-2">
                  Estimated Delivery
                </p>
                <p>펀딩 종료 후 10~21일 내 순차 발송 (수량/공정에 따라 변동 가능)</p>
              </div>
              <div class="p-6 bg-gray-50 rounded-md border border-gray-100">
                <p class="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-2">
                  Exchange / Refund
                </p>
                <p>
                  수공예 맞춤 제작 특성상 단순 변심 환불 제한. 불량/파손은 수령 후 7일 이내 접수.
                </p>
              </div>
            </div>

            <div class="text-sm text-gray-600 font-light leading-relaxed">
              <p class="flex items-start">
                <span class="w-1.5 h-1.5 accent-bg rounded-full mr-3 mt-2"></span>
                도금/원석/수공예 공정 특성상 미세한 색/결 차이가 있을 수 있습니다.
              </p>
              <p class="flex items-start mt-3">
                <span class="w-1.5 h-1.5 accent-bg rounded-full mr-3 mt-2"></span>
                배송 주소/옵션 변경은 “펀딩 종료 전”에만 가능하도록 설정할 수 있습니다(운영 정책에
                따라).
              </p>
            </div>
          </section>
        </div>
      </div>

      <!-- Right: Funding summary + Rewards -->
      <aside class="lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-6">
        <div class="border border-gray-100 rounded-md bg-white p-7 shadow-sm space-y-6">
          <div class="flex items-start justify-between">
            <div>
              <p class="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-2 font-medium">
                Funding Progress
              </p>
              <p class="text-3xl font-bold accent-text" id="percent-text">82%</p>
            </div>
            <div class="text-right">
              <p class="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-2 font-medium">
                Time Left
              </p>
              <p class="text-lg font-mono text-gray-800 tracking-wider" id="countdown">
                04일 12:34:56
              </p>
            </div>
          </div>

          <div>
            <div class="w-full h-[4px] rounded-full overflow-hidden bg-gray-100">
              <div id="progress-fill" class="h-full" style="width: 82%; background: #a39382"></div>
            </div>
            <div class="flex justify-between mt-3 text-sm">
              <div class="space-x-2">
                <span class="text-gray-400 text-[11px]">모인 금액</span>
                <span class="text-gray-900 font-medium" id="raised">₩ 8,900,000</span>
              </div>
              <div class="space-x-2">
                <span class="text-gray-400 text-[11px]">목표</span>
                <span class="text-gray-900 font-medium" id="goal">₩ 10,800,000</span>
              </div>
            </div>
            <div class="flex justify-between mt-2 text-sm">
              <div class="space-x-2">
                <span class="text-gray-400 text-[11px]">서포터</span>
                <span class="text-gray-900 font-medium" id="supporters">214명</span>
              </div>
              <div class="space-x-2">
                <span class="text-gray-400 text-[11px]">종료</span>
                <span class="text-gray-900 font-medium">01.12 18:00</span>
              </div>
            </div>
          </div>

          <div class="flex space-x-2 pt-1">
            <button
              class="flex-1 py-3 text-[11px] font-bold tracking-widest uppercase ghost-btn rounded-sm"
            >
              ❤️ 위시리스트
            </button>
            <button
              class="flex-1 py-3 text-[11px] font-bold tracking-widest uppercase ghost-btn rounded-sm"
            >
              🔗 공유
            </button>
          </div>

          <div class="pt-2">
            <p class="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-2">Selected Reward</p>
            <p class="text-sm text-gray-700 font-light" id="selected-reward-text">
              리워드를 선택해주세요.
            </p>
          </div>

          <button
            id="support-btn"
            class="w-full py-4 primary-btn font-bold text-xs tracking-[0.3em] uppercase rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
            disabled
          >
            Support this Project
          </button>

          <p class="text-[11px] text-gray-400 leading-relaxed font-light">
            결제는 프로젝트 종료 시점에 진행되며, 목표 미달 시 자동 취소됩니다(정책 설정 가능).
          </p>
        </div>

        <div class="border border-gray-100 rounded-md bg-white p-7 shadow-sm">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-bold">리워드 선택</h3>
            <span class="text-[10px] text-gray-400 uppercase tracking-[0.2em]">Rewards</span>
          </div>

          <div class="space-y-4 max-h-[420px] overflow-auto pr-1 no-scrollbar">
            <button
              class="reward reward-card w-full text-left rounded-md p-5"
              data-title="서포터 패키지"
              data-price="₩ 29,000"
              data-left="무제한"
            >
              <div class="flex items-start justify-between">
                <div>
                  <p class="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Option 01</p>
                  <p class="text-sm font-bold text-gray-900">서포터 패키지</p>
                  <p class="text-[12px] text-gray-500 mt-2 font-light leading-relaxed">
                    감사 카드 + 제작 과정 리포트(PDF) + 스튜디오 비하인드 컷 제공
                  </p>
                </div>
                <div class="text-right ml-4">
                  <p class="text-sm font-bold accent-text">₩ 29,000</p>
                  <p class="text-[11px] text-gray-400 mt-1">수량: 무제한</p>
                </div>
              </div>
            </button>

            <button
              class="reward reward-card w-full text-left rounded-md p-5"
              data-title="실버 귀걸이(925)"
              data-price="₩ 149,000"
              data-left="23개 남음"
            >
              <div class="flex items-start justify-between">
                <div>
                  <p class="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Option 02</p>
                  <p class="text-sm font-bold text-gray-900">Celestial Rose 실버 귀걸이(925)</p>
                  <p class="text-[12px] text-gray-500 mt-2 font-light leading-relaxed">
                    수공예 세공 + 기본 패키지(보관 파우치 포함) / 도금 미포함
                  </p>
                  <div class="flex space-x-2 mt-3">
                    <span
                      class="px-2 py-1 bg-gray-50 border border-gray-100 rounded-full text-[10px] text-gray-500"
                      >핸드메이드</span
                    >
                    <span
                      class="px-2 py-1 bg-[#F5F2F0] rounded-full text-[10px] accent-text font-medium"
                      >추천</span
                    >
                  </div>
                </div>
                <div class="text-right ml-4">
                  <p class="text-sm font-bold accent-text">₩ 149,000</p>
                  <p class="text-[11px] text-gray-400 mt-1">수량: 23개 남음</p>
                </div>
              </div>
            </button>

            <button
              class="reward reward-card w-full text-left rounded-md p-5"
              data-title="14K 골드 도금 귀걸이"
              data-price="₩ 189,000"
              data-left="12개 남음"
            >
              <div class="flex items-start justify-between">
                <div>
                  <p class="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Option 03</p>
                  <p class="text-sm font-bold text-gray-900">Celestial Rose 14K 골드 도금 귀걸이</p>
                  <p class="text-[12px] text-gray-500 mt-2 font-light leading-relaxed">
                    925 실버 베이스 + 14K 도금 + 개별 검수 / 선물 포장 옵션 포함
                  </p>
                </div>
                <div class="text-right ml-4">
                  <p class="text-sm font-bold accent-text">₩ 189,000</p>
                  <p class="text-[11px] text-gray-400 mt-1">수량: 12개 남음</p>
                </div>
              </div>
            </button>

            <button
              class="reward reward-card w-full text-left rounded-md p-5"
              data-title="커스텀 이니셜 각인"
              data-price="₩ 39,000"
              data-left="무제한"
            >
              <div class="flex items-start justify-between">
                <div>
                  <p class="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Add-on</p>
                  <p class="text-sm font-bold text-gray-900">커스텀 이니셜 각인</p>
                  <p class="text-[12px] text-gray-500 mt-2 font-light leading-relaxed">
                    최대 6자 이니셜 각인(영문/숫자) · 제작 공정에 포함됩니다.
                  </p>
                </div>
                <div class="text-right ml-4">
                  <p class="text-sm font-bold accent-text">₩ 39,000</p>
                  <p class="text-[11px] text-gray-400 mt-1">수량: 무제한</p>
                </div>
              </div>
            </button>
          </div>

          <div class="mt-6 border-t border-gray-100 pt-6 space-y-4">
            <div class="flex items-center justify-between">
              <p class="text-[11px] uppercase tracking-[0.2em] text-gray-400">Quantity</p>
              <div class="flex items-center space-x-2">
                <button
                  id="qty-minus"
                  class="w-9 h-9 ghost-btn rounded-sm flex items-center justify-center"
                >
                  −
                </button>
                <input
                  id="qty"
                  type="number"
                  min="1"
                  value="1"
                  class="w-14 text-center border border-gray-100 rounded-sm py-2 focus:outline-none focus:border-[#A39382]"
                />
                <button
                  id="qty-plus"
                  class="w-9 h-9 ghost-btn rounded-sm flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <p class="text-[11px] uppercase tracking-[0.2em] text-gray-400">Total</p>
              <p class="text-lg font-bold accent-text" id="total">₩ 0</p>
            </div>

            <button
              id="support-btn-2"
              class="w-full py-4 primary-btn font-bold text-xs tracking-[0.3em] uppercase rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
              disabled
            >
              Support Now
            </button>

            <p class="text-[11px] text-gray-400 leading-relaxed font-light">
              * “Add-on”은 단독 구매가 아닌 리워드와 함께 선택하는 옵션으로 설계했습니다(필요하면
              로직 확장 가능).
            </p>
          </div>
        </div>
      </aside>
    </section>

    <!-- Related Handmade Projects (그대로 유지) -->
    <section class="mt-24">
      <div class="flex justify-between items-end mb-8">
        <h2 class="text-2xl font-bold">함께 보면 좋은 수공예 펀딩</h2>
        <button class="text-sm text-gray-400 hover:text-black transition">더보기</button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        <div class="group cursor-pointer" v-for="item in fundingDesc_list">
          <RouterLink :to="`/funding/funding_desc/${item.id}`" class="block">
            <div class="aspect-video overflow-hidden bg-gray-100 mb-4 relative rounded-md">
              <img
                :src="item.image"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Related"
              />
              <div class="absolute top-3 left-3">
                <span
                  class="bg-[#A39382] text-white px-2 py-0.5 text-[10px] font-bold rounded-sm uppercase"
                  >Handmade</span
                >
              </div>
            </div>
            <h3
              class="text-md font-bold leading-snug group-hover:text-[#A39382] transition-colors line-clamp-2"
            >
              ${{ item.title }}
            </h3>
            <p class="text-[12px] text-gray-400 mt-2">
              ${{ item.maker }} | ${{ item.achievementRate }}% 달성
            </p>
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;1,300&family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Cormorant+Garamond:ital,wght@0,300;0,500;1,300&family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap');

:root {
  --accent-color: #a39382;
  --accent-hover: #8e7f70;
  --bg-light: #ffffff;
  --text-main: #1a1a1a;
  --border-color: #eeeeee;
}

body {
  font-family: 'Noto Sans KR', sans-serif;
  background: var(--bg-light);
  color: var(--text-main);
  margin: 0;
  word-break: keep-all;
}

.font-serif-luxury {
  font-family: 'Cormorant Garamond', serif;
}
.luxury-font {
  font-family: 'Cinzel', serif;
}

.accent-text {
  color: var(--accent-color);
}

.accent-bg {
  background-color: var(--accent-color);
}

.border-accent {
  border-color: var(--accent-color);
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.banner-gradient {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0) 62%);
}

.tab-active {
  border-bottom: 2px solid var(--accent-color);
  color: var(--accent-color);
}

.primary-btn {
  background: var(--accent-color);
  color: #fff;
  transition: all 0.2s ease;
}

.primary-btn:hover {
  opacity: 0.92;
}

.ghost-btn {
  border: 1px solid var(--border-color);
  transition: all 0.2s ease;
}

.ghost-btn:hover {
  border-color: var(--accent-color);
  color: var(--accent-color);
}

.reward-card {
  border: 1px solid #f1f1f1;
  transition: all 0.2s ease;
}

.reward-card:hover {
  border-color: var(--accent-color);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}

.reward-selected {
  border-color: var(--accent-color) !important;
  box-shadow: 0 12px 35px rgba(163, 147, 130, 0.18) !important;
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
