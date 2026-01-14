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

tou
