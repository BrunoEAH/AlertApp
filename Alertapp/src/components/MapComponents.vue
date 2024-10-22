<!-- src/components/MapComponent.vue -->
<template>
    <div id="map" class="map"></div>
  </template>
  
  <script lang = "ts">
  import { onMounted } from 'vue';
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  
  export default {
    name: 'MapComponent',
    setup() {
      const initMap = () => {
        // Mapa - zoom e posicao inicial
        const map = L.map('map').setView([-23.5475, -46.63611], 13);
  
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
        }).addTo(map);
  
        L.marker([-23.5475, -46.63611]).addTo(map).bindPopup('Região metropolitana de São Paulo.').openPopup();
      };
  
      onMounted(() => {
        initMap();
      });
  
      return {};
    },
  };
  </script>
  
  <style>
  .map {
    height: 75%;
    width: 100%;
  }
  </style>
  