<script setup>
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
          <li class="nav-item">
              <router-link class="nav-link active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/projects">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
