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
        component: () => import('../views/HomePage.vue')
      },
      {
        path: 'noticia',
        component: () => import('../views/NoticiaPage.vue')
      },
      {
        path: 'mapa',
        component: () => import('../views/MapaPage.vue')
      },
      {
        path: 'relatorio',
        component: () => import('../views/RelatorioPage.vue')
      },
      {
        path: 'perfil',
        component: () => import('../views/PerfilPage.vue')
      },
      {
        path: 'emergencia',
        component: () => import('../views/EmergenciaPage.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
