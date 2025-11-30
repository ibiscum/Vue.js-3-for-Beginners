<script setup>
import SocialPost from './molecules/SocialPost.vue';
</script>

<template>
  <SocialPost
    username="Username one"
    user-id="usernameID1"
    avatar-src="https://i.pravatar.cc/40"
    post="This is my post"
  />
  <SocialPost
    username="Username two"
    user-id="usernameID2"
    avatar-src="https://i.pravatar.cc/40"
    post="This is my second post"
  />
</template>
