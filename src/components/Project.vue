<template>
  <base-card class="h-100 shadow-sm">
    <!-- Project image -->
    <div v-if="project.image" class="overflow-hidden" style="height: 200px;">
      <img
        :src="project.image"
        :alt="project.title"
        class="img-fluid w-100 h-100"
        style="object-fit: cover;"
      />
    </div>

    <div class="p-3 d-flex flex-column">
      <h5 class="fw-bold mb-2">{{ project.title }}</h5>
      <p class="text-white mb-3">{{ project.description }}</p>
      <div class="mb-3">
        <base-badge
          v-for="tech in project.technologies"
          :key="tech"
          :title="tech"
          class="badge bg-secondary me-1 mb-1"
        />

      </div>

      <!-- Buttons -->
      <div class="mt-auto d-flex gap-2">
        <base-button
          v-if="project.link"
          as="a"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary btn-sm"
        >
          Live Demo
        </base-button>
        <base-button
          v-if="project.github"
          as="a"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-outline-secondary btn-sm"
        >
          Code
        </base-button>
      </div>
    </div>
  </base-card>
</template>

<script setup>
import BaseBadge from '@/components/ui/baseBadge.vue'

defineProps({
  project: {
    type: Object,
    required: true
  }
});
</script>
