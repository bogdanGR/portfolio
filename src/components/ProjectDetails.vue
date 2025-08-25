<template>
  <section class="pt-5 pb-5">
    <div class="container" v-if="project">
      <div class="d-flex flex-column flex-md-row align-items-md-end gap-3">
        <h1 class="heading mb-0">{{ project.title }}</h1>
        <div class="ms-md-auto d-flex gap-2">
          <base-button v-if="project.link" :link="true" :to="project.link" target="_blank" rel="noopener">Live Demo</base-button>
          <base-button v-if="project.github" :link="true" :to="project.github" target="_blank" rel="noopener" variant="secondary">Code</base-button>
          <base-button :link="true" to="/projects">Back to Projects</base-button>
        </div>
      </div>

      <!-- Big image -->
        <div class="">
          <div class="rounded overflow-hidden">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.title"
              class="w-100 h-100"
              style="object-fit: cover;"
              role="button"
              @click="lightbox = true"
            />
          </div>
        </div>

      <!-- Description & Tech -->
      <div class="row g-4">
        <div class="col-12 col-lg-8">
          <base-card>
            <div class="p-3">
              <h3 class="h5 text-white mb-3">Overview</h3>
              <p class="text-white mb-0">{{ project.long_description }}</p>
            </div>
          </base-card>
        </div>
        <div class="col-12 col-lg-4">
          <base-card>
            <div class="p-3">
              <h3 class="h6 text-white mb-3">Technologies</h3>
              <div>
                <base-badge
                  v-for="tech in project.technologies"
                  :key="tech"
                  :title="tech"
                  class="badge bg-secondary me-1 mb-1"
                />
              </div>
            </div>
          </base-card>
        </div>
      </div>
    </div>

    <!-- Not found -->
    <div v-else class="container text-center py-5">
      <h2 class="text-white mb-3">Project not found</h2>
      <base-button :link="true" to="/projects">Back to Projects</base-button>
    </div>

    <!-- Lightbox (single image) -->
    <div
      v-if="lightbox && project?.image"
      class="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-black bg-opacity-75"
      style="z-index: 1050;"
      @click.self="lightbox = false"
    >
      <button class="btn btn-light position-absolute top-0 end-0 m-3" @click="lightbox = false" aria-label="Close">✕</button>
      <img :src="project.image" :alt="project.title" class="img-fluid rounded shadow" style="max-height: 85vh;" />
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import BaseBadge from '@/components/ui/baseBadge.vue'

import { projects } from '@/data/projects'

const route = useRoute()
const id = Number(route.params.id)

const project = computed(() => projects.find(p => p.id === id))
const lightbox = ref(false)

onMounted(() => {
  if (project.value) document.title = `${project.value.title} · Projects`
})
</script>
