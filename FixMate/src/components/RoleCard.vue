<template>
  <button class="role-card" :class="`role-card--${color}`">
    <div class="role-card__icon-wrapper" :class="`role-card__icon-wrapper--${color}`">
      <IconCamera v-if="icon === 'camera'" class="role-card__icon" />
      <IconCheck v-else class="role-card__icon" />
    </div>
    <h2 class="role-card__title">{{ title }}</h2>
    <p class="role-card__description">{{ description }}</p>
  </button>
</template>

<script setup>
import IconCamera from '@/components/icons/IconCamera.vue'
import IconCheck from '@/components/icons/IconCheck.vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.role-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  text-align: center;
  width: 100%;
}

.role-card:hover {
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  transform: translateY(-0.5rem);
}

.role-card__icon-wrapper {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  transition: background-color 0.3s ease;
}

.role-card__icon-wrapper--blue {
  background-color: #dbeafe;
}

.role-card__icon-wrapper--green {
  background-color: #dcfce7;
}

.role-card:hover .role-card__icon-wrapper--blue {
  background-color: #bfdbfe;
}

.role-card:hover .role-card__icon-wrapper--green {
  background-color: #bbf7d0;
}

.role-card__icon {
  width: 2.5rem;
  height: 2.5rem;
}

.role-card--blue .role-card__icon {
  color: #2563eb;
}

.role-card--green .role-card__icon {
  color: #16a34a;
}

.role-card__title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.role-card__description {
  color: #6b7280;
  line-height: 1.5;
}
</style>