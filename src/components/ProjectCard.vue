<template>
  <div class="container">
    <div
      class="mt-2 ml-2"
      v-for="(project, index) in projects"
      :key="index"
      :project="project"
      style="float: left"
    >
      <div class="card" style="width: 18rem;">
        <div class="card-header">{{project.nome}}</div>
        <ul class="list-group list-group-flush">
          <li
            class="list-group-item"
            v-for="(criterio, index) in project.criteri"
            :key="index"
            :criterio="criterio"
          >
            {{criterio.nameCriterio}} 
             &nbsp;
            <span
              class="badge badge-pill badge-success"
            >{{criterio.valoreCriterio}}</span>&nbsp;
            <span
              class="badge badge-pill badge-danger"
            >{{criterio.tipoCriterio}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
</style>
