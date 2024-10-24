<template>
  <q-header
    id="app-header"
    class="text-white"
    :class="homePage ? 'transparentize' : ''"
  >
    <div
      class="d-flex logo-action q-ml-md"
      @click="goToHome"
    >
      <img
        id="app-logo"
        alt="logo do site"
        src="../../assets/logo.png"
        class="q-my-auto"
      >
      <span class="q-ml-sm q-my-auto">
        dice-n-vamps
      </span>

      <q-tooltip :delay="300">
        Voltar à página inicial
      </q-tooltip>
    </div>
  </q-header>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'AppBaR',

  setup() {
    const router = useRouter()
    const route = useRoute()
    
    const goToHome = () => {
      router.push('/')
    }
    
    const homePage = computed(() => route.name === 'home')

    return {
      goToHome,
      homePage
    }
  }
})
</script>

<style lang="sass" scoped>
.logo-action
  cursor: pointer
  span
    user-select: none


#app-header
  height: 60px
  border-bottom: 1px solid #5a5b60
  display: flex
  background-color: #16181c
  transition: background-color 0.5s ease
  

.transparentize
  background-color: #16181c1f !important
  border-bottom: none !important
  &:hover
    background-color: #16181caa !important

#app-logo
  width: 22px
</style>