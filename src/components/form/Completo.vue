<template>
  <q-page class="q-pa-md">
    <q-form @submit="onSubmit" class="q-gutter-md">

      <q-input
        v-model="form.nome"
        label="Nome"
        outlined
      />

      <q-input
        v-model="form.conceito"
        label="Conceito"
        outlined
      />

      <q-select
        v-model="form.predador"
        :options="predadorOptions"
        label="Predador"
        outlined
      />

      <q-input
        v-model="form.cronica"
        label="Crônica"
        outlined
      />

      <q-input
        v-model="form.ambicao"
        label="Ambição"
        outlined
      />

      <q-select
        v-model="form.cla"
        :options="claOptions"
        label="Clã"
        outlined
      />

      <q-input
        v-model="form.senhor"
        label="Senhor"
        outlined
      />

      <q-input
        v-model="form.desejo"
        label="Desejo"
        outlined
      />

      <q-input
        v-model="form.geracao"
        label="Geração"
        outlined
      />

      <q-btn label="Submit" type="submit" color="primary" />
    </q-form>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'CharacterForm',

  setup () {
    const form = ref({
      nome: '',
      conceito: '',
      predador: '',
      cronica: '',
      ambicao: '',
      cla: '',
      senhor: '',
      desejo: '',
      geracao: ''
    })

    const predadorOptions = [
      'Alleycat', 'Bagger', 'Bloodleech', 'Clever', 'Consensualist',
      'Farmer', 'Osiris', 'Sandman', 'Scene Queen', 'Siren'
    ]

    const claOptions = [
      'Brujah', 'Gangrel', 'Malkavian', 'Nosferatos', 'Toreador',
      'Tremere', 'Ventrue', 'Caitiff'
    ]

    const onSubmit = () => {
      console.log(form.value)
    }

    return {
      form,
      predadorOptions,
      claOptions,
      onSubmit
    }
  }
}
</script>

<style scoped>
.q-form {
  max-width: 400px;
  margin: 0 auto;
}
</style>
