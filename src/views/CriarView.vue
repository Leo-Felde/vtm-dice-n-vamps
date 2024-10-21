<template>
  <div>
    <q-stepper
      v-model="currentStep"
      ref="stepper"
      color="primary"
      header-nav
      animated
    >
      <q-step
        v-for="(step, index) in steps"
        :key="`step-${index}`"
        :name="step.name"
        :title="step.title"
        :done="currentStep > step.name"
      >
      <div class="q-pa-md">
        step {{ index }}
      </div>

        <div>
          <q-btn @click="move('back')" v-show="currentStep > 1" color="secondary" class="q-mr-sm"> Voltar </q-btn>
          <q-btn @click="move('foward')" v-show="currentStep < 10" color="primary"> Continuar </q-btn>
        </div>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {

  components: {
  },

  setup () {
    const currentStep = ref(1)

    const steps = ref([
      { name: 1, title: 'Nome' },
      { name: 2, title: 'Clã' },
      { name: 3, title: 'Geração' },
      { name: 4, title: 'Tipo de predador' },
      { name: 5, title: 'Atributos' },
      { name: 6, title: 'Habilidades' },
      { name: 7, title: 'Disciplinas' },
      { name: 8, title: 'Méritos' },
      { name: 9, title: 'Pilares' },
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
      steps,
      move
    }
  }
}

</script>
