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
      <a class="navbar-brand" href="#">
        <img src="/src/assets/images/logo.png" class="img" alt="avatar" width="100">
      </a>
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
            <a class="nav-link active" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="row pt-5">
    <div class="home-header col-md-7">
      <h1 class="heading" style="padding-bottom: 15px;">Hi There! <span class="wave" role="img" aria-labelledby="wave">👋🏻</span></h1>
      <h1 class="heading-name">I'M<strong class="main-name"> Bogdan Vaskan</strong></h1>
      <div class="pt-2" style="text-align: left;">
        <div class="Typewriter d-flex" data-testid="typewriter-wrapper">
          <VueTyped
            :strings="typedStrings"
            :typeSpeed="40"
            :backSpeed="30"
            :loop="true"
            @onComplete="handleComplete"
          ></VueTyped>
          <span class="Typewriter__cursor">|</span>
        </div>
      </div>
    </div>

    <div class="col-md-5" style="padding-bottom: 20px;">
      <img src="/src/assets/images/header_image.svg" alt="home pic" class="img-fluid" style="max-height: 450px;">
    </div>
  </div>
</template>
