<!-- <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> -->

<script setup>
import { reactive } from 'vue'
import api from '@/api/auction'

const auctionDesc_list = reactive([])

const getlist = async () => {
  const res = await api.auctionList()
  console.log(res.result)

  auctionDesc_list.push(...res.result)
}
getlist()

// // 1. 가격 포맷 함수
// function formatPrice(price) {
//   return new Number(price).toLocaleString()
// }

// // 2. 초기 가격 로드 함수
// async function loadInitialPrice() {
//   try {
//     console.log('서버에서 초기 가격 데이터를 불러오는 중...')
//     const response = await axios.get('https://www.amo245.kro.kr/ws/price.json')
//     const data = response.data

//     if (data.price !== undefined && data.price !== null) {
//       const priceElement = document.getElementById('currentPrice')
//       if (priceElement) {
//         priceElement.innerText = `₩ ${formatPrice(data.price)}`
//         console.log('초기 가격 로드 완료:', data.price)
//       }
//     }

//     if (data.bidCount !== undefined) {
//       document.getElementById('bidCount').innerText = `${data.bidCount}회`
//     }
//   } catch (error) {
//     console.error('초기 데이터를 가져오는데 실패했습니다:', error)
//   }
// }

// 3. 카운트다운 로직
function startCountdown() {
  let hours = 2,
    minutes = 14,
    seconds = 55
  const display = document.getElementById('countdown')

  setInterval(() => {
    seconds--
    if (seconds < 0) {
      seconds = 59
      minutes--
      if (minutes < 0) {
        minutes = 59
        hours--
      }
    }
    if (hours < 0) return
    const h = hours.toString().padStart(2, '0')
    const m = minutes.toString().padStart(2, '0')
    const s = seconds.toString().padStart(2, '0')
    display.innerText = `${h}:${m}:${s}`
  }, 1000)
}

window.onload = function () {
  startCountdown()
  loadInitialPrice()
}

// 5. 웹소켓 설정
// const wsUrl = 'wss://www.amo245.kro.kr/ws'
// const websocket = new WebSocket(wsUrl)

// websocket.addEventListener('open', () => {
//   console.log('웹소켓 서버 연결됨')
// })

// websocket.addEventListener('message', (e) => {
//   try {
//     const result = JSON.parse(e.data)
//     console.log('수신 데이터:', result)

//     if (result.price !== undefined && result.price !== null) {
//       const priceElement = document.getElementById('currentPrice')
//       if (priceElement) {
//         priceElement.innerText = `₩ ${formatPrice(result.price)}`
//       }
//     }

//     // 서버에서 bidCount를 내려준다면 업데이트
//     if (result.bidCount !== undefined) {
//       document.getElementById('bidCount').innerText = `${result.bidCount}회`
//     }

//     if (result.success && result.status) {
//       alert(result.status)
//     }
//   } catch (err) {
//     console.error('데이터 파싱 에러:', err)
//   }
// })

// // 6. 입찰 버튼 클릭 이벤트 (내 화면 즉시 업데이트 로직 포함)
// document.getElementById('send').addEventListener('click', () => {
//   const priceInput = document.getElementById('message')
//   const priceValue = Number(priceInput.value)

//   if (!priceValue) {
//     alert('입찰 금액을 입력하세요.')
//     return
//   }

//   // 현재 화면에 표시된 가격 숫자만 추출
//   const currentPriceText = document.getElementById('currentPrice').innerText
//   const currentPriceNum = Number(currentPriceText.replace(/[^0-9.-]+/g, ''))

//   // 현재가보다 낮은 금액 입찰 방지
//   if (priceValue <= currentPriceNum) {
//     alert('현재 입찰가보다 높은 금액을 입력해야 합니다.')
//     return
//   }

//   const message = {
//     type: '입찰',
//     price: priceValue,
//   }

//   // 서버로 데이터 전송
//   websocket.send(JSON.stringify(message))

//   // [핵심] 내 화면 즉시 업데이트
//   // 1. 가격 업데이트
//   document.getElementById('currentPrice').innerText = `₩ ${formatPrice(priceValue)}`

//   // 2. 입찰 횟수 1 증가 (서버 응답 전 시각적 피드백)
//   const bidCountElement = document.getElementById('bidCount')
//   const currentCount = parseInt(bidCountElement.innerText) || 0
//   bidCountElement.innerText = `${currentCount + 1}회`

//   // 입력창 비우기
//   priceInput.value = ''
//   console.log('내 입찰 정보 즉시 반영:', priceValue)
// })
</script>

