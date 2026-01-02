<template>
  <div class="SocialPost">
    <div class="header">
      <img
        class="avatar"
        :src="avatarSrc"
      >
      <div class="name">
        {{ username }}
      </div>
      <div class="userId">
        {{ userId }}
      </div>
    </div>
    <div class="post">
      {{ post }}
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const props = defineProps({
  username: { type: String, default: "John Doe" },
  userId: { type: String, default: "user01" },
  avatarSrc: { type: String, default: "https://i.pravatar.cc/40" },
  post: { type: String, default: "message" },
});

onMounted(() => {
  console.log(props.username);
});
</script>

<style lang="scss">
.SocialPost {
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }

  .avatar {
    border-radius: 50%;
    margin-right: 12px;
  }

  .name {
    font-weight: bold;
    margin-right: 8px;
    color: rgb(48, 10, 10);
  }
}
</style>
