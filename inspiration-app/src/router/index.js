import { createRouter, createWebHashHistory } from 'vue-router'
import QuoteView from '../views/QuoteView.vue'

function today() {
  console.log("today");
  return new Date().toLocaleString("en-GB", {day: "numeric", month: "short"}).replace(/\./g, "").replace(" ", "-").toLowerCase();
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/:category/:day',
      name: 'quote',
      component: QuoteView
  },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
  },
    {
      path: '/search/:author',
      name: 'search',
      component: () => import('../views/SearchView.vue'),
      props: true
  },
    {
      // default redirect to show the quote of today
      path: '/',
      redirect: '/happiness/' + today()
  }
  ]
})

export default router
