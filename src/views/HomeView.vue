<template>
  <q-page id="home-page">
    <section class="q-my-auto text-center">
      Olá, bem vindo ao dice-n-vamps aqui você pode importar seus dados ou criar um novo vampiro e fazer rolagens de forma fácil e intuitiva.
      <div>
        <q-btn
          flat
          to="/criar"
        >
          Criar vampiro
        </q-btn>
        <q-btn
          flat
          @click="importarFicha"
        >
          Importar vampiro
        </q-btn>
        <q-btn
          flat
          to="/rolar"
        >
          Fazer rolagens
        </q-btn>
      </div>
    </section>
    <img
      id="vtm-logo"
      alt="logo Vampiro a máscara"
      src="../assets/vtm-logo.png"
      class="q-mx-auto"
    >
  </q-page>
</template>

<script>
import { useUserStore } from '@/store/user'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'


export default {
  name: 'HomeView',
  components: {

  },

  setup () {
    const $q = useQuasar()
    const userStore = useUserStore()
    const router = useRouter()

    const importarFicha = async () => {
      const success = await userStore.importJson()

      if (success) {
        $q.notify({
          message: 'Vampiro importado com sucesso!',
          color: 'primary',
          actions: [
            { label: 'abrir ficha', color: 'white', handler: () => {
              router.push('/ficha')
            } }
          ]
        })
      }
    }

    return {
      importarFicha
    }
  }
}
</script>

<style lang="sass" scoped>
#home-page
  height: 100dvh
  display: flex
  padding-left: 25%
  padding-right: 25%
  background-image: url(https://drawdistance.dev/wp-content/uploads/2019/12/Wallpaper_06-1920x1080.jpg)
  section
    font-size: 1.5rem

#vtm-logo
  width: 300px
  height: 190px
  margin-top: auto
  margin-bottom: auto
</style>
