import { defaultUserData } from '@/utils/constantes'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: JSON.parse(localStorage.getItem('userData')) || defaultUserData,
    imported: false
  }),

  actions: {
    setUserData(data) {
      this.userData = data
      localStorage.setItem('userData', JSON.stringify(data))
    },

    saveDieCobination (combination, replaceIndex = undefined) {
      if (this.userData.savedDie.filter(die => JSON.stringify(die) === JSON.stringify(combination))[0]) return

      if (replaceIndex !== undefined && replaceIndex >= 0) {
        this.userData.savedDie.splice(replaceIndex, 1, combination)
      } else {
        this.userData.savedDie.push(combination)
      }
    },

    deleteDieCombination (inedx) {
      this.userData.savedDie.splice(inedx, 1)
    },
    
    clearUserData() {
      this.userData = {}
      localStorage.removeItem('userData')
    },

    importJson() {
      return new Promise((resolve) => {
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = '.json'
        input.onchange = async (event) => {
          const file = event.target.files[0]
          if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
              try {
                const data = JSON.parse(e.target.result)
    
                this.setUserData(data)
                this.imported = true
                resolve(true)
    
              } catch (error) {
                console.error('Error parsing JSON:', error)
                resolve(false) 
              }
            }
            reader.readAsText(file)
          } else {
            resolve(false)
          }
        }
        input.click()
      })
    }
    
  }
})
