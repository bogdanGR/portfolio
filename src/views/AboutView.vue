<template>
  <div class="about pt-5 pb-5">
    <div class="container">
      <h1 class="heading text-center">About Me</h1>
      <p class="text-center text-white pb-5">I'm a passionate full-stack developer with over 4 years of experience creating digital solutions that make a difference.</p>

      <div class="row mb-5">
        <div class="col-12 col-md-6 mb-4 mb-md-0">
          <h2 class="heading">My Story</h2>
          <p class="text-white">I started my journey in web development as a Software Engineer during university, where I discovered my passion for creating digital experiences that solve real-world problems. What began as curiosity about how websites work has evolved into a career dedicated to building scalable, user-friendly applications.</p>
          <p class="text-white">Over the years, I've had the opportunity to work with startups and established companies, gaining experience across the full development stack. I believe in writing clean, maintainable code and staying current with the latest technologies and best practices.</p>
          <p class="text-white">When I'm not coding, you can find me exploring new technologies, or enjoying the outdoors. I'm always excited to take on new challenges and collaborate with like-minded professionals.</p>
        </div>
        <div class="col-12 col-md-6">
          <h2 class="heading">Skills & Technologies</h2>
          <tech-skills></tech-skills>
        </div>
      </div>
      <div class="row">
        <h2 class="heading text-center">Work Experience</h2>
        <work-experience></work-experience>
      </div>
    </div>
  </div>
</template>

<style>

</style>
<script setup>
import TechSkills from '@/components/TechSkills.vue';
import WorkExperience from '@/components/WorkExperience.vue';
</script>
