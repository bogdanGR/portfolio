<template>
  <section class="projects pt-5 pb-5">
    <div class="container">
      <h1 class="heading text-center">My Projects</h1>
      <p class="text-center text-white">Here's a selection of projects I've worked on, showcasing different technologies and approaches to solving various challenges.</p>
      <div class="row g-4 mt-4">
        <div
          v-for="project in projects"
          :key="project.id"
          class="col-12 col-md-6 col-lg-4"
        >
          <Project :project="project" />
        </div>
      </div>
      <div class="text-center pt-5 mt-5">
        <p class="text-white mb-3">
          Interested in working together or want to see more of my work?
        </p>
        <base-button :link="true" to="/contact">
          Get In Touch
        </base-button>
      </div>
    </div>
  </section>
</template>

<script setup>
import Project from "@/components/Project.vue";
import { projects } from '@/data/projects'
</script>
