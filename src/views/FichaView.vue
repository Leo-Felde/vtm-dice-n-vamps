<template>
  <q-page class="page-view ">
    <q-card
      class="card-ficha"
      flat
      bordered
    >
      <FormCompleto
        ref="formulario"
        v-model="formAtual"
      />
      <div>
        <q-btn
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

export default defineComponent({
  name: 'FichaCompletaView',

  components: {
    FormCompleto
  },

  emits: ['update:modelValue'],
  setup () {
    const formulario = ref(null)

    const userStore = useUserStore()
    const formAtual = ref({})

    onMounted(() => {
      formAtual.value = { ...userData.value }
    })
  
    const userData = computed(() => {
      return userStore.userData
    })

    const alteracoesPendentes = computed(() => {
      return JSON.stringify(userData.value) !== JSON.stringify(formAtual.value) 
    })

    const salvar = async () => {
      const valid = await formulario.value.validate()

      if (!valid) {
        setTimeout(() => {
          const campoInvalido = document.getElementsByClassName('q-field--error')[0]
          
          if (campoInvalido) {
            campoInvalido.scrollIntoView({ behavior: 'smooth' })
          }
        }, 250)

        return
      }

      userStore.setUserData(formAtual.value)
    }

    return {
      formulario,
      formAtual,
      salvar,
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