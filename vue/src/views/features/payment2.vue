<script setup>
import { reactive, ref, computed, onMounted } from 'vue'

// 1. 배송 정보 입력값 관리 (v-model로 연결됨)
const shippingForm = reactive({
  name: '',
  phone: '',
  postcode: '',
  addressMain: '',
  addressDetail: '',
  request: '',
  directRequest: '',
})

// 2. 최근 배송지 데이터 예시
const RECENT_SHIPPING = {
  name: '홍길동',
  phone: '010-1234-5678',
  postcode: '12345',
  addressMain: '서울특별시 강남구 테헤란로 123',
  addressDetail: '4층',
}

// 3. 현재 모드 및 결제 관련 상태
const currentMode = ref('recent') // 배송지 선택 (recent / new)
const paymentType = ref('simple') // 예약 결제 방식 (simple / manual)
const paymentMethod = ref('card') // 결제 수단 (card / kakao / naver)
const extraSupport = ref(0) // 추가 후원금
const clubAmount = ref(0) // 서포터클럽 응원금 (라디오 버튼)
const isAgreed = ref(false) // 약관 동의 체크박스

const basePrice = 48000 // 기본 가격

/**
 * 기능 1: 배송지 모드 전환
 */
// 3. 기능: 배송지 전환
const setShippingMode = (mode) => {
  currentMode.value = mode
  if (mode === 'recent') {
    Object.assign(shippingForm, RECENT_SHIPPING)
  } else {
    Object.assign(shippingForm, {
      name: '',
      phone: '',
      postcode: '',
      addressMain: '',
      addressDetail: '',
      request: '',
      directRequest: '',
    })
  }
}

/**
 * 기능 2: 최종 가격 자동 업데이트 (Computed 사용)
 * extraSupport나 clubAmount가 변하면 자동으로 totalPrice가 갱신됩니다.
 */
const totalPrice = computed(() => {
  const extra = Number(extraSupport.value) || 0
  const club = Number(clubAmount.value) || 0
  return basePrice + extra + club
})

/**
 * 기능 3: 후원하기 프로세스
 */
function processFunding() {
  if (!isAgreed.value) {
    alert('모든 필수 약관에 동의해주세요.')
    return
  }
  alert(`총 ${totalPrice.value.toLocaleString()}원 펀딩 후원 예약이 완료되었습니다!`)
}

