<template>
  <div class="apartment-header">
    <h2 class="apartment-header__title">{{ apartment.name }}</h2>
    <p class="apartment-header__address">{{ apartment.address }}</p>
  </div>
</template>

<script setup>
defineProps({
  apartment: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.apartment-header {
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  padding: 1.5rem;
}

.apartment-header__title {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
}

.apartment-header__address {
  color: #6b7280;
  margin-top: 0.25rem;
}
</style>