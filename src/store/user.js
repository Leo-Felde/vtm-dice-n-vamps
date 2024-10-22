import { defineStore } from 'pinia'

const defaultUserData = {
  nome: '',
  conceito: '',
  predator: '',
  cronica: '',
  ambicao: '',
  clan: '',
  sire: '',
  desejo: '',
  generation: '',
  vitality: 0,
  forca_de_vontade: 0,
  savedDie: [],
  attributes: {
    forca: 0,
    destreza: 0,
    vigor: 0,
    carisma: 0,
    manipulacao: 0,
    autocontrole: 0,
    inteligencia: 0,
    raciocinio: 0,
    determinacao: 0,
  },
  abilities: {
    armas_brancas: 0,
    armas_de_fogo: 0,
    atletismo: 0,
    briga: 0,
    conducao: 0,
    furtividade: 0,
    ladroagem: 0,
    oficios: 0,
    sobrevivencia: 0,
    empatia_com_animais: 0,
    etiqueta: 0,
    intimidacao: 0,
    lideranca: 0,
    manha: 0,
    performance: 0,
    persuasao: 0,
    sagacidade: 0,
    subterfugio: 0,
    ciencia: 0,
    erudicao: 0,
    financas: 0,
    investigacao: 0,
    medicina: 0,
    ocultismo: 0,
    percepcao: 0,
    politica: 0,
    tecnologia: 0,
  },
  specialties: {
    armas_brancas: '',
    armas_de_fogo: '',
    atletismo: '',
    briga: '',
    conducao: '',
    furtividade: '',
    ladroagem: '',
    oficios: '',
    sobrevivencia: '',
    empatia_com_animais: '',
    etiqueta: '',
    intimidacao: '',
    lideranca: '',
    manha: '',
    performance: '',
    persuasao: '',
    sagacidade: '',
    subterfugio: '',
    ciencia: '',
    erudicao: '',
    financas: '',
    investigacao: '',
    medicina: '',
    ocultismo: '',
    percepcao: '',
    politica: '',
    tecnologia: '',
  }
}

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
    }
  }
})
