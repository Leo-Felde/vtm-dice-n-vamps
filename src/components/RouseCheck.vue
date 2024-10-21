<template>
  <div class="dice-container">
    <div
      class="dice"
      :class="{'hunger' : currentRoll === 'hunger'}"
      :style="diceStyle"
      @click="rollDice"
    >
      <transition name="fade">
        <span
          v-if="!isRolling"
          class="d-flex"
        >
          <img
            v-show="currentRoll === 'safe'"
            :src="require('../assets/img/dice/normal-success.png')"
            class="q-ma-auto result"
          >
          <img
            v-show="currentRoll === 'hunger'"
            :src="require('../assets/img/dice/red-fail.png')"
            class="q-ma-auto result"
          >
        </span>
      </transition>
    </div>
    <q-btn
      outline
      @click="rollDice"
    >
      Rouse check
    </q-btn>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'DiceRoller',
  setup() {
    const currentRoll = ref('safe')
    const isRolling = ref(false)

    const rollDice = () => {
      if (isRolling.value) return
      isRolling.value = true
      setTimeout(() => {
        currentRoll.value = Math.floor(Math.random() * 10) + 1 > 5 ? 'safe' : 'hunger'
        isRolling.value = false
      }, 1000) 
    }

    const diceStyle = computed(() => ({
      transform: isRolling.value
        ? `rotate(${1.5 * 360}deg)`
        : 'rotate(0deg)',
      transition: isRolling.value ? 'transform 1s ease-in-out' : 'none',
    }))

    return {
      currentRoll,
      rollDice,
      diceStyle,
      isRolling,
    }
  },
}
</script>

<style lang="sass" scoped>
.result
  height: 86px
  width: 50px

.dice-container
  display: flex
  flex-direction: column
  align-items: center

.dice
  width: 100px
  height: 100px
  display: flex
  align-items: center
  justify-content: center
  font-size: 2rem
  background: radial-gradient(circle, rgba(59,59,59,1) 0%, rgba(0,0,0,1) 100%)
  border: 2px solid #333
  border-radius: 10px
  margin: 20px
  cursor: pointer
  position: relative
  &.hunger
    background: radial-gradient(circle, rgb(66, 20, 20) 0%, rgb(0, 0, 0) 100%) !important

button
  padding: 10px 20px
  font-size: 1rem
  cursor: pointer

.fade-enter-active, .fade-leave-active 
  transition: opacity 0.3s ease

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ 
  opacity: 0
</style>
