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
      <p v-html="job.description"></p>
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
    description: '• Contributed to the development and maintenance of an enterprise CRM system for a German client using Yii2 and Vue.js. <br>' +
      '• Optimized Elasticsearch configurations, enhancing CRM performance and enabling faster reporting. <br>' +
      '• Developed interactive data visualizations with Chart.js, supporting data-driven business decisions. <br>' +
      '• Designed and maintained REST API integrations, ensuring seamless service communication.'
  },
  {
    company: 'ThreeQue',
    position: 'Software Engineer',
    period: '08/2020 - 03/2023',
    description: '• Customized and extended Vtiger CRM to enhance functionality and usability for diverse client needs. <br>' +
      '• Integrated Google APIs for automated data synchronization between Vtiger CRM and external services. <br>' +
      '• Engineered and maintained critical system bridges, including Winera and MyData integrations. <br>' +
      '• Utilized technologies such as Smarty, PHP, JavaScript (jQuery), and MySQL to deliver scalable CRM solutions.'
  },
  {
    company: 'Software Engineer',
    position: 'Software Engineer',
    period: '09/2019 - 08/2020',
    description: '• Developed tailored PrestaShop themes and modules, creating responsive e-commerce solutions that matched client requirements.<br>' +
      '• Enhanced e-commerce performance through optimized code and effective caching strategies. <br>' +
      '• Utilized technologies such as PHP, JavaScript, and MySQL to ensure scalable online store functionality.'
  },
  {
    company: 'Interad',
    position: 'Frontend Software Engineer',
    period: '08/2018 - 12/2018',
    description: '• Designed and implemented responsive websites using WordPress and PrestaShop CMS, enhancing user experience. <br>' +
      '• Delivered user-friendly web interfaces optimized for performance and cross-device compatibility, improving site engagement. <br>' +
      '• Collaborated with designers and backend developers to ensure seamless integration of features, fostering teamwork and innovation.'
  }
];
</script>
