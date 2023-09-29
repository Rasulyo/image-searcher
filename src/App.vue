<template>
  <div class="body">
    <Header />
    <router-view />
    <notifications />
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'

export default {
  name: "App",
  components: {
    Header,
  }
}
</script>

<style scoped>

.body {
  height: 100dvh;
  width: 100%;
  margin: 0;
  padding: 0;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
