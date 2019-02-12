<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-8 mt-4">
          <label for="nameCriterio">Criterio</label>
          <input id="nameCriterio" type="text" class="form-control" v-model="nameCriterio">
        </div>
        <div class="col-2 mt-4">
          <label for="valoreCriterio">Valore</label>
          <input
            id="valoreCriterio"
            type="number"
            step="any"
            class="form-control"
            v-model="valoreCriterio"
          >
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
  </div>
</template>

<script>
export default {
  name: "Criterio",
  data() {
      return {
          nameCriterio: null,
          valoreCriterio: null,
          tipoCriterio: null
      }
  }
};
</script>

<style>
</style>
