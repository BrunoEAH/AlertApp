<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button default-href="/"></ion-back-button>
      </ion-buttons>
      <ion-title>Emergência</ion-title>
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

  <ion-footer>
    <ion-toolbar>
      <ion-title>Footer</ion-title>
    </ion-toolbar>
  </ion-footer>
</template>

<script lang="ts">
import {
  IonBackButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonFooter,
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
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonBackButton,
    IonButtons,
    IonCheckbox,
    IonContent,
    IonFooter,
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

    return {
      alertButtons,
      logResult,
    };
  },
});
</script>
