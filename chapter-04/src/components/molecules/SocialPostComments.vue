<template>
  <div>
    <p>Comments:</p>
    <div
      v-for="(comment, index) in props.comments"
      :key="index"
    >
      <strong>This is comment number {{ index }}</strong>
      <p>{{ comment }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  comments: {type: Array, default: () => []},
});
</script>

<style lang="scss"></style>
