<template>
  <div class="app-wrapper">
      <Header />
      <main class="main-wrapper">
        <router-view />
      </main>
      <Footer />
  </div>

</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from '@/components/Footer.vue';
</script>
