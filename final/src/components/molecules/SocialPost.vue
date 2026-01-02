<template>
  <div
    class="SocialPost"
  >
    <div class="header">
      <img
        class="avatar"
        :src="avatarSrc"
        @click="navigateToUser"
      >
      <div class="name">
        {{ username }}
      </div>
      <IconDelete
        role="button"
        @click="onDeleteClick"
      />
    </div>
    <div
      class="post"
      v-text="post"
    />
    <Suspense v-if="showComments">
      <SocialPostComments
        :post-id="id"
        @delete="onDeleted"
      />
      <template #fallback>
        fetching comments...
      </template>
    </Suspense>

    <div class="interactions">
      <IconHeart />
      {{ likes }}
      <TheButton
        width="auto"
        theme="dark"
        data-cy="showCommentButton"
        @click="onShowCommentClick"
      >
        Show comment
      </TheButton>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, } from 'vue';
import SocialPostComments from './SocialPostComments.vue';
import IconHeart from '../icons/IconHeart.vue';
import IconDelete from '../icons/IconDelete.vue';
import TheButton from '../atoms/TheButton.vue';
import { useRouter } from 'vue-router';

const showComments = ref(false);
const onShowCommentClick = () => {
  console.log("Showing comments");
  showComments.value = !showComments.value;
}

const props = defineProps({
  username: {type: String, default: "John Doe"},
  id: {type: String, default: "user01"},
  avatarSrc: {type: String, default: "https://i.pravatar.cc/40"},
  post: {type: String, default: ""},
  likes: {type: Number, default: 0}
});
const router = useRouter();
const navigateToUser = () => {
  router.push({
    name: "user",
    params: {
      userId: props.id
    }
  });
}

onMounted( () => {
  console.log(props.username);
});

const emit = defineEmits(['delete']);
const onDeleteClick = () => {
  emit('delete');
}
</script>

<style lang="scss">
.SocialPost{
  margin-bottom:16px;
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 8px;;
  }
  .avatar {
    border-radius: 50%;
    width: 40px;
    height: 40px;;
    margin-right: 12px;
  }
  .name {
    font-weight: bold;
    margin-right: 8px;
    color: white;
  }
  .interactions {
    display: flex;
    font-weight: bold;
    margin-top: 8px;
    gap:8px;
  }
  svg {
    width: 24px;
    height: 24px;
    fill: var(--color-input-soft);
    cursor:pointer;
  }
}
</style>