// 초기 로드 시 최근 배송지 세팅
onMounted(() => {
  setShippingMode('recent')
})
</script>
<template>
  <div class="container">
    <div class="page-header">
      <h1>프로젝트 후원하기</h1>
      <p>서포터님의 소중한 후원이 창작자에게 큰 힘이 됩니다.</p>
    </div>

    <div class="checkout-layout">
      <div class="checkout-forms">
        <div class="funding-notice">
          <strong>💡 펀딩 결제 안내</strong>
          현재 결제가 바로 진행되지 않습니다. 펀딩 종료일인 2026.01.20에 목표 금액이 달성될 경우에만
          결제가 진행됩니다.
        </div>

        <section>
          <h2 class="section-title">선택한 리워드</h2>
          <div class="reward-card">
            <span class="reward-tag">슈퍼 얼리버드</span>
            <div class="reward-info">
              <h3>[세트] 미니멀 라이프 스타터 키트</h3>
              <p class="reward-desc">친환경 캔버스 백 1개 + 제로웨이스트 솝 2종 + 대나무 칫솔</p>
              <div class="reward-price-row">
                <span>45,000원</span>
                <span style="font-size: 14px; color: var(--text-sub); font-weight: 400"
                  >수량 1개</span
                >
              </div>
            </div>

            <div class="support-box">
              <label class="form-label">후원금 더하기 (선택)</label>
              <div class="support-input-wrapper">
                <input type="number" v-model="extraSupport" class="form-input" placeholder="0" />
                <span style="font-weight: 600">원</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="section-title">배송 정보</h2>
          <div class="toggle-btns">
            <button
              class="toggle-btn"
              :class="{ active: currentMode === 'recent' }"
              @click="setShippingMode('recent')"
            >
              최근 배송지
            </button>
            <button
              class="toggle-btn"
              :class="{ active: currentMode === 'new' }"
              @click="setShippingMode('new')"
            >
              새로 입력
            </button>
          </div>

          <div id="shipping-form">
            <div class="form-group">
              <label class="form-label">받는 분</label>
              <input
                type="text"
                v-model="shippingForm.name"
                class="form-input"
                placeholder="이름을 입력해주세요"
              />
            </div>
            <div class="form-group">
              <label class="form-label">휴대폰 번호</label>
              <input
                type="tel"
                v-model="shippingForm.phone"
                class="form-input"
                placeholder="010-0000-0000"
              />
            </div>
            <div class="form-group">
              <label class="form-label">주소</label>
              <div style="display: flex; gap: 8px; margin-bottom: 10px">
                <input
                  type="text"
                  v-model="shippingForm.postcode"
                  class="form-input"
                  style="flex: 0.3"
                  placeholder="우편번호"
                  readonly
                />
                <button
                  type="button"
                  class="apply-btn"
                  style="flex: 0.2; padding: 10px; font-size: 13px"
                >
                  주소찾기
                </button>
              </div>
              <input
                type="text"
                v-model="shippingForm.addressMain"
                class="form-input"
                style="margin-bottom: 10px"
                placeholder="기본 주소"
                readonly
              />
              <input
                type="text"
                v-model="shippingForm.addressDetail"
                class="form-input"
                placeholder="상세 주소를 입력해주세요"
              />
            </div>

            <div class="form-group">
              <label class="form-label">배송 시 요청사항 (선택)</label>
              <select v-model="shippingForm.request" class="form-input">
                <option value="">요청사항을 선택해주세요</option>
                <option value="부재 시 경비실에 맡겨주세요">부재 시 경비실에 맡겨주세요</option>
                <option value="직접 입력">직접 입력</option>
              </select>
              <input
                v-if="shippingForm.request === '직접 입력'"
                type="text"
                v-model="shippingForm.directRequest"
                class="form-input"
                style="margin-top: 10px"
                placeholder="직접 입력 내용을 작성해주세요"
              />
            </div>
          </div>
        </section>
      </div>

      <aside class="order-summary">
        <h2 class="summary-title">후원 요약</h2>
        <div class="summary-row"><span>리워드 금액</span><span>45,000원</span></div>
        <div class="summary-row">
          <span>추가 후원금</span><span>{{ (Number(extraSupport) || 0).toLocaleString() }}원</span>
        </div>
        <div class="summary-row"><span>배송비</span><span>3,000원</span></div>
        <div class="summary-row total">
          <span>최종 후원 금액</span
          ><span class="totalPrice total-price">{{ totalPrice.toLocaleString() }}원</span>
        </div>

        <div class="agreement">
          <label style="display: flex; gap: 8px; cursor: pointer">
            <input type="checkbox" v-model="isAgreed" />
            <span>프로젝트 성공 시 결제됨을 확인하였으며, 펀딩 참여에 동의합니다. (필수)</span>
          </label>
        </div>
        <button type="button" class="checkout-btn" @click="processFunding">후원하기</button>
      </aside>
    </div>
  </div>
</template>

<style>
:root {
  --accent-color: #a39382;
  --accent-hover: #8e7f70;
  --bg-light: #ffffff;
  --text-main: #1a1a1a;
  --text-sub: #666666;
  --border-color: #eeeeee;
  --bg-faint: #f9f8f7;
}
</style>789

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap');

:root, :host {
  --accent-color: #a39382;
  --accent-hover: #8e7f70;
  --bg-light: #ffffff;
  --text-main: #1a1a1a;
  --text-sub: #666666;
  --border-color: #eeeeee;
  --bg-faint: #f9f8f7;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family:
    'Pretendard',
    -apple-system,
    BlinkMacSystemFont,
    system-ui,
    Roboto,
    sans-serif;
  color: var(--text-main);
  background-color: var(--bg-light);
  line-height: 1.6;
}

@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Cormorant+Garamond:ital,wght@0,300;0,500;1,300&family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap');

body {
  font-family: 'Noto Sans KR', sans-serif;
  word-break: keep-all;
}
.luxury-font {
  font-family: 'Cinzel', serif;
}

.icon-btn {
  width: 40px; /* 정렬을 위해 조금 더 정원형으로 보정 */
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(163, 147, 130, 0.3);
  background: #fff;
  color: #a39382;
  border-radius: 9999px;
  transition: all 0.25s ease;
}
.icon-btn:hover {
  background: #a39382;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(163, 147, 130, 0.2);
}

/* Main Container */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 20px;
}

.page-header {
  text-align: center;
  margin-bottom: 50px;
}

.page-header h1 {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-main);
}

.page-header p {
  color: var(--text-sub);
  font-size: 15px;
}

.checkout-layout {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 60px;
  align-items: start;
}

section {
  margin-bottom: 50px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--text-main);
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-main);
}

/* Funding Info Box */
.funding-notice {
  background-color: var(--bg-faint);
  padding: 20px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  margin-bottom: 30px;
  font-size: 14px;
}

.funding-notice strong {
  color: var(--accent-color);
  display: block;
  margin-bottom: 5px;
}

