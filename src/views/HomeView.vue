<template>
  <div class="home">
    <section class="q-my-auto text-center">
      Olá, bem vindo ao [PLACEHOLDER], aqui você pode importar seus dados ou criar um novo vampiro & fazer rolagens de forma fácil e intuitiva.
      <div>
      <q-btn>
        Criar personagem
      </q-btn>
      <q-btn>
        Importar personagem
      </q-btn>
      <q-btn>
        Fazer rolagem simples
      </q-btn>
    </div>

    </section>
    <img alt="logo Vampiro a máscara" src="../assets/logo.png" id="vtm-logo" class="q-mx-auto">
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style lang="sass" scoped>
.home
  display: flex
  padding-left: 25%
  padding-right: 25%

#vtm-logo
  width: 50%
</style>
