import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useApartmentStore = defineStore('apartment', () => {
  const apartments = ref([
    {
      id: 1,
      name: 'Apartment 101',
      address: '123 Main St',
      status: 'pending',
      images: [],
      messages: []
    },
    {
      id: 2,
      name: 'Apartment 205',
      address: '456 Oak Ave',
      status: 'pending',
      images: [],
      messages: []
    },
    {
      id: 3,
      name: 'Apartment 312',
      address: '789 Pine Rd',
      status: 'approved',
      images: [],
      messages: []
    }
  ])

  const getApartmentById = (id) => {
    return apartments.value.find(apt => apt.id === parseInt(id))
  }

  const addImage = (apartmentId, image) => {
    const apartment = getApartmentById(apartmentId)
    if (apartment) {
      const newImage = {
        id: Date.now() + Math.random(),
        url: image,
        approved: false,
        timestamp: new Date().toISOString()
      }
      apartment.images.push(newImage)
    }
  }

  const approveImage = (apartmentId, imageId) => {
    const apartment = getApartmentById(apartmentId)
    if (apartment) {
      const image = apartment.images.find(img => img.id === imageId)
      if (image) {
        image.approved = true
      }
    }
  }

  const rejectImage = (apartmentId, imageId) => {
    const apartment = getApartmentById(apartmentId)
    if (apartment) {
      apartment.images = apartment.images.filter(img => img.id !== imageId)
    }
  }

  const addMessage = (apartmentId, text, sender) => {
    const apartment = getApartmentById(apartmentId)
    if (apartment) {
      const message = {
        id: Date.now(),
        text,
        sender,
        timestamp: new Date().toISOString()
      }
      apartment.messages.push(message)
    }
  }

  return {
    apartments,
    getApartmentById,
    addImage,
    approveImage,
    rejectImage,
    addMessage
  }
})