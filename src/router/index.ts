import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: { title: 'Home' },
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import('@/views/Products.vue'),
        meta: { title: 'Products' },
      },
      {
        path: '/products/:id',
        name: 'ProductDetails',
        component: () => import('@/views/Products.vue'),
        props: true,
        meta: { title: 'Product Details' },
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/views/Contact.vue'),
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
  history: createWebHistory(),
  routes,
})

export default router
