<script setup>
import TechSkills from '@/components/TechSkills.vue';
import WorkExperience from '@/components/WorkExperience.vue';

import {
  Download,
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,
} from "lucide-vue-next";

const education = [
  {
    degree: "MSc in Informatics and Computer Engineering",
    school: "University of West Attica",
    period: "2016 - 2024",
  },
];

const certifications = [
  "Master Laravel 10 for Beginners & Intermediate",
  "Yii2: From Beginner to Expert",
  "PHP Unit Testing with PHPUnit",
];

</script>

<template>
  <div class="pt-5">
    <div class="container py-5">
      <div class="text-center mb-5">
        <h1 class="fw-bold display-4 mb-3 heading">Bogdan Vaskan</h1>
        <p class="fs-4 text-white mb-4">Full-Stack Software Engineer</p>

        <a href="/src/assets/files/BOGKNTAN_VASKAN_CV.pdf" download="BOGKNTAN_VASKAN_CV.pdf">
            <Download class="me-2" size="18" />
            Download CV
        </a>
      </div>

      <base-card class="mb-4">
        <h3 class="mb-3">Contact Information</h3>
        <div class="row g-3">
          <div class="col-md-6 d-flex align-items-center">
            <Mail size="16" class="text-primary me-2" />
            <a href="mailto:bogdanvaskan450@gmail.com" class="text-white">bogdanvaskan450@gmail.com</a>
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <Phone size="16" class="text-primary me-2" />
            <a href="tel:+306948174809" class="text-white">+30 6948174809</a>
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <MapPin size="16" class="text-primary me-2" />
            <span class="text-white">Athens, Greece</span>
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <Globe size="16" class="text-primary me-2" />
            <span class="text-white">www.bogdan-vaskan.com</span>
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <Github size="16" class="text-primary me-2" />
            <a href="https://github.com/bogdanGR" target="_blank" class="text-white">github.com/bogdanGR</a>
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <Linkedin size="16" class="text-primary me-2" />
            <a href="https://www.linkedin.com/in/bogdan-vaskan-a2764512b/" class="text-white">linkedin.com/in/bogdan-vaskan-a2764512b</a>
          </div>
        </div>
      </base-card>

      <!-- Professional Summary -->
      <base-card class="mb-4">
        <h3 class="mb-3">Professional Summary</h3>
        <p class="text-white">
          Skilled Software Engineer with hands-on experience in both
          backend and frontend development, delivering clean, efficient,
          and maintainable code. Combines strong technical expertise
          with discipline and a keen eye for detail to deliver high-quality,
          scalable solutions. Skilled in problem-solving, cross-functional
          collaboration, and leading projects from concept to deployment
          with a focus on performance and user-centric design.
        </p>
      </base-card>

      <!-- Skills -->
      <base-card class="mb-4">
        <h3 class="mb-3">Technical Skills</h3>
        <tech-skills></tech-skills>
      </base-card>

      <!-- Work Experience -->
      <base-card class="mb-4">
        <h3 class="mb-3">Work Experience</h3>
        <work-experience></work-experience>
      </base-card>

      <!-- Education -->
      <base-card class="mb-4">
        <h3 class="mb-3">Education</h3>
        <div v-for="(edu, i) in education" :key="i" class="mb-3">
          <div class="d-flex justify-content-between align-items-start">
            <div>
              <h6 class="fw-semibold">{{ edu.degree }}</h6>
              <a  href="https://ice.uniwa.gr/en/home/" target="_blank" class="text-primary mb-1">{{ edu.school }}</a>
            </div>
            <base-badge :title="edu.period" :key="edu.period"/>
          </div>
        </div>
      </base-card>

      <!-- Certifications -->
      <base-card class="mb-4">
        <h3 class="mb-3">Certifications</h3>
        <ul class="list-unstyled mb-0">
          <li v-for="(cert, i) in certifications" :key="i" class="d-flex align-items-center mb-2">
            <div class="bg-primary rounded-circle me-2" style="width:8px;height:8px"></div>
            <span class="text-white">{{ cert }}</span>
          </li>
        </ul>
      </base-card>
    </div>
  </div>
</template>
