import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: JSON.parse(localStorage.getItem('userData')) || {},
    imported: false
  }),

  actions: {
    setUserData(data) {
      this.userData = data
      localStorage.setItem('userData', JSON.stringify(data))
    },
    
    clearUserData() {
      this.userData = {}
      localStorage.removeItem('userData')
    }
  }
})
