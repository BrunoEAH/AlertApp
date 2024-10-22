<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>

        <!-- Back Button-->
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/noticia"></ion-back-button>
        </ion-buttons>

        <ion-title>
          <!-- Ionicon Profile Icon in the Header -->
          <ion-icon :icon="heartIcon" size="large"></ion-icon> Emergência
        </ion-title>
      </ion-toolbar>
    </ion-header>


  <ion-content color="light">
    <!-- First list with checkboxes and toggles -->
    <ion-list inset="true">
      <ion-item>
        <ion-checkbox slot="start"></ion-checkbox>
        <ion-label>Dados da conta</ion-label>
      </ion-item>
      <ion-item>
        <ion-toggle slot="start"></ion-toggle>
        <ion-label>Localização</ion-label>
      </ion-item>
    </ion-list>

    <!-- Second list with input -->
    <ion-list inset="true">
      <ion-item>
        <ion-input label="Descrição da situação" placeholder="(Opcional)"></ion-input>
      </ion-item>
    </ion-list>

    <!-- Button to present the alert -->
    <ion-button id="present-alert">SOLICITAR</ion-button>

    <!-- Alert component -->
    <ion-alert
      trigger="present-alert"
      header="Alert!"
      :buttons="alertButtons"
      @didDismiss="logResult"
    ></ion-alert>
  </ion-content>

  </ion-page>
</template>

<script lang="ts">
import {
  IonBackButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonInput,
  IonAlert,
  IonButton,
  IonItem,
  IonLabel,
  IonList,
  IonToggle,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import { heartOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonBackButton,
    IonButtons,
    IonCheckbox,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonTitle,
    IonToggle,
    IonToolbar,
    IonAlert,
    IonButton,
  },
  setup() {
    const alertButtons = [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Alert canceled');
        },
      },
      {
        text: 'Enviar',
        role: 'confirm',
        handler: () => {
          console.log('Alert confirmed');
        },
      },
    ];

    const logResult = (ev: CustomEvent) => {
      console.log(`Dismissed with role: ${ev.detail.role}`);
    };

    const heartIcon = heartOutline;


    return {
      alertButtons,
      logResult,
      heartIcon
    };
  },
});
</script>

<style scoped>

ion-title ion-icon {
  margin-right: 10px;
}
</style>