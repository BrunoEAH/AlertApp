<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <!-- Back Button-->
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>
          <ion-icon :icon="documentTextOutline"></ion-icon>Relatório
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-toolbar color="light">
      <ion-text>
        <p>Ficou sabendo de algum desastre? Compartilhe conosco.</p>
      </ion-text>
    </ion-toolbar>

    <ion-content color="light" :fullscreen="true" class="ion-padding">
      <!-- Textboxes -->
      <ion-list inset="true">
        <ion-item>
          <ion-label position="stacked">Tipo de acidente:</ion-label>
          <ion-textarea v-model="description" placeholder="(Opcional)" rows="6"></ion-textarea>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Local, data e hora:</ion-label>
          <ion-textarea v-model="localDataHora" placeholder="(Opcional)" rows="6"></ion-textarea>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Comunidades atingidas:</ion-label>
          <ion-textarea v-model="comunidadesAtingidas" placeholder="(Opcional)" rows="6"></ion-textarea>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Descreva o tipo de ajuda que precisa:</ion-label>
          <ion-textarea v-model="tipoAjuda" placeholder="(Opcional)" rows="6"></ion-textarea>
        </ion-item>
        <ion-item>
          <ion-checkbox slot="start" v-model="shareData"></ion-checkbox>
          <ion-label>Compartilhar dados da conta</ion-label>
        </ion-item>
      </ion-list>

      <!-- Buttons -->
      <div class="button-container">
        <ion-button color="danger" @click="sendReport">Enviar</ion-button>
      </div>
      <div class="button-container">
        <ion-button @click="cancelReport">Cancelar</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonBackButton,
  IonIcon,
  IonText,
  IonPage,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonTextarea,
  IonButton,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { toastController } from '@ionic/vue';
import { documentTextOutline } from 'ionicons/icons';

export default defineComponent({
  components: {
    IonBackButton,
    IonButtons,
    IonCheckbox,
    IonIcon,
    IonText,
    IonContent,
    IonPage,
    IonHeader,
    IonTextarea,
    IonButton,
    IonItem,
    IonLabel,
    IonList,
    IonTitle,
    IonToolbar,
  },
  setup() {
    const router = useRouter();

    // Reactive data properties
    const description = ref('');
    const localDataHora = ref('');
    const comunidadesAtingidas = ref('');
    const tipoAjuda = ref('');
    const shareData = ref(false);

    const fileIcon = documentTextOutline;

    // Function to send the report
    const sendReport = async () => {
      // Logic to send the report
      console.log('Report sent:', {
        description: description.value,
        localDataHora: localDataHora.value,
        comunidadesAtingidas: comunidadesAtingidas.value,
        tipoAjuda: tipoAjuda.value,
        shareData: shareData.value,
      });
      await presentToast();
      // Optionally navigate to home after sending the report
      router.push('/home');
    };

    // Function to cancel the report
    const cancelReport = () => {
      console.log('Report canceled');
      // Optionally navigate back to home or previous page
      router.push('/home');
    };

    // Function to present a toast message
    const presentToast = async () => {
      const toast = await toastController.create({
        message: 'Relatório enviado com sucesso',
        duration: 1500,
        position: 'middle',
      });
      await toast.present();
    };

    return {
      description,
      localDataHora,
      comunidadesAtingidas,
      tipoAjuda,
      shareData,
      fileIcon,
      documentTextOutline,
      description,
      sendReport,
      cancelReport,
    };
  },
});
</script>

<style scoped>
ion-title ion-icon {
  margin-right: 10px;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
