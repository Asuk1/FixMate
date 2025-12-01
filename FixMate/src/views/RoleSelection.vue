<template>
  <div class="role-selection">
    <div class="container">
      <h1 class="title">Property Management System</h1>
      <div class="role-grid">
        <RoleCard
          title="Cleaning Person"
          description="Upload photos and communicate with property managers"
          icon="camera"
          color="blue"
          @click="selectRole('cleaner')"
        />
        <RoleCard
          title="Property Manager"
          description="Review and approve cleaning work"
          icon="check"
          color="green"
          @click="selectRole('manager')"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import RoleCard from '@/components/RoleCard.vue'

const router = useRouter()

const selectRole = (role) => {
  router.push({ name: 'Dashboard', params: { role } })
}
</script>

<style scoped>
.role-selection {
  min-height: 100vh;
  background: linear-gradient(135deg, #e0f2fe 0%, #c7d2fe 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  max-width: 64rem;
  width: 100%;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: #1f2937;
  margin-bottom: 3rem;
}

.role-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .role-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>