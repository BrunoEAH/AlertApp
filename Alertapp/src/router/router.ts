import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from './views/TabsPage.vue';
import BottomTab from '../components/BottomTab.vue';


const routes: Array<RouteRecordRaw> = [
      {
        path: '/tabs/noticia',
        component: () => import('../views/Noticia.vue'),
      },
      {
        path: '/tabs/mapa',
        component: () => import('../views/Mapa.vue'),
      },
      {
        path: '/tabs/relatorio',
        component: () => import('../views/Relatorio.vue'),
      },
      {
        path: '/tabs/perfil',
        component: () => import('../views/Perfil.vue'),
      },
      {
        path: '/tabs/emergencia',
        component: () => import('../views/Emergencia.vue'),
      },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
