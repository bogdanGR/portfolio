<template>
  <span class="badge">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  }
}
</script>
<style scoped>
.badge {
  background-color: rgba(37, 37, 37, 0.53);
  color: #ffffff;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

</style>
