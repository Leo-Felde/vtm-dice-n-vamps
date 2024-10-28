<template>
  <div>
    <q-card
      v-for="(clan) in clanOptions"
      :key="`card-clan-${clan.value}`"
      class="clan-select-card"
    >
      <q-img
        :src="getClanImg(clan.value)"
        width="70px"
        height="70px"
        fit="contain"
      />
      {{ clan.label }}
    </q-card>
  </div>
</template>

<script>
import { clanOptions } from '@/utils/constantes'
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'FormClanIntuitivo',

  setup () {

    const getClanImg = (clanName) => {
      return require(`@/assets/img/logo-${clanName}.png`)
    }

    return {
      clanOptions,
      getClanImg
    }
  }
})
</script>

<style lang="sass" scoped>
.clan-select-card
  height: 250px
  width: 250px
  display: flex
  flex-direction: column
  justify-content: center
</style>