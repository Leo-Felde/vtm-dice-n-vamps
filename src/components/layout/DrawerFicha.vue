<template>
  <q-drawer
    v-model="showValue"
    :width="300"
    bordered
  > 
    <div
      v-if="!userData.name"
      class="d-flex q-mt-sm"
    >
      <q-btn
        flat
        class="q-mx-auto"
        @click="importarFicha"
      >
        Importar vampiro
      </q-btn>
    </div>
    <q-scroll-area
      v-else
      class="fit"
    >
      <q-list class="q-pa-sm">
        <q-item
          clickable
          to="/ficha"
        >
          <q-item-section>
            <q-item-label class="q-mx-auto text-h6">
              {{ userData.name }}
            </q-item-label>
            <q-item-label
              caption
              class="q-mx-auto text-capitalize"
            >
              {{ userData.clan }} - Geração {{ ageOptions.filter(age => age.value === userData.generation)[0].label }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <label class="text-h6 q-ml-md">
          Atributos
        </label>            
        <q-item>
          <q-item-section>
            <q-item-label class="label-tipo">
              Físicos
            </q-item-label>
            <ListItemCompact
              :items="attrFisicos"
              :value="userData.attributes"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label class="label-tipo">
              Sociais
            </q-item-label>
            <ListItemCompact
              :items="attrSociais"
              :value="userData.attributes"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label class="label-tipo">
              Mentais
            </q-item-label>
            <ListItemCompact
              :items="attrMentais"
              :value="userData.attributes"
            />
          </q-item-section>
        </q-item>
        <div class="q-ma-md d-flex justify-space-between">
          <span>
            <label class="text-grey-5">Vitalidade:</label> 
            {{ userData.vitality }}
          </span>
          <span>
            <label class="text-grey-5">Força de Vontade:</label> 
            {{ userData.forca_de_vontade }}
          </span>
        </div>

        <label class="text-h6 q-ml-md">
          Habilidades
        </label>            
        <q-item>
          <q-item-section>
            <q-item-label class="label-tipo">
              Físicas
            </q-item-label>
            <ListItemCompact
              :items="habFisicas"
              :value="userData.abilities"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label class="label-tipo">
              Sociais
            </q-item-label>
            <ListItemCompact
              :items="habSociais"
              :value="userData.abilities"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label class="label-tipo">
              Mentais
            </q-item-label>
            <ListItemCompact
              :items="habMentais"
              :value="userData.abilities"
            />
          </q-item-section>
        </q-item>

        <label
          v-show="userData.disciplines"
          class="text-h6 q-ml-md"
        >
          Disciplinas
        </label>
        <q-item v-if="userData.disciplines">
          <q-item-section
            v-for="disciplina in Object.keys(userData.disciplines)"
            :key="`dados-disciplina-${disciplina}`"
            style="justify-content: start;"
          >
            <q-item-label class="">
              {{ disciplineOptions.filter(disc => disc.value === disciplina)[0].label }}: lvl {{ userData.disciplines[disciplina].level }}
            </q-item-label>
            <span
              v-for="power in userData.disciplines[disciplina]?.powers"
              :key="`${disciplina}-${power}`"
              class="text-grey-5 q-mt-sm"
              style="font-size: 0.85rem; line-height: 13px;"
            >
              {{ disciplinePowers[disciplina].filter(pow => pow.value === power)[0].label }}
              <q-tooltip
                :delay="500"
                anchor="center right"
              >
                {{ disciplinePowers[disciplina].filter(pow => pow.value === power)[0].longDesc }}
              </q-tooltip>
            </span>
          </q-item-section>
        </q-item>     
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import { atributos, habilidades, ageOptions } from '@/utils/constantes'
import { disciplineOptions, disciplinePowers } from '@/utils/constantes/disciplinas'

import { useUserStore } from '@/store/user'
import { useQuasar } from 'quasar'
import ListItemCompact from '../list/ItemCompact.vue'


export default defineComponent({
  name: 'DrawerFicha',

  components: {
    ListItemCompact
  },

  props: {
    show: Boolean
  },

  setup (props) {
    const userStore = useUserStore()
    const $q = useQuasar()

    const showValue = ref(props.show)
    const attrFisicos = ref(atributos.slice(0, 3))
    const attrSociais = ref(atributos.slice(3, 6))
    const attrMentais = ref(atributos.slice(6, 9))
    const habFisicas = ref(habilidades.slice(0, 9))
    const habSociais = ref(habilidades.slice(9, 18))
    const habMentais = ref(habilidades.slice(18, 27))

    const userData = computed(() => userStore.userData)

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
      atributos,
      habilidades,
      ageOptions,
      disciplineOptions,
      disciplinePowers,
      showValue,
      attrFisicos,
      attrSociais,
      attrMentais,
      habFisicas,
      habSociais,
      habMentais,
      userData,
      importarFicha
    }
  }
})
</script>

<style lang="sass" scoped>
.label-tipo
  font-size: 1.1rem
  margin-bottom: 2px
</style>