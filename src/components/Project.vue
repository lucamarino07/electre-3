<template>
  <div class="container">
    <div class="alert alert-danger" role="alert" v-if="error">
      <h3>
        {{ error }}
      </h3>
    </div>

    <h1 v-for="(project,index) in projects" :key="index" :project="project">{{project.nome}}</h1>

    <form @submit.prevent="submitProject">
      <div class="col-auto">
        <label for="nameProject">Nome Progetto</label>
        <input id="nameProject" type="text" class="form-control" v-model="nome">
      </div>
      <div class="col-auto">
        <label for="criterioProject">Criterio</label>
        <input id="criterioProject" type="text" class="form-control" v-model="criterio">
      </div>
      <button type="submit" class="btn btn-sm btn-danger mt-2">Invia</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      nome: null,
      criterio: null,
      error: null
    };
  },
  methods: {
    submitProject() {
      if (this.nome && this.criterio) {
        this.$emit("add-project", {
          nome: this.nome,
          criterio: this.criterio
        });

        this.nome = null;
        this.criterio = null;

        if (this.error) {
          this.error = null;
        }
      } else {
        this.error = "I campi devono essere entrambi compilati!";
      }
    }
  }
};
</script>

<style>
</style>
