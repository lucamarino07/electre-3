<template>
  <div class="container">
    <div class="alert alert-danger" role="alert" v-if="error">
      <h3>{{ error }}</h3>
    </div>

    <h1
      v-for="(project,index) in projects"
      :key="index"
      :project="project"
    >{{project.nome}}, {{project.nameCriterio}}, {{project.tipoCriterio}}</h1>

    <form @submit.prevent="submitProject">
      <div class="col-12">
        <label for="nameProject">Nome Progetto</label>
        <input id="nameProject" type="text" class="form-control" v-model="nome">
      </div>
      <div class="container">
        <div class="row">
          <div class="col-10 mt-4">
            <label for="nameCriterio">Criterio</label>
            <input id="nameCriterio" type="text" class="form-control" v-model="nameCriterio">
          </div>

          <div class="col-2 mt-4">
            <label for="tipoCriterioProject">Tipologia Criterio</label>
            <select id="tipoCriterioProject" class="form-control" v-model="tipoCriterio">
              <option>min</option>
              <option>max</option>
            </select>
            <!-- <input id="tipoCriterioProject" type="text" class="form-control" v-model="tipoCriterio"> -->
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-sm btn-danger mt-4">Invia</button>
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
      nameCriterio: null,
      tipoCriterio: null,
      error: null
    };
  },
  methods: {
    submitProject() {
      if (this.nome && this.tipoCriterio && this.nameCriterio) {
        this.$emit("add-project", {
          nome: this.nome,
          nameCriterio: this.nameCriterio,
          tipoCriterio: this.tipoCriterio
        });

        this.nome = null;
        this.nameCriterio = null;
        this.tipoCriterio = null;

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
