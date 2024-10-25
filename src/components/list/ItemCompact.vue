<template>
  <div>
    <span
      v-for="attr in items"
      :key="`attr-${attr.value}`"
      class="d-flex"
    >
      <label
        v-if="attr.shortLabel"
        class="q-mr-sm text-grey-5"
      >
        {{ attr.shortLabel }}:
        <q-tooltip
          v-if="attr.label && attr.label !== attr.shortLabel"
          :delay="400"
        >
          {{ attr.label }}
        </q-tooltip>
      </label>
      <label
        v-else
        class="q-mr-sm"
      >
        {{ attr.label }}:
      </label>
      
      {{ value[attr.value] }}
    </span>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ListCompactItems',

  props: {
    items: {
      type: Array,
      required: true
    },
    value: {
      type: Object,
      required: true
    }
  },

  // emits: ['update:modelValue'],
  
  setup () {
    // Funções adicionais podem ser adicionadas aqui, se necessário.
  }
})
</script>
