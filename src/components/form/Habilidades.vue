<template>
  <div class="row">
    <div class="col-4 q-gutter-y-sm">
      <StatsCheckbox
        v-model="form.armas_brancas"
        label="Armas Brancas"
        tooltip="Manipualação e conhecimento de facas, porretes, etc"
      >
        <q-input  
          v-if="showSpecialties"
          v-model="specialties.armas_brancas"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>

      <StatsCheckbox
        v-model="form.armas_de_fogo"
        label="Armas de Fogo"
        tooltip="Manipualação e conhecimento de armas de fogo"
      >
        <q-input
          v-if="showSpecialties"
          v-model="specialties.armas_de_fogo"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>

      <StatsCheckbox
        v-model="form.atletismo"
        label="Atletismo"
        tooltip="Feitos físicos como pular e correr"
      >
        <q-input
          v-if="showSpecialties"
          v-model="specialties.atletismo"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>

      <StatsCheckbox
        v-model="form.briga"
        label="Briga"
        tooltip="Habilidade de porradaria e força bruta"
      >
        <q-input
          v-if="showSpecialties"
          v-model="specialties.briga"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>

      <StatsCheckbox
        v-model="form.conducao"
        label="Condução"
        tooltip="Conhecimentos e habilidades automobilistica"
      >
        <q-input
          v-if="showSpecialties"
          v-model="specialties.conducao"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>

      <StatsCheckbox
        v-model="form.furtividade"
        label="Furtividade"
        tooltip="A capacidade de fazer coisas sem ser notado"
      >
        <q-input
          v-if="showSpecialties"
          v-model="specialties.furtividade"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>

      <StatsCheckbox
        v-model="form.ladroagem"
        label="Ladroagem"
        tooltip="Habilidade com fechaduras e furtos"
      >
        <q-input
          v-if="showSpecialties"
          v-model="specialties.ladroagem"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>

      <StatsCheckbox
        v-model="form.oficios"
        label="Ofícios"
        tooltip="Capacidade de criar ou reparar coisas"
      >
        <q-input
          v-if="showSpecialties"
          v-model="specialties.oficios"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>

      <StatsCheckbox
        v-model="form.sobrevivencia"
        label="Sobrevivência"
        tooltip="Capacidade de sobreviver em locais especificos como na selva ou lixo"
      >
        <q-input
          v-if="showSpecialties"
          v-model="specialties.sobrevivencia"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>
    </div>

    <div class="col-4 q-gutter-y-sm">
      <StatsCheckbox
        v-model="form.empatia_com_animais"
        label="Empatia com Animais"
        tooltip="Quão bem se da com animais ou animal especifico"
      >
        <q-input
          v-if="showSpecialties"
          v-model="specialties.empatia_com_animais"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>

      <StatsCheckbox
        v-model="form.etiqueta"
        label="Etiqueta"
        tooltip="Quão bem se comporta na alta sociedade e comportamento de elegância"
      >
        <q-input
          v-if="showSpecialties"
          v-model="specialties.etiqueta"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>

      <StatsCheckbox
        v-model="form.intimidacao"
        label="Intimidação"
        tooltip="Habilidade de adquirir o que quer com ameaças suitis ou diretas"
      >
        <q-input
          v-if="showSpecialties"
          v-model="specialties.intimidacao"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>

      <StatsCheckbox
        v-model="form.lideranca"
        label="Liderança"
        tooltip="A capacidade de comandar grupos e inspirar aliados"
      >
        <q-input
          v-if="showSpecialties"
          v-model="specialties.lideranca"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>

      <StatsCheckbox
        v-model="form.manha"
        label="Manha"
        tooltip="Compreender os meandros do crime e ruas"
      >
        <q-input
          v-if="showSpecialties"
          v-model="specialties.manha"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>

      <StatsCheckbox
        v-model="form.performance"
        label="Performance"
        tooltip="A habilidade de atuar, dançar e outras artes do tipo"
      >
        <q-input
          v-if="showSpecialties"
          v-model="specialties.performance"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>

      <StatsCheckbox
        v-model="form.persuasao"
        label="Persuasão"
        tooltip="A habilidade convencer os outros, lábia e oratória"
      >
        <q-input
          v-if="showSpecialties"
          v-model="specialties.persuasao"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>

      <StatsCheckbox
        v-model="form.sagacidade"
        label="Sagacidade"
        tooltip="A capacidade de ler as pessoas e suas intenções"
      >
        <q-input
          v-if="showSpecialties"
          v-model="specialties.sagacidade"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>

      <StatsCheckbox
        v-model="form.subterfugio"
        label="Subterfúgio"
        tooltip="Enganar os outros para conseguir o que quer"
      >
        <q-input
          v-if="showSpecialties"
          v-model="specialties.subterfugio"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>
    </div>

    <div class="col-4 q-gutter-y-sm">
      <StatsCheckbox
        v-model="form.ciencia"
        label="Ciência"
        tooltip="Conhecimento e teoria do mundo físico"
      >
        <q-input
          v-if="showSpecialties"
          v-model="specialties.ciencia"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>

      <StatsCheckbox
        v-model="form.erudicao"
        label="Erudição"
        tooltip="Conhecimentos em artes liberais (sociologia, filosofia, etc), aprender por livros"
      >
        <q-input
          v-if="showSpecialties"
          v-model="specialties.erudicao"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>

      <StatsCheckbox
        v-model="form.financas"
        label="Finanças"
        tooltip="A capacidade de gastar e conseguir dinheiro com eficiencia"
      >
        <q-input
          v-if="showSpecialties"
          v-model="specialties.financas"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>

      <StatsCheckbox
        v-model="form.investigacao"
        label="Investigação"
        tooltip="Seguir e adquirir pistas, resolver mistérios"
      >
        <q-input
          v-if="showSpecialties"
          v-model="specialties.investigacao"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>

      <StatsCheckbox
        v-model="form.medicina"
        label="Medicina"
        tooltip="Conhecimentos e prática medicinal como identificar e tratar ferimentos e doenças"
      >
        <q-input
          v-if="showSpecialties"
          v-model="specialties.medicina"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>

      <StatsCheckbox
        v-model="form.ocultismo"
        label="Ocultismo"
        tooltip="Conhecimento secreto, do real e irreal como magias e cultos"
      >
        <q-input
          v-if="showSpecialties"
          v-model="specialties.ocultismo"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>

      <StatsCheckbox
        v-model="form.percepcao"
        label="Percepção"
        tooltip="A atençào à detalhes no mundo e notar coisas parriam por despercebido"
      >
        <q-input
          v-if="showSpecialties"
          v-model="specialties.percepcao"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>

      <StatsCheckbox
        v-model="form.politica"
        label="Política"
        tooltip="A habiliade de conduzir política, fazer compromissos e promessas sociais"
      >
        <q-input
          v-if="showSpecialties"
          v-model="specialties.politica"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>
        
      <StatsCheckbox
        v-model="form.tecnologia"
        label="Tecnologia"
        tooltip="A capacidade de utilizar computadores, smartphones e outras tecnologias modernas"
      >
        <q-input
          v-if="showSpecialties"
          v-model="specialties.tecnologia"
          dense
          filled
          label=""
          square
        />
      </StatsCheckbox>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch, toRaw } from 'vue'
