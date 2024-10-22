<template>
  <div class="wrapper">
    <MainPage />
  </div>
</template>

<script setup>
import MainPage from './components/MainPage.vue';
import { defineComponent } from 'vue';

defineComponent({
  name: 'App'
});
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

.wrapper {
  height: 100vh;
  width: 100%;
}
</style>
