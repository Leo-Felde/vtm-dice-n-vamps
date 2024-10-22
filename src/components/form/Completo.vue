<template>
  <q-form
    class="form-completo"
    @submit="onSubmit"
  >
    <div id="character">
      <div class="row q-col-gutter-md q-mb-sm">
        <div class="col-4">
          <q-input
            v-model="form.nome"
            label="Nome"
            outlined
            dense
          />
        </div>
        <div class="col-4">
          <q-input
            v-model="form.conceito"
            label="Conceito"
            outlined
            dense
          />
        </div>
        <div class="col-4">
          <q-select
            v-model="form.predator"
            :options="predatorTypes"
            label="Predador"
            outlined
            dense
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
          />
        </div>
        <div class="col-4">
          <q-input
            v-model="form.ambicao"
            label="Ambição"
            outlined
            dense
          />
        </div>
        <div class="col-4">
          <q-select
            v-model="form.cla"
            :options="clanOptions"
            label="Clã"
            outlined
            dense
          />
        </div>
      </div>
      <div class="row q-col-gutter-md q-mb-sm">
        <div class="col-4">
          <q-input
            v-model="form.sire"
            label="Senhor"
            outlined
            dense
          />
        </div>
        <div class="col-4">
          <q-input
            v-model="form.desejo"
            label="Desejo"
            outlined
            dense
          />
        </div>
        <div class="col-4">
          <q-input
            v-model="form.geracao"
            label="Geração"
            outlined
            dense
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

    <q-btn
      label="Submit"
      type="submit"
      color="primary"
    />
  </q-form>
</template>

<script>
import { onBeforeMount, ref, watch } from 'vue'
import { predatorTypes, clanOptions } from '@/utils/constantes'

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
    formValue: {
      type: Object,
      required: true
    },
  },

  setup(props, { emit }) {
    const form = ref({})

    onBeforeMount(() => {
      form.value = props.formValue
    })

    watch(() => props.formValue, (newValue) => {
      form.value = newValue
    })

    const onSubmit = () => {
      emit('update:formValue', form.value)
    }

    return {
      form,
      predatorTypes,
      clanOptions,
      onSubmit
    }
  }
}
</script>