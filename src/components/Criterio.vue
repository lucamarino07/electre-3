<template>
  <div>
    <form @submit.prevent="submitCriterio" class>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-sm-6 mt-4">
            <label for="nameCriterio">
              <strong>Criterio</strong>
            </label>
            <input id="nameCriterio" type="text" class="form-control" v-model="nameCriterio">
            {{nameCriterio}}
          </div>
          <div class="col-lg-2 col-sm-6 mt-4">
            <label for="valoreCriterio">
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

          <div class="col-lg-2 col-sm-6 mt-4">
            <label for="tipoCriterioProject">
              <strong>Tipologia Criterio</strong>
            </label>
            <select id="tipoCriterioProject" class="form-control" v-model="tipoCriterio">
              <option>min</option>
              <option>max</option>
            </select>
            <!-- <input id="tipoCriterioProject" type="text" class="form-control" v-model="tipoCriterio"> -->
          </div>
          <div class="col-lg-2 col-sm-6 mt-4">
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
          tipoCriterio: this.tipoCriterio
        });

        this.nameCriterio = null;
        this.valoreCriterio = null;
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


