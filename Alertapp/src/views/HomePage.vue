<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">Escolha uma opção.
      <ion-list>
       
        <ion-item button @click="goToNoticias">
          <ion-icon slot="start" :icon="bookOutline"></ion-icon>
          <ion-label>Notícias</ion-label>
        </ion-item>
      
        <ion-item button @click="goToMapa">
          <ion-icon slot="start" :icon="globeOutline"></ion-icon>
          <ion-label>Mapa</ion-label>
        </ion-item>

        <ion-item button @click="goToEmergencia">
          <ion-icon slot="start" :icon="heartCircleOutline"></ion-icon>
          <ion-label>Emergência</ion-label>
        </ion-item>

        <ion-item button @click="goToRelatorio">
          <ion-icon slot="start" :icon="documentTextOutline"></ion-icon>
          <ion-label>Relatório</ion-label>
        </ion-item>

        <ion-item button @click="goToPerfil">
          <ion-icon slot="start" :icon="personCircleOutline"></ion-icon>
          <ion-label>Perfil</ion-label>
        </ion-item>

      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Alertapp</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content color="light">
      <ion-list inset="true">
        <ion-item button detail="false">
          <div class="unread-indicator-wrapper" slot="start">
            <div class="unread-indicator"></div>
          </div>
          <ion-label>
            <strong>ALERTA</strong>
            <ion-text>Queimada</ion-text><br />
            <ion-note color="medium" class="ion-text-wrap">
              Queimada nas estradas de Ribeirão Preto-SP.
            </ion-note>
          </ion-label>
          <div class="metadata-end-wrapper" slot="end">
            <ion-note color="medium">06:11</ion-note>
            <ion-icon color="medium" :icon="chevronForward"></ion-icon>
          </div>
        </ion-item>

        <ion-item button detail="false">
          <div class="unread-indicator-wrapper" slot="start"></div>
          <ion-label>
            <strong>EMERGÊNCIA</strong>
            <ion-text>Sua solicitação</ion-text><br />
            <ion-note color="medium" class="ion-text-wrap">
              Seu pedido de socorro já foi recebido. As autoridades estão a caminho.
            </ion-note>
          </ion-label>
          <div class="metadata-end-wrapper" slot="end">
            <ion-note color="medium">03:44</ion-note>
            <ion-icon color="medium" :icon="chevronForward"></ion-icon>
          </div>
        </ion-item>

        <ion-item button detail="false">
          <div class="unread-indicator-wrapper" slot="start">
            <div class="unread-indicator"></div>
          </div>
          <ion-label>
            <strong>NOTÍCIA</strong>
            <ion-text>Região Metropolitana de São Paulo</ion-text><br />
            <ion-note color="medium" class="ion-text-wrap">
              Deslizamento próximo ao bairro de Heliópolis.
            </ion-note>
          </ion-label>
          <div class="metadata-end-wrapper" slot="end">
            <ion-note color="medium">Ontem</ion-note>
            <ion-icon color="medium" :icon="chevronForward"></ion-icon>
          </div>
        </ion-item>

        <ion-item button detail="false">
          <div class="unread-indicator-wrapper" slot="start"></div>
          <ion-label>
            <strong>NOTÍCIA</strong>
            <ion-text>Região Sudeste</ion-text><br />
            <ion-note color="medium" class="ion-text-wrap">
              Alagamento em Ouro Preto, Minas Gerais.
            </ion-note>
          </ion-label>
          <div class="metadata-end-wrapper" slot="end">
            <ion-note color="medium">Ontem</ion-note>
            <ion-icon color="medium" :icon="chevronForward"></ion-icon>
          </div>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButtons,
  IonMenuButton,
  IonMenu,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonText,
  IonTitle,
  IonToolbar,
  IonPage,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { chevronForward, listCircle, bookOutline, personCircleOutline, documentTextOutline, heartCircleOutline, globeOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router'; 
import EmergenciaPage from './EmergenciaPage.vue';


export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonNote,
    IonText,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenu,
    IonMenuButton,
    IonPage,
  },
  setup() {

    const router = useRouter();

    const goToNoticias = () => {
      console.log('Noticias');
      router.push('/noticia');
    };
    const goToEmergencia = () => {
      console.log('Emergencia');
      router.push('/emergencia');
    };
    const goToPerfil = () => {
      console.log('Perfil');
      router.push('/perfil');
    };
    const goToRelatorio = () => {
      console.log('Relatorio');
      router.push('/relatorio');
    };
    const goToMapa = () => {
      console.log('Mapa');
      router.push('/mapa');
    };

    return { 
      chevronForward, 
      listCircle,
      goToMapa,
      goToRelatorio,
      goToEmergencia,
      goToNoticias,
      goToPerfil,
      component: EmergenciaPage
    };
  },
});

</script>

<style scoped>
.unread-indicator {
  background: var(--ion-color-primary);
  width: 10px;
  height: 10px;
  border-radius: 100%;
  position: absolute;
  inset-inline-start: 12px;
  top: 12px;
}

.metadata-end-wrapper {
  position: absolute;
  top: 10px;
  inset-inline-end: 10px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
}

ion-label strong {
  display: block;
  max-width: calc(100% - 60px);
  overflow: hidden;
  text-overflow: ellipsis;
}

ion-label ion-note {
  font-size: 0.9rem;
}

ion-item {
  --ion-item-background: var(--ion-color-light);
  --ion-item-hover-background: var(--ion-color-primary-shade);
}
</style>
