<template>
  <q-layout view="hHh lpR fFf">
    <AppBar />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import AppBar from './components/layout/AppBar.vue'

</script>

<style lang="sass" scoped>
/* a */
</style>
