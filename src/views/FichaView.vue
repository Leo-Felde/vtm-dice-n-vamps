<template>
  <q-page>
    <q-card
      class="card-ficha"
      flat
      bordered
    >
      <FormCompleto
        ref="formulario"
        v-model="formAtual"
      />
      <div class="d-flex">
        <q-btn
          class="q-ml-auto"
          label="Descartar Alterações"
          flat
          :disable="!alteracoesPendentes"
          @click="descartarAlteracoes"
        />
        <q-btn
          class="q-ml-md"
          color="primary"
          label="salvar"
          @click="salvar"
        />
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useUserStore } from '../store/user'

import FormCompleto from '../components/form/Completo.vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'FichaCompletaView',

  components: {
    FormCompleto
  },

  emits: ['update:modelValue'],
  setup () {
    const formulario = ref(null)

    const $q = useQuasar()
    const userStore = useUserStore()
    const formAtual = ref({...userStore.userData})

    onMounted(() => {
      Object.assign(formAtual.value, userData.value) 
    })
  
    const userData = computed(() => {
      return userStore.userData
    })

    const alteracoesPendentes = computed(() => {
      return JSON.stringify(userData.value) !== JSON.stringify(formAtual.value) 
    })

    const salvar = async () => {
      const valid = await formulario.value.validate()
      console.log(valid)

      if (!valid) {
        setTimeout(() => {
          const campoInvalido = document.getElementsByClassName('q-field--error')[0]
          
          if (campoInvalido) {
            campoInvalido.scrollIntoView({ behavior: 'smooth' })
          }
        }, 250)

        return
      }
      console.log('salvar')

      userStore.setUserData(formAtual.value)
      $q.notify({
        message: 'Alterações salvas com sucesso',
        color: 'primary'
      })
    }

    const descartarAlteracoes = () => {
      $q.dialog({
        title: 'Descartar alterações',
        message: 'Descartar todas as alterações e reverter os dados?',
        persistent: true,
        cancel: {
          color: 'primary',
          label: 'Descartar',
          flat: true,
        },
        ok: {
          color: 'primary',
          label: 'Cancelar'
        },
      }).onCancel(() => {
        formulario.value.reset(userData.value)
      })
    }

    return {
      formulario,
      formAtual,
      salvar,
      descartarAlteracoes,
      alteracoesPendentes
    }
  }
})
</script>

<style lang="sass" scoped>
.card-ficha
  width: fit-content !important
  margin-left: auto
  margin-right: auto
  padding: 20px
  margin-top: 20px
  margin-bottom: 20px

:deep
  #character, #attrs, #stats
    max-width: 900px
    margin-left: auto
    margin-right: auto
  #attrs, #skills
    max-width: 1200px
    margin-left: auto
    margin-right: auto
</style> 