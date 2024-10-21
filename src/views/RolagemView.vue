<template>
  <div
    class="d-flex q-mx-auto page-view"
  >
    <q-card class="flex-column roll-card">
      <div class="d-flex q-mx-auto q-mb-md">
        <q-input
          v-model.number="dies"
          class="q-mx-sm"
          label="Dados"
          type="number"
          min="1"
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
          min="1"
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
          min="1"
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
    <q-card class="rouse-card">
      <RouseCheck />
    </q-card>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

import DiceRoller from '@/components/DiceRoller.vue'
import RouseCheck from '@/components/RouseCheck.vue'

export default defineComponent({
  name: 'RolagemView',

  components: {
    DiceRoller,
    RouseCheck
  },

  setup () {
    const dies = ref(1)
    const hunger = ref(1)
    const difficulty = ref(null)


    return {
      dies,
      hunger,
      difficulty
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

</style>
