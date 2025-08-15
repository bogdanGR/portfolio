<script setup>
const typedStrings = [
  'Software Engineer',
  'MSc in Software Engineering',
  'Laravel Enthusiast',
  'Problem Solver',
]
</script>

<template>
  <main>
    <div id="home-section" class="row mt-5 mb-5 pt-5 pb-5 home-header">
      <div class=" col-md-7">
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

    <div class="row pb-5 pt-5" id="about-section">
      <div class="col-7">
        <h1 style="font-size: 2.6em;">LET ME <span class="purple"> INTRODUCE </span> MYSELF</h1>
        <p>Skilled Software Engineer with hands-on experience in both
          backend and frontend development, delivering clean, efficient,
          and maintainable code. Combines strong technical expertise
          with discipline and a keen eye for detail to deliver high-quality,
          scalable solutions. Skilled in problem-solving, cross-functional
          collaboration, and leading projects from concept to deployment
          with a focus on performance and user-centric design.</p>
      </div>
      <div class="col-5">
        <div class="text-end">
          <img src="/src/assets/images/avatar.svg" class="img-fluid" alt="avatar" width="200">
        </div>
      </div>
    </div>
  </main>
</template>
