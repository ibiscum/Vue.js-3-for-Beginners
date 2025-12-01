<template>
  <div
    class="SocialPost"
    :class="{ SocialPost__selected: selected }"
  >
    <div class="header">
      <img
        class="avatar"
        :src="avatarSrc"
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
        value="Show comment"
        width="auto"
        theme="dark"
        data-cy="showCommentButton"
        @click="onShowCommentClick"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import SocialPostComments from './SocialPostComments.vue';
import IconHeart from '../icons/IconHeart.vue';
import IconDelete from '../icons/IconDelete.vue';
import TheButton from '../atoms/TheButton.vue';

const showComments = ref(false);
const onShowCommentClick = () => {
  console.log("Showing comments");
  showComments.value = !showComments.value;
}

const props = defineProps({
  username: { type: String, default: 'Anonymous' },
  selected: { type: Boolean, default: false },
  id: {type: Number,  required: true },
  avatarSrc: {type: String, required: true },
  post: {type:  String, default: '' },
  likes: {type: Number, default: 0 }
});

onMounted(() => {
  console.log(props.username);
});

const emit = defineEmits(['delete']);
const onDeleteClick = () => {
  emit('delete');
}
</script>

<style lang="scss">
.SocialPost {
  margin-bottom: 16px;

  &__selected {
    border: white solid 1px;
  }

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    ;
  }

  .avatar {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    ;
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
    gap: 8px;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: var(--color-input-soft);
    cursor: pointer;
  }
}
</style>