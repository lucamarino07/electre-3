<template>
  <div id="app">
    <project :projects="projects" @add-project="addNewProject"></project>
    <hr>
    <div class="container">
      <project-card :projects="projects"></project-card>
    </div>
  </div>
</template>

<script>
import Project from "@/components/Project";
import ProjectCard from "@/components/ProjectCard";

export default {
  name: "app",
  data() {
    return {
      projects: [
        {
          nome: "Progetto 1",
          criteri: [
            {
              nameCriterio: "Criterio 1",
              valoreCriterio: 100,
              tipoCriterio: "min"
            },
            {
              nameCriterio: "Criterio 2",
              valoreCriterio: 100,
              tipoCriterio: "max"
            }
          ]
        },
        {
          nome: "Progetto 2",
          criteri: [
            {
              nameCriterio: "Criterio 1",
              valoreCriterio: 100,
              tipoCriterio: "min"
            },
            {
              nameCriterio: "Criterio 2",
              valoreCriterio: 100,
              tipoCriterio: "max"
            }
          ]
        },
        {
          nome: "Progetto 3",
          criteri: [
            {
              nameCriterio: "Criterio 1",
              valoreCriterio: 100,
              tipoCriterio: "min"
            },
            {
              nameCriterio: "Criterio 2",
              valoreCriterio: 100,
              tipoCriterio: "max"
            }
          ]
        }
      ]
    };
  },
  methods: {
    addNewProject(new_project) {
      return this.projects.push(new_project);
    },
    removeProject(project) {
      return this.projects.splice(this.projects.indexOf(project), 1);
    }
  },
  components: {
    Project,
    ProjectCard
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
