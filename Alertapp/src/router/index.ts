import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';
import BottomTab from '../components/BottomTab.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        component: () => import('../views/Home.vue')
      },
      {
        path: 'noticia',
        component: () => import('../views/Noticia.vue')
      },
      {
        path: 'mapa',
        component: () => import('../views/Mapa.vue')
      },
      {
        path: 'relatorio',
        component: () => import('../views/Relatorio.vue')
      },
      {
        path: 'perfil',
        component: () => import('../views/Perfil.vue')
      },
      {
        path: 'emergencia',
        component: () => import('../views/Emergencia.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
