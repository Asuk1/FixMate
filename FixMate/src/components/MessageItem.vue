<template>
  <div class="message-item" :class="messageClass">
    <div class="message-item__bubble">
      <p class="message-item__sender">{{ senderLabel }}</p>
      <p class="message-item__text">{{ message.text }}</p>
      <p class="message-item__time">{{ formattedTime }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  message: {
    type: Object,
    required: true
  },
  currentRole: {
    type: String,
    required: true
  }
})

const messageClass = computed(() => {
  return props.message.sender === props.currentRole 
    ? 'message-item--sent' 
    : 'message-item--received'
})

const senderLabel = computed(() => {
  return props.message.sender === 'cleaner' ? 'Cleaner' : 'Manager'
})

const formattedTime = computed(() => {
  return new Date(props.message.timestamp).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  })
})
</script>

<style scoped>
.message-item {
  display: flex;
}

.message-item--sent {
  justify-content: flex-end;
}

.message-item--received {
  justify-content: flex-start;
}

.message-item__bubble {
  max-width: 18rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
}

.message-item--sent .message-item__bubble {
  background-color: #2563eb;
  color: white;
}

.message-item--received .message-item__bubble {
  background-color: #e5e7eb;
  color: #1f2937;
}

.message-item__sender {
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.message-item__text {
  margin-bottom: 0.25rem;
  line-height: 1.4;
}

.message-item__time {
  font-size: 0.75rem;
  opacity: 0.75;
}
</style>