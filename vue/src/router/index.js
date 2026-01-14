// 하나인 것처럼 만들어주는 것
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      name: 'login',
      path: '/login',
      meta: {
        title: ' 로그인 페이지',
        requiresAuth: false,
      },
      component: () => import('../views/Login.vue'),
    },
    {
      name: 'signup',
      path: '/signup',
      meta: {
        title: ' 회원가입 페이지',
        requiresAuth: false,
      },
      component: () => import('../views/Signup.vue'),
    },
    {
      path: '/',
      component: () => import('../layout/Mainlayout.vue'),
      children: [
        {
          name: 'Main_auction',
          path: 'auction/Main_auction',
          meta: {
            title: '메인 경매',
            requiresAuth: false,
          },
          component: () => import('../views/auction/Main_auction.vue'),
        },
        {
          name: 'auction_desc',
          path: 'auction/auction_desc/:num',
          meta: {
            title: '경매 상품 설명',
            requiresAuth: false,
          },
          component: () => import('../views/auction/Auction_desc.vue'),
        },
        {
          name: 'auction_end',
          path: 'auction/auction_end',
          meta: {
            title: '경매 end',
            requiresAuth: false,
          },
          component: () => import('../views/auction/Auction_end.vue'),
        },
        {
          name: 'auction_list',
          path: 'auction/auction_list',
          meta: {
            title: '경매 상품 리스트',
            requiresAuth: false,
          },
          component: () => import('../views/auction/Auction_list.vue'),
        },

        {
          name: 'payment',
          path: 'features/payment',
          meta: {
            title: '결제',
            requiresAuth: true,
          },
          component: () => import('../views/features/Payment.vue'),
        },
        {
          name: 'serch',
          path: 'features/serch',
          meta: {
            title: '검색',
            requiresAuth: true,
          },
          component: () => import('../views/features/Search.vue'),
        },

        {
          name: 'funding_desc',
          path: 'funding/funding_desc/:num',
          component: () => import('../views/funding/Funding_desc.vue'),
        },
        {
          name: 'funding_list',
          path: 'funding/funding_list',
          component: () => import('../views/funding/Funding_list.vue'),
        },
        {
          name: 'main_funding',
          path: 'funding/main_funding',
          component: () => import('../views/funding/Main_funding.vue'),
        },

        { path: 'users/add_points', component: () => import('../views/users/Add_points.vue') },
        { path: 'users/mypage', component: () => import('../views/users/Mypage.vue') },
        { path: 'users/shipping', component: () => import('../views/users/Shipping.vue') },
        {
          path: 'users/user_information',
          component: () => import('../views/users/User_information.vue'),
        },
        { path: 'users/wish_list', component: () => import('../views/users/Wish_list.vue') },
        { path: 'users/ask', component: () => import('../views/users/Ask.vue') },
      ],
    },
  ],
})

export default router

router.beforeEach((to, from, next) => {
  console.log('vue에서 링크를 이동할 때 매번 실행되는 함수')

  // 페이지를 이동할때, 탭에 나오는 title를 다르게 뜰 수 있게 설정
  document.title = to.meta.title

  // meta에 있는 requiresAuth 참이면
  if (to.meta.requiresAuth) {
    // 꼭 로컬스토리지에서 확인하는 방법 말고도 백엔드에서 확인하는 방법도 있음
    // 로그인한 사람인지 확인하고 안했으면

    // 브라우저에 저장 되어 있는 localStorage 에 USERINFO가 없다면
    if (localStorage.getItem('USERINFO') == null) {
      // 로그인 페이지로 이동 /
      // query는 주소에 ?를 사용해서 하는거 / {redirect : to.fullPath} 사용자를 로그인 페이지로 보내고 원래 가려고 했던 곳을 저장하여 로그인을 하면 갈 수 있도록 설정
      next({ name: 'login', query: { redirect: to.fullPath } })
    }
  }
  next()
})
