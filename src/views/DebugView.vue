<template>
  <q-page class="about">
    <div
      v-if="validUserData"
      class="row"
    >
      <div
        v-for="discipline in getClanDisciplines()"
        :key="`discipline-${discipline}`"
        class="col-4"
      >
        <Disciplina
          v-model="userData.disciplines[discipline]"
          :disciplina="discipline"
        />
      </div>
    </div>

    <q-btn
      outline
      to="/"
    >
      Voltar ao app
    </q-btn>
  </q-page>
</template>

<script>
import { computed } from 'vue'
import { useUserStore } from '@/store/user'

import { clanOptions } from '@/utils/constantes/index'

import Disciplina from '@/components/form/Disciplina.vue'

export default {
  components: {
    Disciplina
  },

  setup () {
    const userStore = useUserStore()

    const userData = computed(() => userStore.userData)
    const validUserData = computed(() => !!userStore.userData?.disciplines)

    const getClanDisciplines = () => {
      if (!validUserData.value) return null

      const clanPersoangem = clanOptions.filter(clan => clan.value === userData.value.clan)[0]
      if (!clanPersoangem) return null
      
      return clanPersoangem.disciplines
    }

    return {
      userData,
      validUserData,
      getClanDisciplines
    }
  }
}
</script>
