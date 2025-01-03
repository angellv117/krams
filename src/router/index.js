import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/Admin/index.vue'
import AddProduct from '../views/Products/AddProduct.vue'
import Index from '../views/Products/Index.vue'
import AdminPanel from '../views/Products/AdminPanel.vue'
import ViewProduct from '../views/Products/ViewProduct.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'karm´s'
    }
  },
  {
    path: '/administracionKrams',
    name: 'admin',
    component: AdminView,
  },
  {
    path: '/agregarProducto',
    name: 'agregarProducto',
    component: AddProduct,
  },
  {
    path: '/productos',
    name: 'productos',
    component: Index,
  },
  {
    path: '/adminPanel',
    name: 'adminPanel',
    component: AdminPanel,
  },
  {
    path: '/producto/:id',
    name: 'ViewProduct',
    component: () => import('../views/Products/ViewProduct.vue'),
    props: true
  },
  {
    path: '/editarProducto/:id',
    name: 'EditProduct',
    component: () => import('../views/Products/EditProduct.vue'),
    props: true
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
