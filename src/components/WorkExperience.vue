<template>
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
</template>
<script setup>
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
