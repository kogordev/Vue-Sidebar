<script setup>
import { RouterView } from 'vue-router';
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <div class="app">
    <Sidebar />
    <router-view class="main" />
  </div>
</template>

<style scoped>
.app {
  display: flex;
}

.main {
  flex: 1 1 0;
  padding: 2rem;
}

@media(max-width: 768px) {
  .main {
    padding-left: 6rem;
  }
}
</style>
