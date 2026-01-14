<script setup>
const products = [
  {
    id: 1,
    type: 'auction-active',
    title: 'Vintage 14k Gold Emerald Ring',
    category: '반지',
    price: 1250000,
    deadline: '02:45:12 남음',
    img: 'https://images.unsplash.com/photo-1605100804763-247f67b3f876?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    type: 'funding-active',
    title: 'Custom Sterling Silver Chain Necklace',
    category: '목걸이',
    price: 180000,
    progress: 82,
    deadline: '5일 남음',
    img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    type: 'auction-ended',
    title: 'Cartier Tank Solo Vintage Watch',
    category: '시계',
    price: 3400000,
    status: '낙찰 완료',
    img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    type: 'funding-active',
    title: 'Natural Pearl Drop Earrings',
    category: '귀걸이',
    price: 95000,
    progress: 45,
    deadline: '15일 남음',
    img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    type: 'funding-ended',
    title: 'Antique Brass Bangle Bracelet',
    category: '팔찌',
    price: 65000,
    progress: 150,
    status: '펀딩 성공',
    img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
  },
]

const grid = document.getElementById('product-grid')
const tabs = document.querySelectorAll('.tab-button')
const countLabel = document.getElementById('result-count')

function renderProducts(filter = 'all') {
  grid.innerHTML = ''
  const filtered = filter === 'all' ? products : products.filter((p) => p.type === filter)

  countLabel.innerText = `총 ${filtered.length}개의 상품이 검색되었습니다.`

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="col-span-full py-24 text-center text-gray-300 font-light">해당 조건에 맞는 상품이 존재하지 않습니다.</div>`
    return
  }

  filtered.forEach((p) => {
    const isFunding = p.type.startsWith('funding')
    const isEnded = p.type.endsWith('ended')

    const card = document.createElement('div')
    card.className = `item-card group cursor-pointer ${isEnded ? 'opacity-70' : ''}`

    let badge = ''
    if (p.type === 'funding-active')
      badge = `<div class="absolute top-4 left-4 accent-bg text-white text-[9px] px-2 py-1 font-bold uppercase tracking-widest">FUNDING</div>`
    else if (p.type === 'auction-active')
      badge = `<div class="absolute top-4 left-4 bg-black text-white text-[9px] px-2 py-1 font-bold uppercase tracking-widest">AUCTION</div>`

    let overlay = ''
    if (isEnded) {
      overlay = `<div class="absolute inset-0 bg-black/30 flex items-center justify-center"><span class="text-white text-[10px] font-bold tracking-[0.2em] border border-white px-4 py-2 uppercase">품절</span></div>`
    }

    let bottomInfo = ''
    if (isFunding && !isEnded) {
      bottomInfo = `
                        <div class="mt-4 w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                            <div class="accent-bg h-full" style="width: ${p.progress}%"></div>
                        </div>
                        <div class="mt-2.5 flex items-center justify-between text-[11px]">
                            <span class="accent-text font-bold">${p.progress}%</span>
                            <span class="text-gray-400 font-light">${p.deadline}</span>
                        </div>
                    `
    } else if (!isFunding && !isEnded) {
      bottomInfo = `
                        <div class="mt-4 flex items-center gap-2 text-[11px] text-gray-400 font-light">
                            <i class="fa-regular fa-clock text-[10px]"></i>
                            <span>${p.deadline}</span>
                        </div>
                    `
    } else if (isEnded) {
      bottomInfo = `<div class="mt-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest">${p.status}</div>`
    }

    card.innerHTML = `
                    <div class="aspect-ratio-box mb-5 shadow-sm">
                        <img src="${p.img}" alt="${p.title}" class="${isEnded ? 'grayscale' : ''}">
                        ${badge}
                        ${overlay}
                    </div>
                    <div>
                        <span class="text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 block font-medium">${p.category}</span>
                        <h3 class="text-[15px] font-medium mb-2.5 group-hover:accent-text transition-colors line-clamp-1">${p.title}</h3>
                        <div class="flex items-baseline gap-2">
                            <span class="text-lg font-bold italic">₩${p.price.toLocaleString()}</span>
                        </div>
                        ${bottomInfo}
                    </div>
                `
    grid.appendChild(card)
  })
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active', 'accent-text'))
    tab.classList.add('active')
    renderProducts(tab.dataset.type)
  })
})

renderProducts()
</script>

<template>
  <main class="max-w-7xl mx-auto px-4 py-10">
    <!-- Search Info -->
    <section class="mb-12 text-center md:text-left">
      <h2 class="text-3xl font-light mb-2">
        "<span class="font-bold">빈티지 악세서리</span>" 검색 결과
      </h2>
      <p id="result-count" class="text-gray-400 text-sm">총 0개의 상품이 검색되었습니다.</p>
    </section>

    <!-- Filter Tabs (Status focused) -->
    <div
      class="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-100 gap-4"
    >
      <div id="tabs" class="flex gap-8 text-sm overflow-x-auto whitespace-nowrap no-scrollbar">
        <button class="tab-button py-4 active" data-type="all">전체보기</button>
        <button
          class="tab-button py-4 text-gray-400 hover:text-gray-600 transition-colors"
          data-type="auction-active"
        >
          진행중인 경매
        </button>
        <button
          class="tab-button py-4 text-gray-400 hover:text-gray-600 transition-colors"
          data-type="auction-ended"
        >
          종료된 경매
        </button>
        <button
          class="tab-button py-4 text-gray-400 hover:text-gray-600 transition-colors"
          data-type="funding-active"
        >
          진행중인 펀딩
        </button>
        <button
          class="tab-button py-4 text-gray-400 hover:text-gray-600 transition-colors"
          data-type="funding-ended"
        >
          종료된 펀딩
        </button>
      </div>
      <div class="flex items-center gap-4 mb-4 md:mb-0">
        <select
          class="text-xs border-none bg-transparent focus:ring-0 cursor-pointer font-bold accent-text tracking-widest"
        >
          <option>최신순</option>
          <option>낮은 가격순</option>
          <option>높은 가격순</option>
        </select>
        <button class="p-2 border border-gray-100 rounded-md hover:bg-gray-50">
          <i class="fa-solid fa-sliders text-xs"></i>
        </button>
      </div>
    </div>

    <!-- Product Grid -->
    <div id="product-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
      <!-- JS dynamic content -->
    </div>

    <!-- Pagination -->
    <div class="mt-24 flex justify-center items-center gap-2">
      <button
        class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-100 text-gray-400 hover:text-black transition-colors"
      >
        <i class="fa-solid fa-chevron-left text-xs"></i>
      </button>
      <button
        class="w-10 h-10 flex items-center justify-center rounded-full accent-bg text-white font-medium"
      >
        1
      </button>
      <button
        class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-100 text-gray-400 hover:text-black transition-colors"
      >
        2
      </button>
      <button
        class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-100 text-gray-400 hover:text-black transition-colors"
      >
        <i class="fa-solid fa-chevron-right text-xs"></i>
      </button>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Cormorant+Garamond:ital,wght@0,300;0,500;1,300&family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap');

:root {
  --accent-color: #a39382;
  --accent-hover: #8e7f70;
  --bg-light: #ffffff;
  --text-main: #1a1a1a;
  --border-color: #eeeeee;
}

body {
  background-color: var(--bg-light);
  color: var(--text-main);
  font-family:
    'Pretendard',
    -apple-system,
    BlinkMacSystemFont,
    system-ui,
    Roboto,
    sans-serif,
    'Noto Sans KR',
    sans-serif;
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

/* 이미지 박스: 부드러운 12px 라운드 적용 */
.aspect-ratio-box {
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  background-color: #f8f8f8;
  border-radius: 12px;
}
.aspect-ratio-box img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.item-card:hover img {
  transform: scale(1.05);
}

.tab-button.active {
  border-bottom: 2px solid var(--accent-color);
  color: var(--accent-color);
  font-weight: 600;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
