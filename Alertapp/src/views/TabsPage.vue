<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="noticia" href="/tabs/noticia">
          <ion-icon aria-hidden="true" :icon="bookOutline" />
          <ion-label>Notícias</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="mapa" href="/tabs/mapa">
          <ion-icon aria-hidden="true" :icon="globeOutline" />
          <ion-label>Mapa</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="emergencia" href="/tabs/emergencia">
          <ion-icon aria-hidden="true" :icon="heartCircleOutline" />
          <ion-label>Emergência</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="relatorio" href="/tabs/relatorio">
          <ion-icon aria-hidden="true" :icon="documentTextOutline" />
          <ion-label>Relatório</ion-label>
        </ion-tab-button>
        <ion-icon name="document-text-outline"></ion-icon>
        <ion-tab-button tab="perfil" href="/tabs/perfil">
          <ion-icon aria-hidden="true" :icon="personCircleOutline" />
          <ion-label>Perfil</ion-label>
        </ion-tab-button>
        <ion-icon ></ion-icon>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { bookOutline, personCircleOutline, documentTextOutline, heartCircleOutline, globeOutline} from 'ionicons/icons';
</script>
