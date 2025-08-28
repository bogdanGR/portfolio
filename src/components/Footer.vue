<script setup>
import SocialLinks from "@/components/SocialLinks.vue";
</script>

<template>
  <footer class="footer pt-3 pb-3 border-top border-secondary">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-6 text-start text-white">
          <span class="d-none d-md-inline">
            Designed and Developed by Bogdan Vaskan. Copyright © {{ new Date().getFullYear() }} BV
          </span>
          <span class="d-inline d-md-none">
            © {{ new Date().getFullYear() }} BV
          </span>
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


