<template>
  <q-form
    ref="formRef"
    class="form-completo"
  >
    <div id="character">
      <div class="row q-col-gutter-md q-mb-sm">
        <div class="col-4">
          <q-input
            v-model="form.nome"
            label="Nome *"
            outlined
            dense
            lazy-rules
            :rules="[rules.obrigatorio]"
          />
        </div>
        <div class="col-4">
          <q-input
            v-model="form.conceito"
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
            v-model="form.cronica"
            label="Crônica"
            outlined
            dense
            lazy-rules
            :rules="[rules.obrigatorio]"
          />
        </div>
        <div class="col-4">
          <q-input
            v-model="form.ambicao"
            label="Ambição *"
            outlined
            dense
            lazy-rules
            :rules="[rules.obrigatorio]"
          />
        </div>
        <div class="col-4">
          <q-select
            v-model="form.cla"
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
            v-model="form.desejo"
            label="Desejo *"
            outlined
            dense
            lazy-rules
            :rules="[rules.obrigatorio]"
          />
        </div>
        <div class="col-4">
          <q-input
            v-model="form.geracao"
            label="Geração *"
            outlined
            dense
            lazy-rules
            :rules="[rules.obrigatorio]"
          />
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
import { reactive, ref, watch } from 'vue'

import { predatorTypes, clanOptions } from '@/utils/constantes'
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

    const form = reactive({ ...props.modelValue })

    watch(form, (newVal) => {
      emit('update:modelValue', newVal)
    },
    { deep: true })

    function validate () {
      formRef.value.validate().then(success => {
        return success
      })
    }

    return {
      formRef,
      rules,
      form,
      predatorTypes,
      clanOptions,
      validate
    }
  }
}
</script>