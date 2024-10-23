<template>
  <div class="row q-col-gutter-md q-mb-sm">
    <div class="col-4 q-gutter-y-sm">
      <h6 class="q-ma-none text-center">
        Físicos
      </h6>
      <StatsCheckbox
        v-model="form.forca"
        label="Força"
      />

      <StatsCheckbox
        v-model="form.destreza"
        label="Destreza"
      />

      <StatsCheckbox
        v-model="form.vigor"
        label="Vigor"
      />
    </div>

    <div class="col-4 q-gutter-y-sm">
      <h6 class="q-ma-none text-center">
        Sociais
      </h6>
      <StatsCheckbox
        v-model="form.carisma"
        label="Carisma"
      />

      <StatsCheckbox
        v-model="form.manipulacao"
        label="Manipulação"
      />

      <StatsCheckbox
        v-model="form.autocontrole"
        label="Autocontrole"
      />
    </div>
    <div class="col-4 q-gutter-y-sm">
      <h6 class="q-ma-none text-center">
        Mentais
      </h6>
      <StatsCheckbox
        v-model="form.inteligencia"
        label="Inteligência"
      />

      <StatsCheckbox
        v-model="form.raciocinio"
        label="Raciocínio"
      />

      <StatsCheckbox
        v-model="form.determinacao"
        label="Determinação"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
import StatsCheckbox from './StatsCheckbox.vue'

export default defineComponent({
  components: {
    StatsCheckbox
  },

  props: {
    modelValue: {
      type: Object,
      required: true
    }
  },
  
  setup(props, { emit }) {
    const form = ref({ ...props.modelValue })

    watch(form, (newVal) => {
      emit('update:modelValue', newVal)
    }, { deep: true })

    watch(() => props.modelValue, (newVal) => {
      if (JSON.stringify(newVal) !== JSON.stringify(form.value)) {
        form.value = { ...newVal }
      }
    }, { deep: true })

    return {
      form
    }
  }
})
</script>
