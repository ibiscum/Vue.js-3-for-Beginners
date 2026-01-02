<template>
  <h1><slot name="heading" /></h1>
  <main><slot name="default" /></main>
  <footer>
    <slot name="footer">
      Copyright reserved to Vue.js for beginners
    </slot>
  </footer>
</template>
<style scoped>
h1, main, footer {
    grid-column-start: 1;
    grid-column-end: 3;
}
h1{
    align-items: center;
}
main {
    padding: 16px 32px;
}
footer {
    border-top: solid 1px lightgray;
}
</style>