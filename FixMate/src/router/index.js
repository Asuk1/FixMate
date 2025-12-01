import { createRouter, createWebHistory } from 'vue-router'
import RoleSelection from '@/views/RoleSelection.vue'
import Dashboard from '@/views/Dashboard.vue'
import ApartmentDetail from '@/views/ApartmentDetail.vue'

const routes = [
  {
    path: '/',
    name: 'RoleSelection',
    component: RoleSelection
  },
  {
    path: '/dashboard/:role',
    name: 'Dashboard',
    component: Dashboard,
    props: true
  },
  {
    path: '/apartment/:role/:id',
    name: 'ApartmentDetail',
    component: ApartmentDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router