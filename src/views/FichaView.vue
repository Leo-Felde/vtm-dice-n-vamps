<template>
  <q-page class="d-flex">
    <q-card
      class="card-ficha"
      flat
      bordered
    >
      <FormCompleto
        ref="formulario"
        v-model="formAtual"
        :disable="!usuarioImportado"
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
    <div class="floating-actions">
      <q-card
        class="card-btn"
        @click="importarNovamente"
      >
        <q-icon
          color="white"
          name="sym_r_upload_file"
          size="lg"
        />
        <q-tooltip>
          Importar vampiro
        </q-tooltip>
      </q-card>

      <q-card
        class="card-btn"
        @click="baixarJSON"
      >
        <q-icon
          color="white"
          name="sym_r_browser_updated"
          size="lg"
        />

        <q-tooltip>
          Baixar JSON
        </q-tooltip>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useUserStore } from '../store/user'

import FormCompleto from '../components/form/Completo.vue'
import { useQuasar } from 'quasar'
import { isEqual } from 'lodash-es'

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
  
    const userData = computed(() =>  userStore.userData)

    const alteracoesPendentes = computed(() => {
      return !isEqual(userData.value, formAtual.value) 
    })

    const usuarioImportado = computed(() => {
      return !!userData.value.name
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
      $q.notify({
        message: 'Alterações salvas com sucesso',
        color: 'primary'
      })
    }

    const descartarAlteracoes = (reset = true) => {
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
      }).onOk(() => false).onCancel(() => {
        if (!reset) return true
        formulario.value.reset(userData.value)
      })
    } 

    const importarNovamente = async () => {
      if (await userStore.importJson()) {
        formulario.value.reset(userData.value)
      }
    }

    const baixarJSON = () => {
      if (!userData.value?.name || userData.value?.attributes?.length) return

      const jsonStr = JSON.stringify(userData.value, null, 2)
    
      const blob = new Blob([jsonStr], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
    
      const a = document.createElement('a')
      a.href = url
      a.download = `${userData.value.name}.json`
    
      document.body.appendChild(a)
      a.click()
    
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }

    return {
      formulario,
      usuarioImportado,
      formAtual,
      salvar,
      descartarAlteracoes,
      alteracoesPendentes,
      importarNovamente,
      baixarJSON
    }
  }
})
</script>

<style lang="sass" scoped>
.card-ficha
  max-width: 1260px !important
  width: fit-content
  height: fit-content
  margin-left: auto
  margin-right: auto
  padding: 20px
  margin-top: 20px
  margin-bottom: 20px

.floating-actions
  position: fixed
  right: 250px
  top: 100px
  cursor: pointer

:deep
  #character, #attrs, #stats
    max-width: 900px
    margin-left: auto
    margin-right: auto
  #attrs, #skills
    max-width: 1200px
    margin-left: auto
    margin-right: auto

.card-btn
  width: 60px
  height: 60px
  text-align: center
  margin-bottom: 15px
  .q-icon
    margin-top: 10px
</style> 