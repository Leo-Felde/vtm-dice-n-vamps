<template>
  <q-expansion-item>
    <template #header>
      <q-item-section avatar>
        <q-img
          :src="getDisciplineIcon()"
          width="50px"
          height="50px"
        />
      </q-item-section>

      <q-item-section>
        {{ disciplinaSelecionada.label }}
      </q-item-section>

      <q-item-section side>
        <StatsCheckbox v-model="form.level" />
      </q-item-section>
    </template>
    <div class="row q-gutter-md d-flex">
      <q-card
        v-for="(poder, index) in disciplinePowers[disciplinaSelecionada.value]"
        :key="`${disciplinaSelecionada.label}-power-${index}`"
        class="power-card q-mx-auto"
        bordered
        flat
      >
        <div class="header">
          <label>
            {{ poder.label }}
          </label>

          <div class="power-lvl">
            LV {{ poder.level }}
          </div>
        </div>

        <div class="power-desc">
          {{ poder.desc }}
        </div>

        <div
          v-if="!lockedPowers.includes(poder.value)"
          class="q-mt-auto d-flex"
        >
          <q-btn
            color="primary"
            flat
            outline
            class="q-ml-auto"
            :disable="!canAquire"
          >
            Adquirir
          </q-btn>
        </div>
      </q-card>
    </div>
  </q-expansion-item>
</template>

<script>
import { computed, defineComponent, ref, toRaw, watch } from 'vue'

import { disciplineOptions, disciplinePowers } from '@/utils/constantes/disciplinas'

import StatsCheckbox from './StatsCheckbox.vue'

export default defineComponent({
  name: 'InputDisciplina',

  components: {
    StatsCheckbox
  },

  props: {
    modelValue: {
      type: Object,
      required: true
    },

    disciplina: {
      type: String,
      required: true
    },

    lockedPowers: {
      type: Array,
      default: () => []
    }
  },

  emits: ['update:modelValue'],
  setup (props, { emit }) {
    const form = ref({ ...props.modelValue })

    const getDisciplineIcon = () => {
      return require(`@/assets/img/disciplinas/${props.disciplina || 'ofuscacao'}.png`)
    }

    watch(form.value, (newVal) => {
      emit('update:modelValue', newVal)
    },
    { deep: true })

    watch(() => props.modelValue, (newVal) => {
      if (JSON.stringify(newVal) !== JSON.stringify(toRaw(form.value))) {
        form.value = { ...newVal }
      }
    }, { deep: true })

    const canAquire = computed(() => form.value.level < form.value.powers?.length)

    const disciplinaSelecionada = computed(() => disciplineOptions.filter(disciplina => disciplina.value === props.disciplina)[0])

    return {
      form,
      disciplinaSelecionada,
      disciplinePowers,
      canAquire,
      getDisciplineIcon
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

.power-card
  height: 120px
  width: 280px
  padding: 10px
  display: flex
  flex-direction: column
  .header
    display: flex
    justify-content: space-between
    label
      font-size: 0.9rem
    .power-desc
      margin-top: 4px
      font-size: 0.65rem
      padding-left: 4px
      padding-right: 4px
      font-weight: 150px

.power-lvl
  padding-left: 4px
  padding-right: 4px
  border-radius: 5px
  background-color: #971d1d 
  height: fit-content
  font-size: 0.7rem

:deep(.q-expansion-item__content)
  max-height: 200px !important
  overflow-y: scroll
  border-top: 1px solid #8a1d1d
  padding-top: 8px
  padding-bottom: 8px
  .row
    display: flex

</style>