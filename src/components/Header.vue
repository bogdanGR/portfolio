<script setup>
import {
  HomeIcon,
  UserIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  DocumentTextIcon
} from '@heroicons/vue/24/outline'

const typedStrings = [
  'Software Engineer',
  'Laravel Enthusiast',
  'Problem Solver',
]
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-light">
    <div class="container-fluid">
      <router-link class="nav-link active" to="/">
        <img src="/src/assets/images/logo.png" class="img" alt="avatar" width="100">
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse main-menu" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item mr-3">
            <router-link class="nav-link active d-flex align-items-center" to="/">
              <HomeIcon class="icon me-2" />
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link d-flex align-items-center" to="/about">
              <UserIcon class="icon me-2" />
              About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link d-flex align-items-center" to="/projects">
              <CodeBracketIcon class="icon me-2" />
              Projects
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link d-flex align-items-center" to="/contact">
              <EnvelopeIcon class="icon me-2" />
              Contact
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link d-flex align-items-center" to="/my-cv">
              <DocumentTextIcon class="icon me-2" />
              My CV
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<style scoped>
.icon {
  width: 20px;
  height: 20px;
  color: white;
}
</style>
