<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <!-- Back Button-->
        <ion-buttons slot="start">
          <ion-back-button tab="home" default-href="/tabs/home"></ion-back-button>
        </ion-buttons>

        <ion-title>

          <ion-icon name="document-text-outline"></ion-icon>Relatório
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-toolbar color="light">
        <ion-text>
          <p>Ficou sabendo de algum desastre? Compartilhe conosco.</p>
        </ion-text>
      </ion-toolbar>
  
    <ion-content color="light">

      <!--Textbox-->
      <ion-list inset="true">
        <ion-item>
          <ion-label position="stacked">Tipo de acidente:</ion-label>
          <ion-textarea v-model="description" placeholder="(Opcional)" rows="6"></ion-textarea>
        </ion-item>
      </ion-list>
      
            <!--Textbox-->
            <ion-list inset="true">
        <ion-item>
          <ion-label position="stacked">Local, data e hora:</ion-label>
          <ion-textarea v-model="description" placeholder="(Opcional)" rows="6"></ion-textarea>
        </ion-item>
      </ion-list>

            <!--Textbox-->
            <ion-list inset="true">
        <ion-item>
          <ion-label position="stacked">Comunidades atingidas:</ion-label>
          <ion-textarea v-model="description" placeholder="(Opcional)" rows="6"></ion-textarea>
        </ion-item>
      </ion-list>

            <!--Textbox-->
            <ion-list inset="true">
        <ion-item>
          <ion-label position="stacked">Descreva o tipo de ajuda que precisa:</ion-label>
          <ion-textarea v-model="description" placeholder="(Opcional)" rows="6"></ion-textarea>
        </ion-item>
      </ion-list>

      <ion-item>
          <ion-checkbox slot="start"></ion-checkbox>
          <ion-label>Compartilhar dados da conta</ion-label>
        </ion-item>

      <!--Botoes -->
      <div class="button-container">
        <ion-button id="present-alert" color="danger">Enviar</ion-button>
      </div>

      <div class="button-container">
        <ion-button id="present-alert">Cancelar</ion-button>
      </div>
      

      <!-- Alert component -->
      <ion-alert
        trigger="present-alert"
        class="custom-alert"
        header="Você tem certeza que deseja enviar um alerta?"
        :buttons="alertButtons"
        @didDismiss="logResult"
      ></ion-alert>
    </ion-content>
  </ion-page>
</template>


<script lang="ts">
import ExploreContainer from '@/components/ExploreContainer.vue';
import {
  IonBackButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonTextarea,
  IonAlert,
  IonButton,
  IonItem,
  toastController,
  IonLabel,
  IonList,
  IonToggle,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import { heartOutline } from 'ionicons/icons';
import { defineComponent, ref, getCurrentInstance } from 'vue';

export default defineComponent({
  components: {
    IonBackButton,
    IonButtons,
    IonCheckbox,
    IonContent,
    IonHeader,
    IonTextarea,
    IonItem,
    IonLabel,
    IonList,
    IonTitle,
    IonToggle,
    IonToolbar,
    IonAlert,
    IonButton,
  },
  methods: {
    async presentToast() {
      const toast = await toastController.create({
        message: 'Alerta enviado com sucesso',
        duration: 1500,
        position: 'middle',
      });
      await toast.present();
    },
  },
  setup() {
    const { proxy } = getCurrentInstance()!;

    const alertButtons = [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancelado');
        },
      },
      {
        text: 'Enviar',
        role: 'confirm',
        cssClass: 'alert-button-confirm',
        handler: () => {
          console.log('Confirmado');
          proxy.presentToast();
        },
      },
    ];

    const logResult = (ev: CustomEvent) => {
      console.log(`Dismissed with role: ${ev.detail.role}`);
    };

    const heartIcon = heartOutline;
    const description = ref('');

    return {
      alertButtons,
      logResult,
      heartIcon,
      description,
    };
  },
});

</script>


<style scoped>
ion-title ion-icon {
  margin-right: 10px;
}

ion-label p {
  font-size: 12px;
  margin: 0;
}

/* Centralize button */
.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

ion-alert.custom-alert {
  --backdrop-opacity: 0.7;
}

.custom-alert .alert-button-group {
  padding: 8px;
}

/* Custom style for the red 'Enviar' button */
button.alert-button-confirm {
  background-color: var(--ion-color-danger); /* Red for danger */
  color: var(--ion-color-danger-contrast);
}

/* Ensuring button styles apply correctly across platforms */
.md button.alert-button-confirm {
  border-radius: 4px;
}

.ios button.alert-button-confirm {
  border-bottom-right-radius: 13px;
  border-top-right-radius: 13px;
}

.ios button.alert-button-cancel {
  border-bottom-left-radius: 13px;
  border-top-left-radius: 13px;
}
</style>
