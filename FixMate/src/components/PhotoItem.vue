<template>
  <div class="photo-item">
    <img :src="image.url" alt="Cleaning photo" class="photo-item__image" />
    <div v-if="image.approved" class="photo-item__approved-badge">
      Approved
    </div>
    <div
      v-if="role === 'manager' && !image.approved"
      class="photo-item__actions"
    >
      <button
        class="photo-item__action-btn photo-item__action-btn--approve"
        @click="$emit('approve')"
      >
        <IconCheck class="photo-item__action-icon" />
      </button>
      <button
        class="photo-item__action-btn photo-item__action-btn--reject"
        @click="$emit('reject')"
      >
        <IconX class="photo-item__action-icon" />
      </button>
    </div>
  </div>
</template>

<script setup>
import IconCheck from '@/components/icons/IconCheck.vue'
import IconX from '@/components/icons/IconX.vue'

defineProps({
  image: {
    type: Object,
    required: true
  },
  role: {
    type: String,
    required: true
  }
})

defineEmits(['approve', 'reject'])
</script>

<style scoped>
.photo-item {
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
}

.photo-item__image {
  width: 100%;
  height: 12rem;
  object-fit: cover;
  display: block;
}

.photo-item__approved-badge {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: #22c55e;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
}

.photo-item__actions {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: all 0.3s ease;
}

.photo-item:hover .photo-item__actions {
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 1;
}

.photo-item__action-btn {
  padding: 0.75rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.photo-item__action-btn:hover {
  transform: scale(1.1);
}

.photo-item__action-btn--approve {
  background-color: #22c55e;
}

.photo-item__action-btn--approve:hover {
  background-color: #16a34a;
}

.photo-item__action-btn--reject {
  background-color: #ef4444;
}

.photo-item__action-btn--reject:hover {
  background-color: #dc2626;
}

.photo-item__action-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: white;
}
</style>