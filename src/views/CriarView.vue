<template>
  <q-page id="criar-page">
    <q-stepper
      ref="stepper"
      v-model="currentStep"
      class="q-mt-md q-mx-lg"
      color="primary"
      header-nav
      animated
      flat
      bordered
    >
      <q-step
        v-for="(step, index) in steps"
        :key="`step-${index}`"
        :name="step.name"
        :title="step.title"
        :done="currentStep > step.name"
      >
        <div class="q-pa-md">
          <component
            :is="step.component"
            v-if="step.component"
            v-model="form[step.value]"
          />
          <span v-else> step {{ index }} </span>
        </div>
      </q-step>
      <template #navigation>
        <q-stepper-navigation>
          <q-btn
            v-show="currentStep > 1"
            flat
            class="q-mr-sm"
            @click="move('back')"
          >
            Voltar
          </q-btn>
          <q-btn
            v-show="currentStep < 10"
            color="primary"
            class="q-ml-auto"
            @click="move('foward')"
          >
            {{ currentStep === 9 ? 'finalizar' : 'Continuar' }}
          </q-btn>
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </q-page>
</template>

<script>
import { ref } from 'vue'

import FormClanIntuitivo from '@/components/form/intuitivo/Clan.vue'

export default {

  components: {
    FormClanIntuitivo
  },

  setup () {
    const currentStep = ref(1)
    const form = ref({ clan: null, userData: {}, geracao: null, predator: null})

    const steps = ref([
      { name: 1, title: 'Clã', component: 'FormClanIntuitivo', value: 'clan' },
      { name: 2, title: 'Nome', value: 'userData'},
      { name: 3, title: 'Geração', generation: 'geracao' },
      { name: 4, title: 'Tipo de predador', value: 'predator' },
      { name: 5, title: 'Atributos', value: 'attributes' },
      { name: 6, title: 'Habilidades', value: 'abilities'  },
      { name: 7, title: 'Disciplinas', value: 'disciplines'  },
      { name: 8, title: 'Méritos', value: 'merits'  },
      { name: 9, title: 'Pilares', value: 'pillars'  },
      { name: 10, title: 'Fim' }
    ])

    const move = (direction = 'foward') => {
      if (direction === 'foward' && currentStep.value < steps.value.length) {
        currentStep.value = currentStep.value + 1
      } else if (currentStep.value > 1) {
        currentStep.value = currentStep.value - 1
      }
    }

    return {
      currentStep,
      form,
      steps,
      move
    }
  }
}

</script>

<style lang="sass" scoped>
.q-stepper--flat
  background-color: transparent
  border: none !important

::v-deep  
  .q-stepper__header, .q-stepper__nav
    background-color: var(--q-dark-page)
    border: 1px solid #5a5b60
    margin-left: auto
    margin-right: auto
    max-width: 80dvw
    box-shadow: 2px 2px 5px #171717
  .q-stepper__step
    max-height: 75dvh
    overflow-y: scroll

.q-stepper__nav
  padding: 15px
  display: flex

:deep(.q-stepper__step-content)
  max-width: 1200px
  margin-left: auto
  margin-right: auto
</style>