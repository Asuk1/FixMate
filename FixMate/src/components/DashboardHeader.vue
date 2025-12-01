<template>
  <div class="dashboard-header">
    <div>
      <h1 class="dashboard-header__title">
        {{ roleTitle }} Dashboard
      </h1>
      <p class="dashboard-header__subtitle">Manage your apartments</p>
    </div>
    <button class="dashboard-header__button" @click="$emit('switch-role')">
      Switch Role
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  role: {
    type: String,
    required: true
  }
})

defineEmits(['switch-role'])

const roleTitle = computed(() => {
  return props.role === 'cleaner' ? 'Cleaning' : 'Property Manager'
})
</script>

<style scoped>
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.dashboard-header__title {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
}

.dashboard-header__subtitle {
  color: #6b7280;
  margin-top: 0.25rem;
}

.dashboard-header__button {
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  background: white;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.dashboard-header__button:hover {
  background-color: #f3f4f6;
}
</style>