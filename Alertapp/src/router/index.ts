import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue';
import Noticia from '../views/Noticia.vue';
import Emergencia from '../views/Emergencia.vue';
import Perfil from '../views/Perfil.vue';
import Relatorio from '../views/Relatorio.vue';
import Mapa from '../views/Mapa.vue';


const routes = [
      {
        path: '/tabs/noticia',
        name: 'Noticia',
        component: Noticia,
      },
      {
        path: '/tabs/mapa',
        name: 'Mapa',
        component: Mapa,
      },
      {
        path: '/tabs/relatorio',
        name: 'Relatorio',
        component: Relatorio,
      },
      {
        path: '/tabs/perfil',
        name: 'Perfil',
        component: Perfil,
      },
      {
        path: '/tabs/emergencia',
        name: 'Emergencia',
        component: Emergencia,
      }
    ];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
