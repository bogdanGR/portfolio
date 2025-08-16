<template>
  <div class="about pt-5 pb-5">
    <div class="container">
      <h1 class="heading text-center">About Me</h1>
      <p class="text-center text-white pb-5">I'm a passionate full-stack developer with over 4 years of experience creating digital solutions that make a difference.</p>

      <div class="row mb-5">
        <div class="col-6">
          <h2 class="heading">My Story</h2>
          <p class="text-white">I started my journey in web development as a Software Engineer during university, where I discovered my passion for creating digital experiences that solve real-world problems. What began as curiosity about how websites work has evolved into a career dedicated to building scalable, user-friendly applications.</p>
          <p class="text-white">Over the years, I've had the opportunity to work with startups and established companies, gaining experience across the full development stack. I believe in writing clean, maintainable code and staying current with the latest technologies and best practices.</p>
          <p class="text-white">When I'm not coding, you can find me exploring new technologies, or enjoying the outdoors. I'm always excited to take on new challenges and collaborate with like-minded professionals.</p>
        </div>
        <div class="col-6">
          <h2 class="heading">Skills & Technologies</h2>
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
        </div>
      </div>
      <div class="row">
        <h2 class="heading text-center">Work Experience</h2>
        <div class="col-12">
          <base-card
            v-for="(job, index) in experience"
            :key="index"
          >
            <div class="d-flex justify-content-between align-items-baseline">
              <h3 class="text-lg font-bold">{{ job.position }}</h3>
              <base-badge class="flat" :title="job.period"></base-badge>
            </div>
            <p class="text-sm text-gray-400">{{ job.company }}</p>
            <p class="mt-2">{{ job.description }}</p>
          </base-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
<script setup lang="ts">
import BaseBadge from '@/components/ui/baseBadge.vue';

const backendSkills = [
  'PHP', 'Yii2', 'MySql', 'REST API', 'laravel', 'ElasticSearch'
];

const frontendSkills = [
  'JavaScript', 'Vue.js', 'bootstrap', 'jQuery', 'HTML5', 'CSS', 'Chart.js', 'AJAX', 'Smarty',
];

const otherSkills = [
  'git','Linux', 'API integrations'
];

const experience = [
  {
    company: 'Greek Army',
    position: 'Soldier',
    period: '1/2024 - 08/2025',
    description: 'Completed my military service in Greek Army'
  },
  {
    company: 'The Right Click',
    position: 'Software Engineer',
    period: '03/2023 - 11/2024',
    description: 'Working for a client from Germany, on enterprise CRM based on Yii2, Vue.js, ElasticSearch and chart.js for data visualization.'
  },
  {
    company: 'ThreeQue',
    position: 'Software Engineer',
    period: '08/2020 - 03/2023',
    description: 'Customization of Vtiger CRM, Use Google APIs to sync data from/to Vtiger CRM, Experience with bridges:Winera - VtigerCRM. Developed bridge between Vtiger CRM - MyData based on Soft1 Provider.'
  },
  {
    company: 'Software Engineer',
    position: 'Software Engineer',
    period: '09/2019 - 08/2020',
    description: 'Developed and customized responsive PrestaShop themes and modules, delivering tailored e-commerce solutions with optimized performance and user experience.'
  },
  {
    company: 'Interad',
    position: 'Frontend Software Engineer',
    period: '08/2018 - 12/2018',
    description: 'Designed and developed responsive web solutions using WordPress and PrestaShop CMS.'
  }
];

</script>
