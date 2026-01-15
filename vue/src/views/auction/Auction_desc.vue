<script setup>
import { onMounted, reactive, ref, onUnmounted } from 'vue'
import api from '@/api/auction'

const auctionDesc_list = reactive([])
const startPrice = ref('1500000')
const inputPrice = ref('')
const currentPrice = ref(startPrice)
let countdown = ref('02:14:55')

const getlist = async () => {
  const res = await api.auctionList()
  console.log(res.result)

  auctionDesc_list.push(...res.result)
}


// 3. 카운트다운 로직
const startCountdown = () => {
  let hours = 0,
    minutes = 0,
    seconds = 10

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
    countdown.value = `${h}:${m}:${s}`
  }, 1000)
}

// 시작하자마자 카운트다운 시작
onMounted(() => {
  startCountdown()
  // loadInitialPrice()
})

// 웹소켓
let socket = null
const messages = reactive([])
const message = ref('')
onMounted(() => {
  const wsUri = 'ws://127.0.0.1:8080/ws/chat'
  socket = new WebSocket(wsUri)

  socket.addEventListener('open', () => {
    console.log('CONNECTED')
  })

  socket.addEventListener('message', (e) => {
    const data = JSON.parse(e.data)
    console.log('받은 데이터:', data.payload)
    currentPrice.value = data.payload
  })
  socket.addEventListener('close', (e) => {
    console.log('CLOSED')
  })
})

const send = () => {
  

  if (currentPrice.value < Number(inputPrice.value)) {
    currentPrice.value = Number(inputPrice.value)
    socket.send(inputPrice.value)
  }else{
    alert("현재 입찰가보다 높은 금액을 입력하세요.")
  }
}

onUnmounted(() => {
  if (socket) socket.close()

  getlist()
})
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
              <p id="currentPrice" class="text-3xl font-bold accent-text">
                ₩ {{ Number(currentPrice).toLocaleString() }}
              </p>
            </div>
            <div class="text-right">
              <p class="text-gray-400 text-[10px] uppercase tracking-[0.2em] mb-2 font-medium">
                남은 시간
              </p>
              <p class="text-xl font-mono text-gray-800 tracking-wider" id="countdown">
                {{ countdown }}
              </p>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-y-4 gap-x-8 text-sm pt-2">
            <div class="flex justify-between border-b border-gray-50 pb-2">
              <span class="text-gray-400 font-light">시작가</span>
              <span class="text-gray-700 font-medium"
                >₩ {{ Number(startPrice).toLocaleString() }}</span
              >
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
                v-model="inputPrice"
                type="number"
                placeholder="입찰 금액을 입력하세요"
                step="50000"
                id="message"
                class="flex-1 bg-white border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:border-[#A39382] transition-all placeholder:text-gray-300"
              />
              <span class="text-gray-400 text-xs font-bold tracking-widest">KRW</span>
            </div>
            <button
              @click="send"
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
