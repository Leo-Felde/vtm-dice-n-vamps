<template>
  <q-page class="d-flex q-mx-auto page-view q-pb-md">
    <div class="q-ml-auto q-my-auto">
      <q-card
        v-if="validUserData"
        id="stats-card"
        class="flex-column"
        bordered
        flat
        style="border-bottom-left-radius: 0px !important; border-bottom-right-radius: 0px !important;"
      >
        <div class="stats-wrapper">
          <q-select
            v-model="atributo"
            label="Atributo"
            input-debounce="0"
            class="q-my-auto q-mx-xs"
            color="primary"
            dense
            filled
            use-chips
            :use-input="!atributo"
            :options="filteredAtributos"
            @update:model-value="handleStats"
            @filter="filterAtributo"
          />
          <q-icon
            name="sym_r_add"
            class="q-my-auto"
            size="large"
          />
          <q-select
            v-model="habilidade"
            label="Habilidade"
            input-debounce="0"
            class="q-my-auto q-mx-xs"
            color="primary"
            dense
            filled
            use-chips
            :use-input="!habilidade"
            :options="filteredHabilidades"
            @update:model-value="handleStats"
            @filter="filterHabilidade"
          />
        </div>
        <div class="d-flex">
          <DiceCombinationSaver
            :combinacao-atual="[atributo, habilidade]"
            @selecionarCominacao="selecionarCominacao"
          />
        </div>
      </q-card>

      <q-card
        class="flex-column roll-card"
        bordered
        flat
        style="border-top-left-radius: 0px !important; border-top-right-radius: 0px !important;"
      >
        <div class="d-flex q-mx-auto q-mb-md">
          <q-input
            v-model.number="dies"
            class="q-mx-sm"
            label="Dados"
            type="number"
            min="1"
            max="99"
            stack-label
            filled
            dense
            style="max-width: 120px"
          />

          <q-input
            v-model.number="hunger"
            class="q-mx-sm"
            label="Fome"
            type="number"
            min="0"
            max="5"
            stack-label
            filled
            dense
            style="max-width: 120px"
          />

          <q-input
            v-model.number="difficulty"
            class="q-mx-sm"
            label="Dificuldade"
            type="number"
            min="0"
            max="99"
            stack-label
            filled
            dense
            style="max-width: 120px"
          />
        </div>

        <DiceRoller
          class="q-mx-auto"
          :dies="dies"
          :hunger="hunger"
          :difficulty="difficulty"
        />
      </q-card>
    </div>

    <q-card
      class="rouse-card"
      bordered
      flat
    >
      <RouseCheck />
    </q-card>
  </q-page>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import { useUserStore } from '../store/user'

import { atributos, habilidades } from '@/utils/constantes/index'

import DiceRoller from '@/components/DiceRoller.vue'
import RouseCheck from '@/components/RouseCheck.vue'
import DiceCombinationSaver from '@/components/DiceCombinationSaver.vue'

export default defineComponent({
  name: 'RolagemView',

  components: {
    DiceRoller,
    RouseCheck,
    DiceCombinationSaver
  },

  setup() {
    const userStore = useUserStore()

    const dies = ref(1)
    const hunger = ref(1)
    const difficulty = ref(null)

    const atributo = ref(null)
    const habilidade = ref(null)

    const filteredAtributos = ref(atributos)
    const filteredHabilidades = ref(habilidades)

    const userData = computed(() => userStore.userData)
    const validUserData = computed(() => !!userStore.userData.attributes && !!userStore.userData.abilities)

    const filterHabilidade = (val, update) => {
      update(() => {
        filteredHabilidades.value = habilidades.filter(hab =>
          val.length > 0 
            ? hab.label.toLowerCase().includes(val.toLowerCase())
            : !hab.hidden
        )
      })
    }

    const filterAtributo = (val, update) => {
      update(() => {
        filteredAtributos.value = atributos.filter(atr =>
          val.length > 0 
            ? atr.label.toLowerCase().includes(val.toLowerCase())
            : !atr.hidden
        )
      })
    }

    const handleStats = () => {
      if (userData.value.attributes) {
        
        const att = atributo.value?.value === 'forca_de_vontade' ? userData.value.forca_de_vontade : userData.value.attributes[atributo.value?.value] || 0
        const hab = userData.value.abilities[habilidade.value?.value] === 'forca_de_vontade' ? userData.value.forca_de_vontade : userData.value.abilities[habilidade.value?.value] || 0
        const sum = att + hab
        
        dies.value = sum > 0 ? sum : 1
      } else {
        dies.value = 1
      }
    }

    const selecionarCominacao = (combinacao) => {
      atributo.value = combinacao[0]
      habilidade.value = combinacao[1]

      handleStats()
    }

    return {
      userData,
      validUserData,
      atributos,
      habilidades,
      dies,
      hunger,
      difficulty,
      atributo,
      habilidade,
      filteredAtributos,
      filteredHabilidades,
      filterAtributo,
      filterHabilidade,
      handleStats,
      selecionarCominacao
    }
  }
})
</script>

<style lang="sass" scoped>
.roll-card
  width: 620px
  min-height: 322px
  height: fit-content
  padding: 15px
  margin-left: auto
  margin-top: auto
  margin-bottom: auto

.rouse-card
  height: 200px
  width: 200px
  margin-top: auto
  margin-bottom: auto
  margin-right: auto
  margin-left: 20px

.stats-wrapper
  height: 55px
  margin-top: 10px
  display: flex
  padding-left: 10px
  padding-right: 10px
  justify-content: space-around
  &:deep(.q-field__control)
    height: min-content
    width: 250px !important

#noDataHint
  width: 100%
  left: 0px
  padding-left: 4px
  padding-right: 4px
  text-align: center
  color: #8c8c8c
  
#stats-card, #noDataHint
  border-bottom: none !important
  border-bottom-left-radius: 0px 
  border-bottom-right-radius: 0px
</style>
