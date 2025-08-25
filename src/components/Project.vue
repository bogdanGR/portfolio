<template>
  <base-card class="h-100 shadow-sm">
    <router-link :to="`/projects/${project.id}`" class="text-decoration-none">
      <div class="overflow-hidden">
        <img
          :src="project.image"
          :alt="project.title"
          loading="lazy"
          class="w-100 h-100"
          style="object-fit: cover; object-position: top;"
        />
      </div>
    </router-link>

    <div class="p-3 d-flex flex-column">
      <router-link :to="`/projects/${project.id}`" class="text-decoration-none">
        <h5 class="fw-bold mb-2 text-white">{{ project.title }}</h5>
      </router-link>

      <p class="text-white-50 mb-3">{{ project.description }}</p>

      <div class="mb-3">
        <base-badge
          v-for="tech in project.technologies"
          :key="tech"
          :title="tech"
          class="badge bg-secondary me-1 mb-1"
        />
      </div>

      <div class="mt-auto d-flex">
        <base-button
          v-if="project.link"
          :link="true"
          :to="project.link"
          target="_blank"
          rel="noopener"
        >Live Demo</base-button>

        <base-button
          v-if="project.github"
          :link="true"
          :to="project.github"
          target="_blank"
          rel="noopener"
        >Code</base-button>

        <base-button
        :link="true"
        :to="`/projects/${project.id}`"
        >
          Details
        </base-button>
      </div>
    </div>
  </base-card>
</template>

<script setup>
import BaseBadge from '@/components/ui/baseBadge.vue'
defineProps({ project: { type: Object, required: true } })
</script>
