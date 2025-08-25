<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>

  <router-link
    v-else-if="isInternalLink"
    :to="to"
    :class="mode"
  >
    <slot></slot>
  </router-link>

  <a
    v-else
    :href="to"
    target="_blank"
    rel="noopener noreferrer"
    :class="mode"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: null
    },
    link: {
      type: Boolean,
      default: false
    },
    to: {
      type: String,
      default: '/'
    }
  },
  computed: {
    isInternalLink() {
      // external links usually start with http://, https:// or mailto:, etc.
      return this.to && !/^https?:\/\//.test(this.to) && !/^mailto:/.test(this.to);
    }
  }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 2rem;
  font: inherit;
  background-color: var(--primary-color);
  border: 1px solid var(--primary-color);
  color: white;
  cursor: pointer;
  border-radius: 15px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active,
a:focus,
button:hover {
  background-color: #ffffff;
  color: var(--primary-color);;
}

.flat {
  background-color: transparent;
  color: var(--primary-color);
  border: none;
}

.outline {
  background-color: transparent;
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #bcfa94;
}
</style>
