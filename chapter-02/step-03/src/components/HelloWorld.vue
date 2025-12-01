<script setup>
import { ref, computed } from "vue";

defineProps({
  msg: {
    type: String,
    required: true,
  },
})

let firstName = ref("Simone");
let secondName = ref("Cuomo");
const fullName = computed(() => `${firstName.value} ${secondName.value}`);
console.log(fullName);
// output: Simone Cuomo
firstName.value = "John";
console.log(fullName);
// output: John Cuomo

const count = ref(0)
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

p {
  color: red;
}
</style>
