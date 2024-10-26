<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <!-- Go Back Button -->
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        
        <ion-title>
          <ion-icon :icon="globeOutline" size="large"></ion-icon>Mapa
        </ion-title>
      </ion-toolbar>

    <ion-toolbar>
        <ion-searchbar 
          v-model="searchQuery" 
          placeholder="Buscar cidade..." 
          show-clear-button="always"
        ></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="map-container">
        <MapComponent />
      </div>
      <ion-header>
      <ion-toolbar>
        <ion-title>Regiões favoritas</ion-title>
      </ion-toolbar>
    </ion-header>
      <ion-content class="ion-padding">
      <div class="radio-group-container">
        <ion-radio-group v-model="selectedRegion">
          <ion-list>
            <ion-item class="radio-item">
              <ion-label class="radio-label">Região Metropolitana de São Paulo</ion-label>
              <ion-radio slot="start" value="saopaulo"></ion-radio>
            </ion-item>
            <ion-item class="radio-item">
              <ion-label class="radio-label">Microrregião de Marília</ion-label>
              <ion-radio slot="start" value="marilia"></ion-radio>
            </ion-item>
            <ion-item class="radio-item">
              <ion-label class="radio-label">Sudeste</ion-label>
              <ion-radio slot="start" value="sudeste"></ion-radio>
            </ion-item>
          </ion-list>
        </ion-radio-group>
        </div>
        </ion-content>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import MapComponent from '@/components/MapComponents.vue';
import { IonRadioGroup,IonSearchbar,IonRadio,IonBackButton,IonIcon,IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue';
import {globeOutline} from 'ionicons/icons';
export default defineComponent({
  components: {
    IonBackButton,
    IonButtons,
    IonRadioGroup,
    IonSearchbar,
    IonIcon,
    IonHeader,
    IonRadio,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    MapComponent,
  },
  setup(){return {globeOutline};}
});
</script>

<style scoped>

ion-title ion-icon {
  margin-right: 10px;
  margin-top: -50 px;
}


ion-content {
  --padding-top: 0;
  --padding-bottom: 0;
}

.map-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh; /* Full viewport height */
  width: 100%;   /* Full width */
}
.radio-group-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.radio-item {
  font-size: 1.2rem; /* Larger text for radio options */
  margin: 1rem 0; /* Space between items */
  text-align: center; /* Centered text */
}

.radio-label {
  font-size: 1.1rem; /* Larger label text */
}

ion-radio {
  --size: 28px; /* Increase radio button size */
}

ion-label {
  font-weight: bold; /* Optional: make label bold */
}
</style>
