<template>
  <div class="dashboard">
    <div class="container">
      <DashboardHeader
        :role="role"
        @switch-role="switchRole"
      />
      <div class="apartment-grid">
        <ApartmentCard
          v-for="apartment in apartments"
          :key="apartment.id"
          :apartment="apartment"
          @click="openApartment(apartment.id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useApartmentStore } from '@/stores/apartmentStore'
import DashboardHeader from '@/components/DashboardHeader.vue'
import ApartmentCard from '@/components/ApartmentCard.vue'

const props = defineProps({
  role: {
    type: String,
    required: true
  }
})

const router = useRouter()
const apartmentStore = useApartmentStore()

const apartments = computed(() => apartmentStore.apartments)

const switchRole = () => {
  router.push({ name: 'RoleSelection' })
}

const openApartment = (id) => {
  router.push({ 
    name: 'ApartmentDetail', 
    params: { role: props.role, id } 
  })
}
</script>

<style scoped>
.dashboard {
  min-height: 100vh;
  background-color: #f9fafb;
  padding: 2rem;
}

.container {
  max-width: 80rem;
  margin: 0 auto;
}

.apartment-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
</style>