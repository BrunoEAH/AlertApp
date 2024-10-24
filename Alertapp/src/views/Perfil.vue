<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>

        <!-- Back Button -->
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/home"></ion-back-button>
        </ion-buttons>

        <ion-title>
          <!-- Ionicon Profile Icon in the Header -->
          <ion-icon :icon="personCircleIcon" size="large"></ion-icon> Perfil
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="profile-header">
        <!-- Profile Picture -->
        <ion-avatar class="profile-avatar">
          <img :src="profileImage" alt="Profile Picture" />
        </ion-avatar>
        <ion-button fill="clear" @click="changeProfilePicture">Change Picture</ion-button>
      </div>

      <!-- Profile Form -->
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

        <!-- Save Button -->
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
import { defineComponent, getCurrentInstance, ref } from 'vue';

export default defineComponent({
  components: {
    IonAvatar,
    IonButton,
    IonButtons,
    IonBackButton,  // Ensure IonBackButton is imported
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
  methods: {
    async presentToast() {
      const toast = await toastController.create({
        message: 'Informações salvas com sucesso',
        duration: 1500,
        position: 'middle',
      });
      await toast.present();
    },
  },
  setup() {
    const { proxy } = getCurrentInstance()!;
    const profile = ref({
      name: 'José',
      surname: 'da Silva',
      email: 'josedasilva@gmail.com',
      cpf: '000.000.000-00',
      nascimento: '29/02/1990',
      celular: '(11)9999-9999',
      endereco: 'Avenida Paulista, n 65'
    });

    // Profile image URL
    const profileImage = ref('https://via.placeholder.com/150'); // Placeholder image

    // Ionicons profile icon
    const personCircleIcon = personCircleOutline;

    // Function to change profile picture (mock)
    const changeProfilePicture = () => {
      // Logic to change the profile picture (could be opening a file picker, etc.)
      console.log('Change Profile Picture Clicked');
    };

    // Function to save profile changes (mock)
    const saveProfile = () => {
      // Logic to save profile details (could involve calling an API, etc.)
      console.log('Profile Saved:', profile.value);
      proxy.presentToast();
    };

    return {
      profile,
      profileImage,
      personCircleIcon, // Use the icon
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
