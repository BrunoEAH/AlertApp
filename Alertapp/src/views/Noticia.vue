<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Notícias</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <!-- Content of the noticias page -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'NoticiasPage',
  setup() {
    onMounted(() => {
      document.title = 'Notícias'; // Update the document title or any other title management
    });
  },
});
</script>

