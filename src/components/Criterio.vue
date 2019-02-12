<template>
  <div>
    <form @submit.prevent="submitCriterio" class>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-6 col-12 mt-4">
            <label for="nameCriterio">
              <strong>Criterio</strong>
            </label>
            <input id="nameCriterio" type="text" class="form-control" v-model="nameCriterio">
          </div>
          <div class="col-lg-2 col-sm-6 col-6 mt-4">
            <label for="valoreCriterio" class="text-success">
              <strong>Valore</strong>
            </label>
            <input
              id="valoreCriterio"
              type="number"
              step="0.01"
              class="form-control"
              v-model="valoreCriterio"
            >
          </div>
          <div class="col-lg-2 col-sm-6 col-6 mt-4">
            <label for="pesoCriterio" class="text-primary">
              <strong>Peso</strong>
            </label>
            <input
              id="pesoCriterio"
              type="number"
              step="0.01"
              class="form-control"
              v-model="pesoCriterio"
            >
          </div>

          <div class="col-lg-2 col-sm-6 col-md-6 mt-4">
            <label for="tipoCriterioProject" class="text-danger">
              <strong>Tipologia</strong>
            </label>
            <select id="tipoCriterioProject" class="form-control" v-model="tipoCriterio">
              <option>min</option>
              <option>max</option>
            </select>
            <!-- <input id="tipoCriterioProject" type="text" class="form-control" v-model="tipoCriterio"> -->
          </div>
          <div class="col-lg-2 col-12 mt-4">
            <label for="tipoCriterioProject">
              <strong>Inserisci</strong>
            </label>
            <br>
            <button type="submit" class="btn btn-sm btn-success">+</button>

            <!-- <input id="tipoCriterioProject" type="text" class="form-control" v-model="tipoCriterio"> -->
          </div>
        </div>
      </div>
    </form>
    <br>
    <strong>
      <p class="mt-2">{{error}}</p>
    </strong>
  </div>
</template>

<script>
export default {
  name: "Criterio",
  data() {
    return {
      nameCriterio: null,
      valoreCriterio: null,
      pesoCriterio: null,
      tipoCriterio: null,
      error: null
    };
  },
  methods: {
    submitCriterio() {
      if (this.nameCriterio && this.valoreCriterio && this.tipoCriterio) {
        this.$emit("add-criterio", {
          nameCriterio: this.nameCriterio,
          valoreCriterio: this.valoreCriterio,
          pesoCriterio: this.pesoCriterio,
          tipoCriterio: this.tipoCriterio
        });

        this.nameCriterio = null;
        this.valoreCriterio = null;
        this.pesoCriterio = null;
        this.tipoCriterio = null;

        if (this.error) {
          this.error = null;
        }
      } else {
        this.error = "Compilare tutti i campi per l'inserimento del criterio!";
      }
    }
  }
};
</script>

<style>
</style>


