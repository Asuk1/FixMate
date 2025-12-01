<template>
  <div class="apartment-detail">
    <div class="container">
      <BackButton @click="goBack" />
      
      <ApartmentHeader :apartment="apartment" />

      <div class="content-grid">
        <PhotoGallery
          :apartment-id="apartment.id"
          :images="apartment.images"
          :role="role"
          @upload="handleImageUpload"
          @approve="handleApproveImage"
          @reject="handleRejectImage"
        />
        
        <ChatBox
          :apartment-id="apartment.id"
          :messages="apartment.messages"
          :role="role"
          @send="handleSendMessage"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useApartmentStore } from '@/stores/apartmentStore'
import BackButton from '@/components/BackButton.vue'
import ApartmentHeader from '@/components/ApartmentHeader.vue'
import PhotoGallery from '@/components/PhotoGallery.vue'
import ChatBox from '@/components/ChatBox.vue'

const props = defineProps({
  role: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  }
})

const router = useRouter()
const apartmentStore = useApartmentStore()

const apartment = computed(() => apartmentStore.getApartmentById(props.id))

const goBack = () => {
  router.push({ name: 'Dashboard', params: { role: props.role } })
}

const handleImageUpload = (imageData) => {
  apartmentStore.addImage(apartment.value.id, imageData)
}

const handleApproveImage = (imageId) => {
  apartmentStore.approveImage(apartment.value.id, imageId)
}

const handleRejectImage = (imageId) => {
  apartmentStore.rejectImage(apartment.value.id, imageId)
}

const handleSendMessage = (text) => {
  apartmentStore.addMessage(apartment.value.id, text, props.role)
}
</script>

<style scoped>
.apartment-detail {
  min-height: 100vh;
  background-color: #f9fafb;
  padding: 2rem;
}

.container {
  max-width: 80rem;
  margin: 0 auto;
}

.content-grid {
  display: grid;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

@media (min-width: 1024px) {
  .content-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>