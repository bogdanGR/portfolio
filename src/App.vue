<template>
  <div class="app-wrapper">
    <div class=" container">
      <Header />
      <main class="pt-20">
        <router-view />
      </main>
    </div>
  </div>

</template>

<script setup>
import Header from "@/components/Header.vue"
</script>
