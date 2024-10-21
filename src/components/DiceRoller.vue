<template>
  <div style="width: 600px;">
    <q-btn
      outline
      @click="rollDice"
    >
      rolar
    </q-btn>

    <div
      v-if="rolled"
    >
      <div
        v-show="!difficulty"
        class="q-ml-md q-mt-md q-mb-sm d-flex"
      >
        <h5 class="q-ma-none">
          {{ successes }} sucessos
        </h5>
        <h6
          v-show="messyCrit"
          class="text-accent q-ml-md q-my-auto"
        >
          | Crítico bagunçado
        </h6>
        <h6
          v-show="cleanCrit"
          class="q-ml-md q-my-auto"
        >
          | Crítico
        </h6>
        <h6
          v-show="bestFail"
          class="text-accent q-ml-md q-my-auto"
        >
          | Falha bestial
        </h6>
      </div>

      <h5
        v-show="!!difficulty"
        class="q-ml-md q-mt-md q-mb-sm"
        :class="{'text-accent' : messyCrit || (successes < difficulty && bestFail)}"
      >
        {{ successes >= difficulty ? messyCrit ? 'Crítico bagunçado' : cleanCrit ? 'Crítico' : 'Sucesso' : bestFail ? 'Falha bestial' : 'Falhou' }}
      </h5>
      <div
        class="d-flex"
        style="justify-content: space-between;"
      >
        <div class="red-die">
          <img
            v-for="(result, index) in hungerResults"
            :key="`dr-${index}`"
            :src="getImgSrc(`red-${result}`)"
            class="red-dice"
          >
        </div>
        <div class="normal-die">
          <img
            v-for="(result, index) in diceResults"
            :key="`dr-${index}`"
            :src="getImgSrc(`normal-${result}`)"
            :class="{'rerollable ' : reRolling, 'selected' : reRollPoll.includes(index)}"
            class="dice"
            @click="toggleReroll(index)"
          >
        </div>
      </div>
    </div>
    <div class="d-flex q-mt-md">
      <q-btn
        v-show="rolled && !reRolling"
        outline
        class="q-mr-auto"
        :disable="diceResults.length < 1"
        @click="reRolling = true"
      >
        gastar Força de vontade
      </q-btn>
      <q-btn
        v-show="reRolling"
        outline
        class="q-ml-auto q-mr-xs"
        @click="clearRerollPoll"
      >
        cancelar
      </q-btn>
      <q-btn
        v-show="reRolling"
        :disable="reRollPoll.length < 1"
        outline
        @click="reRoll"
      >
        Re-rolar
      </q-btn>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default{
  name: 'DiceRoller',

  props: {
    dies: {
      type: Number, default: 1
    },
    hunger: {
      type: Number, default: 1
    },
    difficulty: {
      type: Number, default: 0
    }
  },

  setup (props) {
    const rolled = ref(false)
    const reRolling = ref(false)

    const diceResults = ref([])
    const hungerResults = ref([])
    const reRollPoll = ref([])

    const successes = ref(null)
    const messyCrit = ref(false)
    const cleanCrit = ref(false)
    const bestFail = ref(false)

    const rollDice = () => {
      diceResults.value = []
      hungerResults.value = []
      messyCrit.value = false
      bestFail.value = false
      clearRerollPoll()

      if (props.hunger < props.dies) {
        for (let i = 0; i < props.dies - props.hunger; i ++) {
          const result = getRoll(true)
          diceResults.value.push(result)
        }
      }

      for (let j = 0; j < props.hunger; j ++) {
        const result = getRoll()
        hungerResults.value.push(result)
        if (j >= props.dies - 1) break
      }

      countCriticals()
      rolled.value = true
    }

    const countCriticals = () => {
      successes.value = diceResults.value.filter(result => result === 'success' || result === 'crit').length + hungerResults.value.filter(result => result === 'success' || result === 'crit').length
      
      const regularCrits = diceResults.value.filter(result => result === 'crit').length
      const hungerCrits = hungerResults.value.filter(result => result === 'crit').length

      if (regularCrits + hungerCrits >= 2) {
        messyCrit.value = hungerCrits > 0
        cleanCrit.value = !messyCrit.value 
      } else {
        cleanCrit.value = false
      }

      if (successes.value <= 3) {
        bestFail.value = hungerResults.value.includes('bestial-fail')
      }
    }
    
    const toggleReroll = (index) => {
      const foundIndex = reRollPoll.value.indexOf(index)

      if (foundIndex >= 0) {
        reRollPoll.value.splice(foundIndex, 1)
      } else if (reRollPoll.value.length < 3){
        reRollPoll.value.push(index)
      }
    }
    
    const reRoll = () => {
      messyCrit.value = false
      bestFail.value = false
      
      if (reRollPoll.value.length > 0) {
        reRollPoll.value.forEach(rollIndex => {
          diceResults.value[rollIndex] = getRoll(true)
        })
      }

      countCriticals()
      clearRerollPoll()
    }

    const clearRerollPoll = () => {
      reRolling.value = false
      reRollPoll.value = []
    }

    const getRoll = (noRedCrit = false) => {
      const roll = Math.floor(Math.random() * 10) + 1

      let result
      if (roll === 10) {
        result = 'crit' 
      } else if (roll > 5) {
        result = 'success'
      } else if (roll > 1 || noRedCrit) {
        result = 'fail'
      } else {
        result = 'bestial-fail'
      }

      return result
    }

    const getImgSrc = (value) => {
      return require(`../assets/img/dice/${value}.png`)
    }

    return {
      rolled,
      reRolling,
      diceResults,
      hungerResults,
      reRollPoll,
      successes,
      messyCrit,
      cleanCrit,
      bestFail,
      rollDice,
      toggleReroll,
      reRoll,
      clearRerollPoll,
      getImgSrc
    }
  }
}
</script>

<style lang="sass" scoped>
.dice
  height: 86px
  width: 50px
  cursor-events: none
  margin-left: 4px
  &.rerollable
    cursor: pointer
    pointer-events: all !important
    border: 1px solid white
    border-radius: 5px
    transition: hover 0.5s ease
    &:hover
      background: #ffffff26
    &.selected
      background: #831515
      &:hover
        background: #710f0f !important

.red-die
  min-width: 150px
.normal-die
  min-width: 150px
</style>