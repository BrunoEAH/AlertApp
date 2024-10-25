<template>
    <ion-nav :root="component"></ion-nav>
  </template>
  
  <script lang="ts">
    import { IonNav } from '@ionic/vue';
    import HomePage from '../views/HomePage.vue';
  
    export default {
      components: { IonNav },
      data() {
        return {
          component: HomePage,
        };
      },
    };
  </script>