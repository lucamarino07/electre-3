<template>
  <div id="app">
    <h1 class="title">Decision Making: TOPSIS</h1>
    <br>
    <project :projects="projects" @add-project="addNewProject"></project>
    <button type="submit" class="btn btn-sm btn-outline-primary mt-4">Calcola Classifica</button>
    <hr> 
    <div class="container">
      <project-card :projects="projects" @remove-project="removeProject"></project-card>
    </div>
  </div>
</template>

<script>
// import * as math from "mathjs";
// const matrix = math.matrix([
//   [6, 5, 6],
//   [7, 5, 4],
//   [6, 5, 4],
//   [4, 6, 4],
//   [7, 8, 7]
// ]);
// console.log(matrix);

// console.log(math.square(matrix));
// console.log(matrix.subset(math.index([0, 4], 0)));
// console.log(math.sum(matrix.subset(math.index([0, 4], 0))));
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
              valoreCriterio: 6,
              tipoCriterio: "min"
            },
            {
              nameCriterio: "Criterio 2",
              valoreCriterio: 5,
              tipoCriterio: "min"
            },
            {
              nameCriterio: "Criterio 3",
              valoreCriterio: 6,
              tipoCriterio: "max"
            }
          ]
        },
        {
          nome: "Progetto 2",
          criteri: [
            {
              nameCriterio: "Criterio 1",
              valoreCriterio: 7,
              tipoCriterio: "min"
            },
            {
              nameCriterio: "Criterio 2",
              valoreCriterio: 5,
              tipoCriterio: "min"
            },
            {
              nameCriterio: "Criterio 3",
              valoreCriterio: 4,
              tipoCriterio: "max"
            }
          ]
        },
        {
          nome: "Progetto 3",
          criteri: [
            {
              nameCriterio: "Criterio 1",
              valoreCriterio: 6,
              tipoCriterio: "min"
            },
            {
              nameCriterio: "Criterio 2",
              valoreCriterio: 5,
              tipoCriterio: "min"
            },
            {
              nameCriterio: "Criterio 3",
              valoreCriterio: 4,
              tipoCriterio: "max"
            }
          ]
        },
        {
          nome: "Progetto 4",
          criteri: [
            {
              nameCriterio: "Criterio 1",
              valoreCriterio: 4,
              tipoCriterio: "min"
            },
            {
              nameCriterio: "Criterio 2",
              valoreCriterio: 6,
              tipoCriterio: "min"
            },
            {
              nameCriterio: "Criterio 3",
              valoreCriterio: 4,
              tipoCriterio: "max"
            }
          ]
        },
        {
          nome: "Progetto 5",
          criteri: [
            {
              nameCriterio: "Criterio 1",
              valoreCriterio: 7,
              tipoCriterio: "min"
            },
            {
              nameCriterio: "Criterio 2",
              valoreCriterio: 8,
              tipoCriterio: "min"
            },
            {
              nameCriterio: "Criterio 3",
              valoreCriterio: 7,
              tipoCriterio: "max"
            }
          ]
        }
      ]
    };
  },
  methods: {
    addNewProject(new_project) {
      // console.log(new_project);
      return this.projects.push(new_project);
    },
    removeProject(project) {
      // console.log(project);
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
