<template>
  <q-layout view="hHh lpR fFf">
    <AppBar />
    <q-page-container :class="homePage ? 'no-padding' : ''">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useRoute } from 'vue-router'

import AppBar from './components/layout/AppBar.vue'
import { computed } from 'vue'

const route = useRoute()
const homePage = computed(() => route.name === 'home')

</script>

<style lang="sass" scoped>
.no-padding
  padding-top: 0px !important
</style>
