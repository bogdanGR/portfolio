<template>
  <div class="flex flex-wrap gap-2">
    <h3 class="text-white mb-3">Backend</h3>
    <base-badge
      v-for="skill in backendSkills"
      :key="skill"
      :title="skill"
      class="mb-2"
    />
  </div>
  <div class="flex flex-wrap gap-2 mt-3">
    <h3 class="text-white mb-3">Frontend</h3>
    <base-badge
      v-for="skill in frontendSkills"
      :key="skill"
      :title="skill"
      class="mb-2"
    />
  </div>
  <div class="flex flex-wrap gap-2 mt-3">
    <h3 class="text-white mb-3">Other</h3>
    <base-badge
      v-for="skill in otherSkills"
      :key="skill"
      :title="skill"
      class="mb-2"
    />
  </div>
</template>
<script setup>
const backendSkills = [
  'PHP', 'Yii2', 'MySql', 'REST API', 'laravel', 'ElasticSearch'
];

const frontendSkills = [
  'JavaScript', 'Vue.js', 'bootstrap', 'jQuery', 'HTML5', 'CSS', 'Chart.js', 'AJAX', 'Smarty',
];

const otherSkills = [
  'git','Linux', 'API integrations'
];
</script>