<template>
  <main class="max-w-7xl mx-auto py-12 px-6 lg:px-10 pb-60">
    <nav class="text-[10px] text-gray-400 mb-8 uppercase tracking-[0.2em]">
      Home / Auction / Ring / <span class="text-gray-600">Midnight Sapphire Ring</span>
    </nav>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div class="space-y-6">
        <div class="bg-gray-50 rounded-sm overflow-hidden border border-gray-100 group">
          <img
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            alt="Main Product"
            class="w-full h-auto object-cover group-hover:scale-[1.02] transition duration-700"
          />
        </div>
        <div class="grid grid-cols-4 gap-4">
          <div class="border border-accent p-1 bg-white" v-for="i in [1, 2, 3, 4]">
            <RouterLink to="/auction/Main_auction">
              <img
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=300&q=80"
                class="w-full grayscale hover:grayscale-0 transition cursor-pointer"
              />
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="mb-4">
          <span
            class="inline-block px-3 py-1 bg-[#F5F2F0] accent-text text-[10px] font-bold rounded-full mb-3 tracking-widest uppercase"
            >Live Auction</span
          >
          <h1 class="text-4xl font-light tracking-tight mb-3 text-gray-900">
            Midnight Sapphire Emerald Ring
          </h1>
          <p class="text-gray-500 text-sm leading-relaxed font-light">
            이 상품은 깊은 바다의 색을 닮은 사파이어와 정교한 에메랄드 컷이 조화를 이루는
            마스터피스입니다. 장인의 고도화된 기술로 세공된 단 하나의 작품입니다.
          </p>
        </div>

        <div class="bg-white p-8 border border-gray-100 rounded-sm mb-8 space-y-6 shadow-sm">
          <div class="flex justify-between items-end border-b border-gray-50 pb-6">
            <div>
              <p class="text-gray-400 text-[10px] uppercase tracking-[0.2em] mb-2 font-medium">
                현재 입찰가
              </p>
              <p id="currentPrice" class="text-3xl font-bold accent-text">₩ 4,250,000</p>
            </div>
            <div class="text-right">
              <p class="text-gray-400 text-[10px] uppercase tracking-[0.2em] mb-2 font-medium">
                남은 시간
              </p>
              <p class="text-xl font-mono text-gray-800 tracking-wider" id="countdown">02:14:55</p>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-y-4 gap-x-8 text-sm pt-2">
            <div class="flex justify-between border-b border-gray-50 pb-2">
              <span class="text-gray-400 font-light">시작가</span>
              <span class="text-gray-700 font-medium">₩ 1,500,000</span>
            </div>
            <div class="flex justify-between border-b border-gray-50 pb-2">
              <span class="text-gray-400 font-light">입찰 단위</span>
              <span class="text-gray-700 font-medium">₩ 50,000</span>
            </div>
            <div class="flex justify-between border-b border-gray-50 pb-2">
              <span class="text-gray-400 font-light">총 입찰수</span>
              <span id="bidCount" class="text-gray-700 font-medium">28회</span>
            </div>
            <div class="flex justify-between border-b border-gray-50 pb-2">
              <span class="text-gray-400 font-light">종료 예정</span>
              <span class="text-gray-700 font-medium">01.05 18:00</span>
            </div>
          </div>

          <div class="pt-6">
            <div class="flex items-center space-x-2 mb-4">
              <input
                type="number"
                placeholder="입찰 금액을 입력하세요"
                step="50000"
                id="message"
                class="flex-1 bg-white border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:border-[#A39382] transition-all placeholder:text-gray-300"
              />
              <span class="text-gray-400 text-xs font-bold tracking-widest">KRW</span>
            </div>
            <button
              class="w-full py-4 bid-button font-bold text-xs tracking-[0.3em] uppercase"
              id="send"
            >
              Place a Bid
            </button>
          </div>
        </div>

        <div class="flex border-b border-gray-100 mb-6">
          <button class="px-6 py-3 text-[11px] font-bold tab-active uppercase tracking-[0.2em]">
            Detail
          </button>
          <button
            class="px-6 py-3 text-[11px] font-medium text-gray-400 hover:text-gray-600 uppercase tracking-[0.2em] transition-colors"
          >
            History
          </button>
          <button
            class="px-6 py-3 text-[11px] font-medium text-gray-400 hover:text-gray-600 uppercase tracking-[0.2em] transition-colors"
          >
            Shipping
          </button>
        </div>

        <div class="text-sm text-gray-500 leading-relaxed space-y-3 font-light">
          <p class="flex items-center">
            <span class="w-1.5 h-1.5 accent-bg rounded-full mr-3"></span>원산지: 프랑스 남부
            핸드메이드
          </p>
          <p class="flex items-center">
            <span class="w-1.5 h-1.5 accent-bg rounded-full mr-3"></span>소재: 18K White Gold,
            Natural Sapphire 2.5ct
          </p>
          <p class="flex items-center">
            <span class="w-1.5 h-1.5 accent-bg rounded-full mr-3"></span>사이즈: 12호 (사이즈 조절
            가능)
          </p>
        </div>
      </div>
    </div>

    <section class="mt-32">
      <h2 class="text-xl font-light mb-12 tracking-[0.4em] text-center uppercase text-gray-800">
        Related Artifacts
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="group cursor-pointer" v-for="item in auctionDesc_list">
          <RouterLink to="/auction/auction_list">
            <div
              class="aspect-square bg-gray-50 mb-4 overflow-hidden border border-gray-100 relative"
            >
              <img
                :src="item.image"
                alt="Related"
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700"
              />
              <div
                class="absolute top-0 right-0 accent-bg px-3 py-1 text-[9px] text-white font-bold tracking-widest uppercase"
              >
                Upcoming
              </div>
            </div>
            <h3
              class="text-[10px] uppercase tracking-widest text-gray-400 mb-1 group-hover:text-black transition-colors"
            >
              $${{ item.name }}
            </h3>
            <p class="text-sm font-bold text-gray-800">₩ ${{ item.amount }}</p>
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Cormorant+Garamond:ital,wght@0,300;0,500;1,300&family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap');

body {
  font-family: 'Noto Sans KR', sans-serif;
  background-color: #ffffff;
  color: #1a1a1a;
  margin: 0;
  word-break: keep-all;
}

.font-serif-luxury {
  font-family: 'Cormorant Garamond', serif;
}

.luxury-font {
  font-family: 'Cinzel', serif;
}

:root {
  --accent-color: #a39382;
  --accent-hover: #8e7f70;
  --bg-light: #ffffff;
  --text-main: #1a1a1a;
  --border-color: #eeeeee;
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

.bid-button {
  transition: all 0.3s ease;
  background-color: transparent;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
}

.bid-button:hover {
  background-color: var(--accent-color);
  color: #fff;
  box-shadow: 0 0 15px rgba(163, 147, 130, 0.4);
}

.tab-active {
  border-bottom: 2px solid var(--accent-color);
  color: var(--accent-color);
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
