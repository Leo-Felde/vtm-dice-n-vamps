<template>
  <q-layout view="hHh lpR fFf">
    <AppBar />
    <DrawerFicha v-model="showDrawer" />

    <q-page-container :class="homePage ? 'no-padding' : ''">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import AppBar from './components/layout/AppBar.vue'
import DrawerFicha from './components/layout/DrawerFicha.vue'

const route = useRoute()
const homePage = computed(() => route.name === 'home')
const showDrawer = computed(() => route.name === 'RolarDados')

</script>

<style lang="sass" scoped>
.no-padding
  padding-top: 0px !important
</style>
