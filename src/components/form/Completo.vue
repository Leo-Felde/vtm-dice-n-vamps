<template>
  <q-form
    ref="formRef"
    class="form-completo"
  >
    <div id="character">
      <div class="row q-col-gutter-md q-mb-sm">
        <div class="col-4">
          <q-input
            v-model="form.name"
            label="Nome *"
            outlined
            dense
            lazy-rules
            :rules="[rules.obrigatorio]"
          />
        </div>
        <div class="col-4">
          <q-input
            v-model="form.concept"
            label="Conceito *"
            outlined
            dense
            lazy-rules
            :rules="[rules.obrigatorio]"
          />
        </div>
        <div class="col-4">
          <q-select
            v-model="form.predator"
            :options="predatorTypes"
            label="Predador *"
            outlined
            dense
            lazy-rules
            map-options
            emit-value
            :rules="[rules.obrigatorio]"
          >
            <template #option="scope">
              <q-item v-bind="scope.itemProps">
                <q-item-section>
                  <q-item-label>{{ scope.opt.label }}</q-item-label>
                  <q-item-label caption>
                    {{ scope.opt.desc }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
      </div>
      <div class="row q-col-gutter-md q-mb-sm">
        <div class="col-4">
          <q-input
            v-model="form.cronicle"
            label="Crônica"
            outlined
            dense
            lazy-rules
          />
        </div>
        <div class="col-4">
          <q-input
            v-model="form.ambition"
            label="Ambição *"
            outlined
            dense
            lazy-rules
            :rules="[rules.obrigatorio]"
          />
        </div>
        <div class="col-4">
          <q-select
            v-model="form.clan"
            :options="clanOptions"
            label="Clã *"
            outlined
            dense
            :rules="[rules.obrigatorio]"
          />
        </div>
      </div>
      <div class="row q-col-gutter-md q-mb-sm">
        <div class="col-4">
          <q-input
            v-model="form.sire"
            label="Senhor *"
            outlined
            dense
            lazy-rules
            :rules="[rules.obrigatorio]"
          />
        </div>
        <div class="col-4">
          <q-input
            v-model="form.wishes"
            label="Desejo"
            outlined
            dense
            lazy-rules
          />
        </div>
        <div class="col-4">
          <q-select
            v-model="form.generation"
            :options="ageOptions"
            label="Geração *"
            outlined
            dense
            lazy-rules
            map-options
            emit-value
            :rules="[rules.obrigatorio]"
          >
            <template #option="scope">
              <q-item v-bind="scope.itemProps">
                <q-item-section>
                  <q-item-label>{{ scope.opt.label }}</q-item-label>
                  <q-item-label caption>
                    {{ scope.opt.desc }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
      </div>
    </div>
    <div
      id="attrs"
      class="q-mt-lg"
    >
      <q-separator class="q-mb-sm" />
      <h5 class="text-center q-ma-none">
        Atributos
      </h5>
      <q-separator class="q-mt-sm q-mb-md" />

      <FormAtributos v-model="form.attributes" />

      <div class="d-flex">
        <StatsCheckbox
          v-model="form.vitality"
          class="q-ml-auto q-mr-md"
          label="Vitalidade"
          top-label
          checkbox-count="10"
        />
        <StatsCheckbox
          v-model="form.forca_de_vontade"
          class="q-mr-auto q-ml-md"
          label="Força de vontade"
          top-label
          checkbox-count="10"
        />
      </div>
    </div>

    <div
      id="skills"
      class="q-mt-lg"
    >
      <h5 class="text-center q-ma-none">
        Habilidades
      </h5>
      <q-separator class="q-mt-sm q-mb-md" />

      <FormHabilidades
        v-model="form.abilities"
        v-model:especialidades="form.specialties"
        show-specialties=""
      />
    </div>
  </q-form>
</template>

<script>
import { ref, watch } from 'vue'

import { predatorTypes, clanOptions, ageOptions } from '@/utils/constantes'
import { rules } from '../../utils/validationRules'

import FormAtributos from './Atributos.vue'
import FormHabilidades from './Habilidades.vue'
import StatsCheckbox from './StatsCheckbox.vue'

export default {
  name: 'CharacterForm',

  components: {
    FormAtributos,
    FormHabilidades,
    StatsCheckbox
  },

  props: {
    modelValue: {
      type: Object,
      required: true
    },
    showSaveBtn: Boolean,
    showDiscardBtn: Boolean
  },

  setup(props, { emit }) {
    const formRef = ref(null)

    const form = ref({ ...props.modelValue })

    watch(form, (newVal) => {
      emit('update:modelValue', newVal)
    },
    { deep: true })

    async function validate  () {
      const success = await formRef.value.validate()
      return success
    }

    function reset (toValue) {
      Object.assign(form.value, toValue) 
    }

    return {
      formRef,
      rules,
      form,
      predatorTypes,
      ageOptions,
      clanOptions,
      validate,
      reset
    }
  }
}
</script>