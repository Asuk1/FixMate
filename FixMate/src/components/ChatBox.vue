
<template>
  <div class="chat-box">
    <h3 class="chat-box__title">Messages</h3>
    
    <div class="chat-box__messages">
      <div v-if="messages.length === 0" class="chat-box__empty">
        No messages yet
      </div>
      <MessageItem
        v-for="message in messages"
        :key="message.id"
        :message="message"
        :current-role="role"
      />
    </div>

    <div class="chat-box__input-wrapper">
      <input
        v-model="messageText"
        type="text"
        placeholder="Type a message..."
        class="chat-box__input"
        @keypress.enter="sendMessage"
      />
      <button class="chat-box__send-btn" @click="sendMessage">
        <IconSend class="chat-box__send-icon" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MessageItem from '@/components/MessageItem.vue'
import IconSend from '@/components/icons/IconSend.vue'

defineProps({
  apartmentId: {
    type: Number,
    required: true
  },
  messages: {
    type: Array,
    required: true
  },
  role: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['send'])

const messageText = ref('')

const sendMessage = () => {
  if (!messageText.value.trim()) return
  
  emit('send', messageText.value)
  messageText.value = ''
}
</script>

<style scoped>
.chat-box {
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.chat-box__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.chat-box__messages {
  flex: 1;
  overflow-y: auto;
  margin-bottom: 1rem;
  max-height: 24rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.chat-box__empty {
  color: #6b7280;
  text-align: center;
  padding: 2rem;
}

.chat-box__input-wrapper {
  display: flex;
  gap: 0.5rem;
}

.chat-box__input {
  flex: 1;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  outline: none;
  transition: border-color 0.2s ease;
}

.chat-box__input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.chat-box__send-btn {
  background-color: #2563eb;
  color: white;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.chat-box__send-btn:hover {
  background-color: #1d4ed8;
}

.chat-box__send-icon {
  width: 1.25rem;
  height: 1.25rem;
}
</style>