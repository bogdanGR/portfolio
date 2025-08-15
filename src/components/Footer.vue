<script setup>
import SocialLinks from "@/components/SocialLinks.vue";
</script>

<template>
  <footer class="footer pt-3 pb-3 border-top border-secondary">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-6 text-left text-white">
          Designed and Developed by Bogdan Vaskan. Copyright © {{ new Date().getFullYear() }} BV
        </div>
        <div class="col-6 text-end">
          <div class="d-flex align-items-baseline justify-content-end ">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>


