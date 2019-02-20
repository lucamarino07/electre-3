<template>
  <div>
    <div class="alert alert-danger" role="alert" v-if="error">
      <span>{{ error }}</span>
    </div>

    <form @submit.prevent="submitProject" class="mt-2 mb-2">
      <div class="col-12">
        <label for="nameProject">
          <strong>Nome Alternativa</strong>
        </label>
        <input id="nameProject" type="text" class="form-control" v-model="nome">
      </div>

      <criterio @add-criterio="addNewCriterio" :criteriStart = "criteriStart" :disabledCriterio = "disabledCriterio"></criterio>
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item"
          v-for="(criterio, index) in criteri"
          :key="index"
          :criterio="criterio"
        >
          {{criterio.nameCriterio}}
          &nbsp;
          <span
            class="badge badge-pill badge-success"
          >{{criterio.valoreCriterio}}</span>&nbsp;
          <span class="badge badge-pill badge-primary">{{criterio.pesoCriterio}}</span>&nbsp;
          <span class="badge badge-pill badge-danger">{{criterio.tipoCriterio}}</span>&nbsp;

          <button type="button" class="close no-outline" @click="removeCriterio(criterio)">
            <span>&times;</span>
          </button>
        </li>
      </ul>
      <button type="submit" class="btn btn-sm btn-danger mt-4">Inserisci Alternativa</button>
    </form>
  </div>
</template>

<script>
import Criterio from '@/components/Criterio'

export default {
  name: 'Project',
  components: {
    Criterio
  },
  props: {
    projects: {
      type: Array,
      required: true
    },
    criteriStart: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      nome: null,
      error: null,
      criteri: [],
      disabledCriterio: true
    }
  },
    watch: {
    nome(newQuestion, oldQuestion) {
      if (newQuestion.length > 0) {
        this.disabledCriterio = false
      } else {
        this.disabledCriterio = true
      }
    }
    },
  methods: {
    submitProject () {
      if (this.nome && this.criteri.length > 0) {
        this.$emit('add-project', {
          nome: this.nome,
          criteri: this.criteri
        })

        this.nome = null
        this.criteri = []

        this.disabledCriterio = true

        if (this.error) {
          this.error = null
        }
      } else {
        this.error = 'Inserire il nome del progetto e almeno un criterio!'
      }
    },
    addNewCriterio (new_criterio) {
      console.log(new_criterio)
      return this.criteri.push(new_criterio)
    },
    removeCriterio (criterio) {
      return this.criteri.splice(this.criteri.indexOf(criterio), 1)
    }
  }
}
</script>

<style>
</style>