/* Reward Item */
.reward-card {
  border: 1px solid var(--border-color);
  padding: 25px;
  border-radius: 4px;
  margin-bottom: 20px;
}

.reward-tag {
  display: inline-block;
  padding: 4px 10px;
  background-color: #f5f2ef;
  /* 연한 베이지 배경 */
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--accent-color);
}

.reward-info h3 {
  font-size: 17px;
  margin-bottom: 10px;
  color: var(--text-main);
}

.reward-desc {
  font-size: 14px;
  color: var(--text-sub);
  margin-bottom: 15px;
}

.reward-price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
}

/* Support Amount */
.support-box {
  margin-top: 30px;
  padding-top: 25px;
  border-top: 1px dashed var(--border-color);
}

.support-input-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

/* Form Controls */
.form-group {
  margin-bottom: 24px;
}

.form-label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-main);
}

.form-input {
  width: 100%;
  padding: 14px 15px;
  border: 1px solid var(--border-color);
  border-radius: 2px;
  font-size: 14px;
  outline: none;
  color: var(--text-main);
}

.form-input:focus {
  border-color: var(--accent-color);
}

/* Readonly 스타일 */
.form-input[readonly] {
  background-color: var(--bg-faint);
  color: var(--text-sub);
  cursor: not-allowed;
  border-color: var(--border-color);
}

.flex-row {
  display: flex;
  gap: 10px;
}

.apply-btn {
  padding: 0 20px;
  border: 1px solid var(--border-color);
  background: white;
  font-size: 13px;
  cursor: pointer;
  white-space: nowrap;
  color: var(--text-main);
  transition: all 0.2s;
}

.apply-btn:hover {
  border-color: var(--accent-color);
  color: var(--accent-color);
}

/* Radio & Toggle Buttons */
.radio-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
}

.radio-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.radio-item:hover {
  border-color: var(--accent-color);
  background-color: #faf9f8;
}

.radio-item input[type='radio'] {
  accent-color: var(--accent-color);
}

.toggle-btns {
  display: flex;
  gap: 0;
  margin-bottom: 20px;
}

.toggle-btn {
  flex: 1;
  padding: 12px;
  border: 1px solid var(--border-color);
  background: white;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--text-main);
}

.toggle-btn:first-child {
  border-radius: 4px 0 0 4px;
  border-right: none;
}

.toggle-btn:last-child {
  border-radius: 0 4px 4px 0;
}

.toggle-btn.active {
  background-color: var(--accent-color);
  color: white;
  border-color: var(--accent-color);
}

/* Payment Methods */
.payment-methods {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.method-btn {
  padding: 15px;
  border: 1px solid var(--border-color);
  background: white;
  border-radius: 2px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
  color: var(--text-main);
}

.method-btn.active {
  border-color: var(--accent-color);
  background-color: #fcfbf9;
  color: var(--accent-color);
  font-weight: 600;
}

/* Summary Side */
.order-summary {
  position: sticky;
  top: 120px;
  border: 1px solid var(--border-color);
  padding: 30px;
  border-radius: 4px;
  background-color: white;
}

.summary-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-main);
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 14px;
  color: var(--text-sub);
}

.summary-row.total {
  margin-top: 25px;
  padding-top: 25px;
  border-top: 1px solid var(--border-color);
  font-size: 20px;
  font-weight: 700;
  color: var(--text-main);
}

.total-price {
  color: var(--accent-color);
}

.checkout-btn {
  width: 100%;
  padding: 20px;
  background-color: var(--accent-color);
  color: white;
  border: none;
  border-radius: 2px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 30px;
  transition: background-color 0.2s;
}

.checkout-btn:hover {
  background-color: var(--accent-hover);
}

.agreement {
  margin-top: 20px;
  font-size: 12px;
  color: var(--text-sub);
}

.agreement input[type='checkbox'] {
  accent-color: var(--accent-color);
}

.icon-svg {
  width: 22px;
  height: 22px;
  stroke: var(--text-main);
  stroke-width: 1.5;
  fill: none;
}

@media (max-width: 900px) {
  .site-header {
    padding: 0 20px;
    height: 60px;
  }

  .header-nav {
    display: none;
  }

  .checkout-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .order-summary {
    position: static;
  }
}

/* --- 수정된 Header Style --- */
.site-header {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
}

.header-logo {
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 0.2em;
  cursor: pointer;
  text-transform: uppercase;
  color: var(--accent-color);
  text-decoration: none;
  flex: 1;
}

.header-nav {
  display: flex;
  gap: 40px;
  flex: 2;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 500;
}

.nav-link {
  text-decoration: none;
  color: #6b7280; /* gray-500 */
  font-size: 13px;
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

.header-icons {
  display: flex;
  gap: 12px;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
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
  text-decoration: none;
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
