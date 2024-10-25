<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Alertapp - Página Principal</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content color="light">
      <ion-list :inset="true">
        <ion-item :button="true" detail="false">
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
        <ion-item :button="true" detail="false">
          <div class="unread-indicator-wrapper" slot="start"></div>
          <ion-label>
            <strong>EMERGÊNCIA</strong>
            <ion-text>Sua solicitação</ion-text><br />
            <ion-note color="medium" class="ion-text-wrap">Seu pedido de socorro já foi recebido. As autoridades estão a caminho.</ion-note>
          </ion-label>
          <div class="metadata-end-wrapper" slot="end">
            <ion-note color="medium">03:44</ion-note>
            <ion-icon color="medium" :icon="chevronForward"></ion-icon>
          </div>
        </ion-item>
        <ion-item :button="true" detail="false">
          <div class="unread-indicator-wrapper" slot="start">
            <div class="unread-indicator"></div>
          </div>
          <ion-label>
            <strong>NOTÍCIA</strong>
            <ion-text>Região  Metrolpolitana de São Paulo</ion-text><br />
            <ion-note color="medium" class="ion-text-wrap">
              Deslizamento próximo ao bairro de Heliópolis.
            </ion-note>
          </ion-label>
          <div class="metadata-end-wrapper" slot="end">
            <ion-note color="medium">Ontem</ion-note>
            <ion-icon color="medium" :icon="chevronForward"></ion-icon>
          </div>
        </ion-item>
        <ion-item :button="true" detail="false">
          <div class="unread-indicator-wrapper" slot="start"></div>
          <ion-label>
            <strong>NOTÍCIA</strong>
            <ion-text>Região Sudeste</ion-text><br />
            <ion-note color="medium" class="ion-text-wrap">Alagamento em Ouro Pretos, Minas Gerais.</ion-note>
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
    } from '@ionic/vue';
    import { defineComponent } from 'vue';
    import { chevronForward, listCircle } from 'ionicons/icons';
  
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
      },
      setup() {
        return { chevronForward, listCircle };
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
  </style>