<template>
  <SocialPost
    v-for="(post) in posts"
    :id="post.id"
    :key="post.id"
    :username="post.owner.firstName"
    :avatar-src="post.image"
    :post="post.text"
    :likes="post.likes"
  />
</template>

<script setup>
  import { reactive, } from 'vue';
  import SocialPost from '../components/molecules/SocialPost.vue'
  import { useRoute } from 'vue-router';

  const posts = reactive([]);
  const fetchPosts = (userId) => {
    const baseUrl = "https://dummyapi.io/data/v1";
    fetch(`${baseUrl}/user/${userId}/post?limit=10`, {
      "headers": {
        "app-id": "657a3106698992f50c0a5885"
      }
    })
      .then( response => response.json())
      .then( result => {
        posts.push(...result.data);
      })
  }

  const route = useRoute();
  fetchPosts(route.params.userId);

</script>
