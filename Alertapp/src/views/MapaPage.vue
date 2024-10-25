<!-- src/views/Mapa.vue -->

<style scoped>
  .example-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>


<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Mapa</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <MapComponent />
    </ion-content>
  </ion-page>
</template>

<script setup>
import MapComponent from '@/components/MapComponents.vue';
</script>

<style scoped>
ion-content {
  --padding-top: 0;
  --padding-bottom: 0;
}
</style>
