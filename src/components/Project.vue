<template>
  <div class="container">
    <div class="alert alert-danger" role="alert" v-if="error">
      <h3>{{ error }}</h3>
    </div>

    <form @submit.prevent="submitProject">
      <div class="col-12">
        <label for="nameProject">
          <strong>Nome Progetto</strong>
        </label>
        <input id="nameProject" type="text" class="form-control" v-model="nome">
      </div>

      <criterio @add-criterio="addNewCriterio"></criterio>
      <br>
      <button type="submit" class="btn btn-sm btn-danger mt-4">Inserisci Progetto</button>
    </form>
  </div>
</template>

<script>
import Criterio from "@/components/Criterio";

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
      error: null,
      criteri: []
    };
  },
  methods: {
    submitProject() {
      if (this.nome && this.criteri.length > 0) {
        this.$emit("add-project", {
          nome: this.nome,
          criteri: this.criteri
        });

        this.nome = null;
        this.criteri = [];

        if (this.error) {
          this.error = null;
        }
      } else {
        this.error = "Inserire il nome del progetto e almeno un criterio!";
      }
    },
    addNewCriterio(new_criterio) {
      console.log(new_criterio);
      return this.criteri.push(new_criterio);
    }
  }
};
</script>

<style>
</style>
