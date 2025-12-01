<template>
  <button class="apartment-card" @click="$emit('click')">
    <div class="apartment-card__header">
      <h3 class="apartment-card__title">{{ apartment.name }}</h3>
      <span class="apartment-card__badge" :class="badgeClass">
        {{ apartment.status }}
      </span>
    </div>
    <p class="apartment-card__address">{{ apartment.address }}</p>
    <div class="apartment-card__stats">
      <div class="apartment-card__stat">
        <IconCamera class="apartment-card__stat-icon" />
        <span>{{ apartment.images.length }} photos</span>
      </div>
      <div class="apartment-card__stat">
        <IconMessage class="apartment-card__stat-icon" />
        <span>{{ apartment.messages.length }} messages</span>
      </div>
    </div>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import IconCamera from '@/components/icons/IconCamera.vue'
import IconMessage from '@/components/icons/IconMessage.vue'

const props = defineProps({
  apartment: {
    type: Object,
    required: true
  }
})

defineEmits(['click'])

const badgeClass = computed(() => {
  return props.apartment.status === 'approved' 
    ? 'apartment-card__badge--approved' 
    : 'apartment-card__badge--pending'
})
</script>

<style scoped>
.apartment-card {
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  padding: 1.5rem;
  text-align: left;
  cursor: pointer;
  border: none;
  width: 100%;
  transition: all 0.3s ease;
}

.apartment-card:hover {
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  transform: translateY(-0.25rem);
}

.apartment-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.apartment-card__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
}

.apartment-card__badge {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: capitalize;
}

.apartment-card__badge--approved {
  background-color: #dcfce7;
  color: #166534;
}

.apartment-card__badge--pending {
  background-color: #fef3c7;
  color: #92400e;
}

.apartment-card__address {
  color: #6b7280;
  margin-bottom: 1rem;
}

.apartment-card__stats {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #6b7280;
}

.apartment-card__stat {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.apartment-card__stat-icon {
  width: 1rem;
  height: 1rem;
}
</style>