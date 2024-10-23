<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <!-- Back Button-->
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/noticia"></ion-back-button>
        </ion-buttons>

        <ion-title>

          <ion-icon :icon="heartIcon" size="large"></ion-icon> Emergência
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-toolbar color="light">
        <ion-text>
          <p>Ao solicitar socorro, você estará concordando com nossos termos e estará ciente de que as autoridades serão contatadas.</p>
        </ion-text>
      </ion-toolbar>
  
    <ion-content color="light">
      <!--checkboxes -->
      <ion-list inset="true">
        <ion-item>
          <ion-checkbox slot="start"></ion-checkbox>
          <ion-label>Dados da conta</ion-label>
        </ion-item>
        <ion-label>
            <ion-text color="medium">
              <p>Eu concordo em fornecer todos os dados da minha conta para solicitar o socorro.</p>
            </ion-text>
          </ion-label>
        <ion-item>
          <ion-toggle slot="start"></ion-toggle>
          <ion-label>Localização</ion-label>
        </ion-item>
        <ion-label>
            <ion-text color="medium">
              <p>É necessário fornecer a localização.</p>
            </ion-text>
          </ion-label>
      </ion-list>

      <!--Textbox-->
      <ion-list inset="true">
        <ion-item>
          <ion-label position="stacked">Descrição da situação</ion-label>
          <ion-textarea v-model="description" placeholder="(Opcional)" rows="6"></ion-textarea>
        </ion-item>
      </ion-list>


      <!--Botoes -->
      <div class="button-container">
        <ion-button id="present-alert" color="danger">SOLICITAR</ion-button>
      </div>

      <div class="button-container">
        <ion-button id="present-alert">CANCELAR</ion-button>
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
