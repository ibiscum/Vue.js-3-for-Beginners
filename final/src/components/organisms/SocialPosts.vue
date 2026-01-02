<template>
  <SocialPost
    v-for="(post, index) in posts"
    :id="post.id"
    :key="post.id"
    :username="post.owner.firstName"
    :avatar-src="post.image"
    :post="post.text"
    :likes="post.likes"
    @delete="removePost(index)"
  />
</template>
  
<script setup>
  import { watch } from 'vue';
  import SocialPost from '../molecules/SocialPost.vue'
  import { usePostsStore } from '../../stores/posts';
  import { storeToRefs } from 'pinia'

  const postsStore = usePostsStore();
  const { posts } = storeToRefs(postsStore);
  const { fetchPosts, removePost } = postsStore;
  
  watch(
    posts.value,
    (newValue) => {
      if( newValue.length <= 3 ) {

      console.log("what is happening");
        fetchPosts(true);
      }
    }
  )
  fetchPosts();
  </script>
  