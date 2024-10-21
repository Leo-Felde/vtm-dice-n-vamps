import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: null,
  }),

  getters: {
    getUserName: (state) => state.userData?.name || 'Vampiro',
  },

  actions: {
    setUser (userData) {
      this.userData = userData
    },

    wipe () {
      this.userData = {}
    },
  },
})
