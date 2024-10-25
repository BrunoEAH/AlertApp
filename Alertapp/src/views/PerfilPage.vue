<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>
          <ion-icon :icon="personCircleIcon" size="large"></ion-icon> Perfil
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="profile-header">
        <ion-avatar class="profile-avatar">
          <img :src="profileImage" alt="Profile Picture" />
        </ion-avatar>
        <ion-button fill="clear" @click="changeProfilePicture">Change Picture</ion-button>
      </div>

      <ion-list>
        <ion-item>
          <ion-label position="stacked">Nome</ion-label>
          <ion-input v-model="profile.name" placeholder="Coloque seu nome"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Sobrenome</ion-label>
          <ion-input v-model="profile.surname" placeholder="Coloque seu sobrenome"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Email</ion-label>
          <ion-input type="email" v-model="profile.email" placeholder="Coloque seu email"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">CPF</ion-label>
          <ion-input type="tel" v-model="profile.cpf" placeholder="Coloque seu CPF"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Data de Nascimento</ion-label>
          <ion-input type="tel" v-model="profile.nascimento" placeholder="Coloque sua data de nascimento"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Celular</ion-label>
          <ion-input type="tel" v-model="profile.celular" placeholder="Coloque seu celular"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Endereço</ion-label>
          <ion-input type="tel" v-model="profile.endereco" placeholder="Coloque seu endereco"></ion-input>
        </ion-item>

        <ion-button expand="block" @click="saveProfile">Salvar</ion-button>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonBackButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  toastController,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import { personCircleOutline } from 'ionicons/icons'; // Import Ionicons profile icon
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    IonAvatar,
    IonButton,
    IonButtons,
    IonBackButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar,
    
  },
  setup() {
    const router = useRouter();
    const description = ref('');

    const profile = ref({
      name: 'José',
      surname: 'da Silva',
      email: 'josedasilva@gmail.com',
      cpf: '000.000.000-00',
      nascimento: '29/02/1990',
      celular: '(11)9999-9999',
      endereco: 'Avenida Paulista, n 65'
    });

    const profileImage = ref('https://via.placeholder.com/150'); // Placeholder image
    const personCircleIcon = personCircleOutline;

    const changeProfilePicture = () => {
      console.log('Change Profile Picture Clicked');
    };

    const saveProfile = async () => {
      console.log('Profile Saved:', profile.value);
      const toast = await toastController.create({
        message: 'Informações salvas com sucesso',
        duration: 1500,
        position: 'middle',
      });
      await toast.present();
    };

    return {
      profile,
      description,
      profileImage,
      personCircleIcon,
      changeProfilePicture,
      saveProfile,
    };
  },
});
</script>

<style scoped>
.profile-header {
  text-align: center;
  margin: 20px 0;
}

.profile-avatar {
  display: inline-block;
  width: 120px;
  height: 120px;
}

ion-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

ion-title ion-icon {
  margin-right: 10px;
}
</style>
