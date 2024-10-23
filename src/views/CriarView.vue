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
          step {{ index }}
        </div>

        <div>
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
            @click="move('foward')"
          >
            {{ currentStep === 9 ? 'finalizar' : 'Continuar' }}
          </q-btn>
        </div>
      </q-step>
    </q-stepper>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {

  components: {
  },

  setup () {
    const currentStep = ref(1)

    const steps = ref([
      { name: 1, title: 'Clã' },
      { name: 2, title: 'Nome' },
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

<style lang="sass" scoped>
#criar-page
  background-image: url(https://drawdistance.dev/wp-content/uploads/2019/12/Wallpaper_03-1920x1080.jpg)
</style>