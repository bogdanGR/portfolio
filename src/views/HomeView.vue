<script setup>
import { EnvelopeIcon, ArrowRightIcon } from '@heroicons/vue/24/outline/index.js'
import SocialLinks from "@/components/SocialLinks.vue";
</script>

<template>
  <section id="home-section" class="home-header min-vh-100 d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="heading main-title mb-3">
            Hi, I am <strong class="my-name">Bogdan Vaskan</strong>
          </h1>

          <p class="main-text text-center mb-4">
            Software Engineer passionate about creating beautiful, functional web applications that solve real-world problems.
          </p>

          <div class="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
            <router-link
              class="btn btn-primary d-flex align-items-center gap-2 text-nowrap w-auto"
              to="/projects"
            >
              <span>View My Work</span>
              <ArrowRightIcon class="icon" />
            </router-link>

            <router-link
              class="btn btn-secondary d-flex align-items-center gap-2 text-nowrap w-auto"
              to="/contact"
            >
              <EnvelopeIcon class="icon" />
              <span>Get In Touch</span>
            </router-link>
          </div>



          <div class="d-flex justify-content-center align-items-baseline mt-4">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="about-section py-5">
    <div class="container">
      <h2 class="heading text-center mb-2">What I Do</h2>
      <p class="about-text text-center mb-4">
        I specialize in building scalable web applications with modern technologies
      </p>

      <!-- Stack on mobile, 3-up from md and up -->
      <div class="row g-4">
        <div class="col-12 col-md-4">
          <base-card class="h-100">
            <div class="card-body">
              <h4 class="card-title">Frontend Development</h4>
              Creating responsive, interactive user interfaces with Vue.js and modern CSS frameworks.
            </div>
          </base-card>
        </div>

        <div class="col-12 col-md-4">
          <base-card class="h-100">
            <div class="card-body">
              <h4 class="card-title">Backend Development</h4>
              Building robust APIs and server-side applications with PHP (Yii2, Laravel) and MySQL.
            </div>
          </base-card>
        </div>

        <div class="col-12 col-md-4">
          <base-card class="h-100">
            <div class="card-body">
              <h4 class="card-title">Full-Stack Solutions</h4>
              Delivering complete web applications from conception to deployment.
            </div>
          </base-card>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Responsive typography that scales nicely on phones */
.main-title {
  /* min 2rem, scale with viewport, cap at 4.5rem */
  font-size: clamp(2rem, 6vw, 4.5rem);
  line-height: 1.1;
}

.main-text {
  /* min 1rem, scale with viewport, cap at 1.5rem */
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  line-height: 1.7;
  max-width: 48rem;
  text-align: center;
  margin: 0 auto;
}

/* Keep icons a consistent size across breakpoints */
.icon {
  width: 1.25rem;
  height: 1.25rem;
}

/* Slightly reduce hero height on very small screens to avoid overflow */
@media (max-width: 575.98px) {
  .home-header {
    min-height: 80vh;
  }
}
</style>
