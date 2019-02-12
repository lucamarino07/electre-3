<template>
  <div class="container">
    <div class="alert alert-danger" role="alert" v-if="error">
      <h3>{{ error }}</h3>
    </div>

    <form @submit.prevent="submitProject">
      <div class="col-12">
        <label for="nameProject">Nome Progetto</label>
        <input id="nameProject" type="text" class="form-control" v-model="nome">
      </div>

      <criterio></criterio>

      <button type="submit" class="btn btn-sm btn-danger mt-4">Invia</button>
    </form>
  </div>
</template>

<script>
import Criterio from '@/components/Criterio'

export default {
  name: "Project",
  components: {
    Criterio
  },
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      nome: null,
      error: null
    };
  },
  methods: {
    submitProject() {
      if (this.nome) {
        this.$emit("add-project", {
          nome: this.nome
        });

        this.nome = null;


        if (this.error) {
          this.error = null;
        }
      } else {
        this.error = "Inserire il nome del progetto!";
      }
    }
  }
};
</script>

<style>
</style>
