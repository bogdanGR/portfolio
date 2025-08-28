<script setup>

import {
  HomeIcon,
  UserIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  XMarkIcon,
  Bars3Icon
} from '@heroicons/vue/24/outline'

import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Collapse from 'bootstrap/js/dist/collapse'

const route = useRoute()
const collapseEl = ref(null)
let collapseInstance = null

function closeNavbar() {
  if (collapseInstance) {
    collapseInstance.hide()
  }
}

onMounted(() => {
  if (collapseEl.value) {
    collapseInstance = Collapse.getOrCreateInstance(collapseEl.value, { toggle: false })

    collapseEl.value.addEventListener('click', (e) => {
      if (e.target.closest('.nav-link')) {
        closeNavbar()
      }
    })
  }
})

// Fallback: also close on route changes (e.g., programmatic nav)
watch(() => route.fullPath, () => closeNavbar())
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark border-bottom border-secondary p-0">
    <div class="container">
      <router-link to="/">
        <img src="/src/assets/images/logo.png" alt="avatar" width="70">
      </router-link>

      <button
        class="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <Bars3Icon class="toggler-icon bars text-white" />
        <XMarkIcon class="toggler-icon close text-white" />
      </button>

      <div ref="collapseEl" class="collapse navbar-collapse main-menu" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item mr-3">
            <router-link class="nav-link d-flex align-items-center" to="/">
              <HomeIcon class="icon me-2" /> Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link d-flex align-items-center" to="/about">
              <UserIcon class="icon me-2" /> About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link d-flex align-items-center" to="/projects">
              <CodeBracketIcon class="icon me-2" /> Projects
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link d-flex align-items-center" to="/contact">
              <EnvelopeIcon class="icon me-2" /> Contact
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link d-flex align-items-center" to="/my-cv">
              <DocumentTextIcon class="icon me-2" /> My CV
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.navbar {
  position: sticky;
  top: 0;
  background: #181818;
  z-index: 100;
}
/* icon sizing */
.toggler-icon {
  width: 2.5rem;
  height: 2.5rem;
}

/* default: show burger, hide X */
.navbar-toggler .close {
  display: none;
}
.navbar-toggler .bars  {
  display: inline-block;
}

/* when menu is open, Bootstrap removes .collapsed */
.navbar-toggler:not(.collapsed) .close {
  display: inline-block;
}
.navbar-toggler:not(.collapsed) .bars  {
  display: none;
}

.navbar-toggler {
  border: none!important;
  outline: none!important;
}

.navbar-toggler:focus {
  border: none!important;
  outline: none!important;
  box-shadow: none;
}

</style>
