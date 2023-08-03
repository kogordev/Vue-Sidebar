<script setup>
import { RouterView } from 'vue-router';
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <div class="app">
    <Sidebar />
    <!-- <router-view class="main" /> -->
    <router-view class="main" v-slot="{ Component }">
      <transition mode="out-in">
        <Component :is="Component" />
      </transition>
    </router-view>
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

.v-enter-from,
v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease-out
}


@media(max-width: 768px) {
  .main {
    padding-left: 4rem;
  }
}
</style>