import StatsCheckbox from './StatsCheckbox.vue'

export default defineComponent({
  components: {
    StatsCheckbox
  },

  props: {
    modelValue: {
      type: Object,
      required: true
    },

    especialidades: {
      type: Object,
      required: true
    },

    showSpecialties: Boolean
  },
  
  emits: ['update:modelValue', 'update:especialidades'],
  setup(props, { emit }) {
    const form = ref({ ...props.modelValue })
    const specialties = ref({ ...props.especialidades })

    watch(() => props.modelValue, (newVal) => {
      if (JSON.stringify(newVal) !== JSON.stringify(toRaw(form.value))) {
        form.value = { ...newVal }
      }
    }, { deep: true })

    watch(() => props.especialidades, (newVal) => {
      if (JSON.stringify(newVal) !== JSON.stringify(toRaw(specialties.value))) {
        specialties.value = { ...newVal }
      }
    }, { deep: true })

    watch(form, (newVal) => {
      if (JSON.stringify(newVal) !== JSON.stringify(toRaw(props.modelValue))) {
        emit('update:modelValue', newVal)
      }
    }, { deep: true })

    watch(specialties, (newVal) => {
      if (JSON.stringify(newVal) !== JSON.stringify(toRaw(props.especialidades))) {
        emit('update:especialidades', newVal)
      }
    }, { deep: true })

    return {
      form,
      specialties
    }
  }
})
</script>


