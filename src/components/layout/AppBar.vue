<template>
  <q-header
    id="app-header"
    class="bg-dark text-white"
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
    </div>
  </q-header>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'AppBaR',

  setup() {
    const router = useRouter()
    
    const goToHome = () => {
      router.push('/')
    }

    return {
      goToHome
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
  height: 50px
  border-bottom: 1px solid #5a5b60
  display: flex

#app-logo
  width: 22px
</style>