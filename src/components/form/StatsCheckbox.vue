<template>
  <div
    class="q-pa-md"
    :class="topLabel ? 'flex-column' : 'd-flex justify-space-between'"
  >
    <label
      class="q-mr-smo"
      :class="topLabel ? 'q-mx-auto' : 'q-my-auto'"
    >
      {{ label }}
      <q-tooltip
        v-if="tooltip"
        anchor="bottom middle"
        self="bottom middle"
        :offset="[10, 10]"
      >
        {{ tooltip }}
      </q-tooltip>
    </label>
    <div
      v-if="isSlotUsed"
      class="stats-slot"
    >
      <slot />
    </div>
    <div class="d-flex justify-center">
      <q-checkbox
        v-for="index in checkboxes.length"
        :key="index"
        v-model="checkboxes[index - 1]"
        :class="index % 5 === 1 ? 'q-ml-md' : ''"
        class="stats-checkbox"
        label=""
        dense
        :disable="index > checkedCount + 1 || index < checkedCount"
        @update:model-value="updateCheckedCount"
      />
    </div>
  </div>
</template>

<script>
import { ref, watch, computed, onBeforeMount, useSlots } from 'vue'

export default {
  name: 'MyCheckboxGroup',
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    label: {
      type: String,
      default: 'Label'
    },
    tooltip: {
      type: String,
      default: null
    },
    checkboxCount: {
      type: Number,
      default: 5
    },
    topLabel: {
      type: Boolean,
      default: false
    }
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const slots = useSlots()

    const checkboxes = ref([])

    onBeforeMount(() => {
      for (let i = 0; i < props.checkboxCount; i++) {
        checkboxes.value[i] = false
      }
    })

    watch(() => props.modelValue, (newValue) => {
      checkboxes.value = checkboxes.value.map((_, index) => index < newValue)
    })

    const updateCheckedCount = () => {
      const count = checkboxes.value.filter(Boolean).length
      emit('update:modelValue', count)
    }

    const checkedCount = computed(() => {
      return checkboxes.value.filter(Boolean).length
    })

    return {
      isSlotUsed: !!slots['default'],
      checkboxes,
      checkedCount,
      updateCheckedCount,
    }
  },
}
</script>

<style lang="sass" scoped>
.stats-slot
  width: 250px
  margin-left: auto
  padding-right: 8px
  padding-left: 8px
  margin-top: auto
  margin-bottom: auto
</style>
