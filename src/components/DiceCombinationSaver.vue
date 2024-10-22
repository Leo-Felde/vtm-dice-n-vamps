<template>
  <div
    id="dice-combination-saver"
    class="d-flex"
  >
    <q-card
      class="combination save-combination"
      flat
      bordered
      @click="saveCombination"
    >
      <q-icon name="s_add" />
      <q-tooltip :delay="600">
        salvar combinação atual
      </q-tooltip>
    </q-card>

    <div id="saved-dice-wrapper">
      <q-card
        v-for="(combinacao, index) in combinacoesSalvas"
        :key="`combinacao-${index}`"
        class="combination justify-center"
        :class="combinacaoSelecionada(index) ? 'selected' : ''"
        flat
        bordered
        @click="$emit('selecionarCominacao', combinacao)"
      >
        <span class="q-my-auto">
          {{ index + 1 }}
        </span>
        <q-tooltip>
          {{ combinacao[0].label }} + {{ combinacao[1].label }} ({{ userData[combinacao[0].value] + userData[combinacao[1].value] || '0' }})
        </q-tooltip>
        <q-menu
          touch-position
          context-menu
        >
          <q-list
            dense
            style="min-width: 100px"
          >
            <q-item
              v-close-popup
              clickable
              @click="replaceCombination(index)"
            >
              <q-item-section>Substituir</q-item-section>
            </q-item>
            <q-item
              v-close-popup
              clickable
              @click="deleteCombination(index)"
            >
              <q-item-section>Excluir</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-card>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useUserStore } from '../store/user'

export default defineComponent({
  name: 'DiceCombinationSaver',

  props: {
    combinacaoAtual: {
      type: Array,
      default: null
    }
  },

  emits: ['selecionarCominacao'],
  setup (props) {
    const userStore = useUserStore()

    const combinacoesSalvas = computed(() => {
      return userStore.userData.savedDie
    })

    const userData = computed(() => {
      return userStore.userData
    })

    const saveCombination = () => {
      if (!props.combinacaoAtual[0]?.value || !props.combinacaoAtual[1]?.value || combinacoesSalvas.value.length > 9) return

      userStore.saveDieCobination(props.combinacaoAtual)
    }

    const replaceCombination = (index) => {
      if (!props.combinacaoAtual?.length) return

      userStore.saveDieCobination(props.combinacaoAtual, index)
    }

    const deleteCombination = (index) => {
      if (!props.combinacaoAtual?.length) return

      userStore.deleteDieCombination(index)
    }

    const combinacaoSelecionada = (index) => {
      if (!props.combinacaoAtual) return false

      return JSON.stringify(props.combinacaoAtual) === JSON.stringify(combinacoesSalvas.value[index])
    }

    return {
      combinacoesSalvas,
      userData,
      saveCombination,
      replaceCombination,
      deleteCombination,
      combinacaoSelecionada
    }
  }
})

</script>

<style lang="sass" scoped>


.combination
  width: 30px
  height: 30px
  cursor: pointer
  display: flex
  background: black
  margin-left: 4px
  margin-right: 4px
  flex: 1 0 auto
  margin-top: auto
  margin-bottom: auto
  transition: transform 0.5s ease
  .q-icon
    margin: auto
  &.selected
    border-color: var(--q-primary) !important
    transform: translateY(-4px) !important
  

#dice-combination-saver
  max-width: inherit
  margin-left: auto
  margin-right: auto
  overflow: hidden
  padding-left: 40px
  height: 44px
  width: 420px
  position: relative

#saved-dice-wrapper
  display: flex
  max-width: inherit
  overflow: auto

.save-combination
  position: absolute
  left: 0px
  top: 7px
</style>