<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button tab="home" default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Notícias</ion-title>
      </ion-toolbar>

      <ion-toolbar>
        <ion-searchbar 
          v-model="searchQuery" 
          placeholder="Buscar notícias..." 
          @ionInput="filterNews"
          show-clear-button="always"
        ></ion-searchbar>
      </ion-toolbar>
    </ion-header>

    <ion-content>

      <div class="news-list">
        <div v-if="filteredNews.length === 0">
          <p>Nenhuma notícia encontrada.</p>
        </div>
        <div v-else v-for="(newsItem, index) in filteredNews" :key="index" class="news-item">
          <img :src="newsItem.imageUrl" alt="News Image" class="news-image" />
          <h2>{{ newsItem.title }}</h2>
          <p>{{ newsItem.description }}</p>
          <small>{{ newsItem.date }}</small>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import {
  IonBackButton,
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

export default defineComponent({
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
  },
  name: 'NoticiasPage',
  setup() {
    const searchQuery = ref(''); 
    const news = ref([
      {
        title: 'Notícia 1',
        description: 'Descrição da notícia 1.',
        date: '2024-10-22',
        imageUrl: 'https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE=',
      },
      {
        title: 'Notícia 2',
        description: 'Descrição da notícia 2.',
        date: '2024-10-21',
        imageUrl: 'https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE=',
      },
      {
        title: 'Notícia 3',
        description: 'Descrição da notícia 3.',
        date: '2024-10-20',
        imageUrl: 'https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE=',
      },
    ]);


    const filteredNews = ref(news.value);

 
    onMounted(() => {
      document.title = 'Notícias';
    });

  
    const filterNews = () => {
      if (searchQuery.value.trim() === '') {
        filteredNews.value = news.value; 
      } else {
        filteredNews.value = news.value.filter(newsItem =>
          newsItem.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      }
    };

    return { news, searchQuery, filteredNews, filterNews };
  },
});
</script>

<style scoped>
.news-list {
  padding: 10px;
}

.news-item {
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  padding-bottom: 10px;
}

.news-image {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  border-radius: 8px;
}

.news-item h2 {
  font-size: 18px;
  margin: 0 0 5px;
}

.news-item p {
  font-size: 14px;
  color: #666;
}

.news-item small {
  font-size: 12px;
  color: #999;
}
</style>
