import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout.vue'
import Home from '@/views/Home.vue'
import Products from '@/views/Products.vue'
import Contact from '@/views/Contact.vue'
import Details from '@/views/Details/[id].vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: { title: 'Home' },
      },
      {
        path: '/products',
        name: 'Products',
        component: Products,
        meta: { title: 'Products' },
      },
      {
        path: '/products/:id',
        name: 'ProductDetails',
        component: Details,
        props: true,
        meta: { title: 'Product Details' },
      },
      {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        meta: { title: 'Contact Us' },
      },
    ],
  },
  // Catch-all route for 404 or redirection
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
