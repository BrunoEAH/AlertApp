<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <!-- Go Back Button -->
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        
        <ion-title>Mapa</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content>
      <div class="map-container">
        <MapComponent />
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import MapComponent from '@/components/MapComponents.vue';
import { IonBackButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue';

export default defineComponent({
  components: {
    IonBackButton,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    MapComponent,
  },
});
</script>

<style scoped>
ion-content {
  --padding-top: 0;
  --padding-bottom: 0;
}

.map-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full viewport height */
  width: 100%;   /* Full width */
}
</style>
