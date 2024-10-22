<template>
    <ion-page>
      <ion-tabs>
        <ion-tab-bar slot="bottom">
          <!-- Noticias -->
          <ion-tab-button tab="noticia" href="/tabs/noticia">
            <ion-icon :icon="bookIcon"></ion-icon>
            <ion-label>Notícias</ion-label>
          </ion-tab-button>
  
          <!-- Mapa -->
          <ion-tab-button tab="mapa" href="/tabs/mapa">
            <ion-icon :icon="globeIcon"></ion-icon>
            <ion-label>Mapa</ion-label>
          </ion-tab-button>
  
          <!-- Emergência -->
          <ion-tab-button tab="emergencia" href="/tabs/emergencia">
            <ion-icon :icon="heartIcon"></ion-icon>
            <ion-label>Emergência</ion-label>
          </ion-tab-button>
  
          <!-- Relatório -->
          <ion-tab-button tab="relatorio" href="/tabs/relatorio">
            <ion-icon :icon="documentTextIcon"></ion-icon>
            <ion-label>Relatório</ion-label>
          </ion-tab-button>
  
          <!-- Perfil -->
          <ion-tab-button tab="perfil" href="/tabs/perfil">
            <ion-icon :icon="personCircleIcon"></ion-icon>
            <ion-label>Perfil</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-page>
  </template>
  
  <script>
  import { addIcons } from 'ionicons';
  import { 
    bookOutline, 
    documentTextOutline, 
    personCircleOutline, 
    heartOutline, 
    globeOutline 
  } from 'ionicons/icons';
  
  export default {
    data() {
      return {
        bookIcon: bookOutline,
        documentTextIcon: documentTextOutline,
        personCircleIcon: personCircleOutline,
        globeIcon: globeOutline,
        heartIcon: heartOutline,
      };
    },
    created() {
      addIcons({
        'book-outline': bookOutline,
        'document-text-outline': documentTextOutline,
        'person-circle-outline': personCircleOutline,
        'globe-outline': globeOutline,
        'heart-outline': heartOutline,
      });
    }
  };
  </script>
  