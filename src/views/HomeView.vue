<script setup>
import {EnvelopeIcon, ArrowRightIcon } from '@heroicons/vue/24/outline/index.js'
import SocialLinks from "@/components/SocialLinks.vue";
</script>

<template>
    <section id="home-section" class="home-header min-vh-100 justify-content-center align-items-center d-flex">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="heading main-title mb-3">Hi, I am <strong class="my-name">Bogdan Vaskan</strong></h1>
            <p class="main-text text-center mb-4">
              Software Engineer passionate about creating beautiful, functional web applications that solve real-world problems.
            </p>
            <div class="d-flex justify-content-center gap-3">
              <router-link
                class="btn btn-primary d-flex align-items-center gap-2 text-nowrap"
                to="/projects"
              >
                <span>View My Work</span>
                <ArrowRightIcon class="icon"/>
              </router-link>

              <router-link
                class="btn btn-secondary d-flex align-items-center gap-2"
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

    <section class="about-section">
      <div class="container">
        <h2 class="heading text-center">What I Do</h2>
        <p class="about-text text-center">I specialize in building scalable web applications with modern technologies</p>
       <div class="row">
         <div class="col-4">
           <div class="card p-3">
             <div class="card-body">
               <h4 class="card-title">Frontend Development</h4>
               Creating responsive, interactive user interfaces with Vue.js and modern CSS frameworks.
             </div>
           </div>
         </div>
         <div class="col-4">
           <div class="card p-3">
             <div class="card-body">
               <h4 class="card-title">Backend Development</h4>
               Building robust APIs and server-side applications with PHP(Yii2, Laravel) and MySQL.
             </div>
           </div>
         </div>
         <div class="col-4">
           <div class="card p-3">
             <div class="card-body">
               <h4 class="card-title">Full-Stack Solutions</h4>
               Delivering complete web applications from conception to deployment.
             </div>
           </div>
         </div>
       </div>
      </div>
    </section>
</template>

<style scoped>
.main-text {
  font-size: 1.5rem;
  line-height: 2rem;
  max-width: 48rem;
  text-align: center;
  margin: 0 auto;
}
.main-title {
  font-size: 4.5rem;
  line-height: 1;
}
.card {
  background: transparent;
  color: var(--vt-c-white);
  border: 1px solid lightgray;
}
.card:hover {
  background: var(--primary-color);
}
</style>
