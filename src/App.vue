<template>
  <div id="app">
    <h1 class="title">Decision Making: TOPSIS</h1>
    <br>
    <project :projects="projects" @add-project="addNewProject"></project>
    <button
      type="submit"
      class="btn btn-sm btn-outline-primary mt-4"
      @click="getCriteri"
    ><span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Calcola Classifica</button>
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
import { creaMatriceCriteri, creaMatricePesi } from "./ciclo.js";
import * as math from "mathjs";

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
              pesoCriterio: 0.3,
              tipoCriterio: "min"
            },
            {
              nameCriterio: "Criterio 2",
              valoreCriterio: 5,
              pesoCriterio: 0.3,
              tipoCriterio: "min"
            },
            {
              nameCriterio: "Criterio 3",
              valoreCriterio: 6,
              pesoCriterio: 0.4,
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
              pesoCriterio: 0.3,
              tipoCriterio: "min"
            },
            {
              nameCriterio: "Criterio 2",
              valoreCriterio: 5,
              pesoCriterio: 0.3,
              tipoCriterio: "min"
            },
            {
              nameCriterio: "Criterio 3",
              valoreCriterio: 4,
              pesoCriterio: 0.4,
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
              pesoCriterio: 0.3,
              tipoCriterio: "min"
            },
            {
              nameCriterio: "Criterio 2",
              valoreCriterio: 5,
              pesoCriterio: 0.3,
              tipoCriterio: "min"
            },
            {
              nameCriterio: "Criterio 3",
              valoreCriterio: 4,
              pesoCriterio: 0.4,
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
              pesoCriterio: 0.3,
              tipoCriterio: "min"
            },
            {
              nameCriterio: "Criterio 2",
              valoreCriterio: 6,
              pesoCriterio: 0.3,
              tipoCriterio: "min"
            },
            {
              nameCriterio: "Criterio 3",
              valoreCriterio: 4,
              pesoCriterio: 0.4,
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
              pesoCriterio: 0.3,
              tipoCriterio: "min"
            },
            {
              nameCriterio: "Criterio 2",
              valoreCriterio: 8,
              pesoCriterio: 0.3,
              tipoCriterio: "min"
            },
            {
              nameCriterio: "Criterio 3",
              valoreCriterio: 7,
              pesoCriterio: 0.4,
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
    },
    getCriteri() {
      var a = creaMatriceCriteri(this.projects); // prendo la matrice dei criteri
      var pesi = creaMatricePesi(this.projects) // prendo la matrice dei pesi
      var pesi_transpose = math.transpose(pesi)
      var a_transpose = math.transpose(a); // creo la trasposta
      let a_square = math.square(a); // creo la matrice dei criteri quadrata
      let a_square_transpose = math.transpose(a_square); // creo la matrice trasposta dei criteri quadrata

      var normalized = [];
      for (var i = 0; i < a_square_transpose.length; i++) {
        normalized[i] = [];
        for (var j = 0; j < a_square_transpose[0].length; j++) {
          let denominatore = math.sum(a_square_transpose[i]); // calcolo il denomitatore
          // console.log(a_transpose[i][j] / (denominatore)**0.5)
          normalized[i][j] = (a_transpose[i][j] / denominatore ** 0.5) * pesi_transpose[i][j] ; // calcolo la matrice normalizzata con il rapporto tra valore criterio e radice della somma al quadrato
        }
      }
      console.log(math.transpose(normalized));
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
