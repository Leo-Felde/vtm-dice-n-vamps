<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      id="app-header"
      class="bg-dark text-white"
    >
      Header
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="sass" scoped>
#app-header
  height: 45px
  background: var(--q-dark-page) !important
  border-bottom: 1px solid #5a5b60
  display: flex
</style>
