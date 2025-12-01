<template>
  <div class="photo-gallery">
    <div class="photo-gallery__header">
      <h3 class="photo-gallery__title">Photos</h3>
      <button
        v-if="role === 'cleaner'"
        class="photo-gallery__upload-btn"
        @click="triggerFileInput"
      >
        <IconUpload class="photo-gallery__upload-icon" />
        <span>Upload</span>
      </button>
      <input
        ref="fileInput"
        type="file"
        multiple
        accept="image/*"
        class="photo-gallery__file-input"
        @change="handleFileChange"
      />
    </div>

    <div class="photo-gallery__grid">
      <div v-if="images.length === 0" class="photo-gallery__empty">
        No photos uploaded yet
      </div>
      <PhotoItem
        v-for="image in images"
        :key="image.id"
        :image="image"
        :role="role"
        @approve="$emit('approve', image.id)"
        @reject="$emit('reject', image.id)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import IconUpload from '@/components/icons/IconUpload.vue'
import PhotoItem from '@/components/PhotoItem.vue'

defineProps({
  apartmentId: {
    type: Number,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  role: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['upload', 'approve', 'reject'])

const fileInput = ref(null)

const triggerFileInput = () => {
  fileInput.value?.click()
}

const handleFileChange = (event) => {
  const files = Array.from(event.target.files)
  files.forEach(file => {
    const reader = new FileReader()
    reader.onloadend = () => {
      emit('upload', reader.result)
    }
    reader.readAsDataURL(file)
  })
  event.target.value = ''
}
</script>

<style scoped>
.photo-gallery {
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  padding: 1.5rem;
}

.photo-gallery__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.photo-gallery__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
}

.photo-gallery__upload-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #2563eb;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.photo-gallery__upload-btn:hover {
  background-color: #1d4ed8;
}

.photo-gallery__upload-icon {
  width: 1rem;
  height: 1rem;
}

.photo-gallery__file-input {
  display: none;
}

.photo-gallery__grid {
  max-height: 24rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.photo-gallery__empty {
  color: #6b7280;
  text-align: center;
  padding: 2rem;
}
</style>