<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Detalhes da Notícia</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <div v-if="noticia">
          <h1>{{ noticia.title }}</h1>
          <img :src="noticia.imageUrl" alt="News Image" class="news-image" />
          <p>{{ noticia.description }}</p>
          <small>{{ noticia.date }}</small>
        </div>
        <div v-else>
          <p>Notícia não encontrada.</p>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default defineComponent({
    name: 'NoticiaDetalhe',
    setup() {
      const route = useRoute();
      const noticia = ref(null);
  
      const newsList = [
        {
          id: 1,
          title: 'Notícia 1',
          description: 'Descrição detalhada da notícia 1.',
          date: '2024-10-22',
          imageUrl: 'https://via.placeholder.com/300x200',
        },
        {
          id: 2,
          title: 'Notícia 2',
          description: 'Descrição detalhada da notícia 2.',
          date: '2024-10-21',
          imageUrl: 'https://via.placeholder.com/300x200',
        },
        {
          id: 3,
          title: 'Notícia 3',
          description: 'Descrição detalhada da notícia 3.',
          date: '2024-10-20',
          imageUrl: 'https://via.placeholder.com/300x200',
        },
      ];
  
      // 根据路由传递的ID找到新闻详情
      onMounted(() => {
        const newsId = Number(route.params.id);
        noticia.value = newsList.find(item => item.id === newsId);
      });
  
      return { noticia };
    },
  });
  </script>
  
  <style scoped>
  .news-image {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    border-radius: 8px;
  }
  </style>
  