<template>
  <button class="back-button" @click="$emit('click')">
    <IconArrowLeft class="back-button__icon" />
    <span>Back to Dashboard</span>
  </button>
</template>

<script setup>
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'

defineEmits(['click'])
</script>

<style scoped>
.back-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
  background: none;
  border: none;
  cursor: pointer;
  margin-bottom: 1.5rem;
  padding: 0.5rem;
  transition: color 0.2s ease;
}

.back-button:hover {
  color: #1f2937;
}

.back-button__icon {
  width: 1.25rem;
  height: 1.25rem;
}
</style>