<template>
  <div id="app">
    <Slide>
      <a id="home" href="#" style="text-decoration: none">
        <span>Home</span>
      </a>
       <a id="home" href="/h" style="text-decoration: none">
        <span>Topsis</span>
      </a>
    </Slide>
    <div class="container">
      <h1 class="title">TOPSIS</h1>
      <p>Inserisci i tuoi criteri e le alternative da valutare! L'algoritmo seleziona per te la migliore alternativa!</p>
      <p>(Vi sono già 5 alternative di partenza, puoi usarle per testare l'algoritmo o cancellarle ed inserire le tue)</p>
    </div>

    <div class="container">
      <div class="card">
        <div class="card-header bg-success">
          <button type="button" class="btn no-outline" @click="changemostraInserimentoCriteri">
            <strong v-if="mostraInserimentoCriteri == true" class="text-white">Chiudi</strong>
            <strong v-else-if="criteriStart.length > 0" class="text-white">Elenco Criteri</strong>
            <strong v-else class="text-white">Inserisci Criteri</strong>
          </button>
        </div>
        <div class="card-body" v-if="mostraInserimentoCriteri">
          <criterio-insert @add-criterio-vector="addCriterioVector"></criterio-insert>
        </div>

        <ul class="list-group list-group-flush">
          <li
            class="list-group-item"
            v-for="(criterio, index) in criteriStart"
            :key="index"
            :criterio="criterio"
          >
            {{criterio.nameCriterio}}
            &nbsp;
            <span
              class="badge badge-pill badge-success"
            >{{criterio.valoreCriterio}}</span>&nbsp;
            <span class="badge badge-pill badge-primary">{{criterio.pesoCriterio}}</span>&nbsp;
            <span class="badge badge-pill badge-danger">{{criterio.tipoCriterio}}</span>
            &nbsp;
            <button
              type="button"
              class="close no-outline"
              @click="removeCriterioStart(criterio)"
            >
              <span>&times;</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <br>

    <div class="container">
      <div class="card">
        <div class="card-header bg-danger">
          <button type="button" class="btn no-outline" @click="changemostraInserimentoAlternative">
            <strong v-if="mostraInserimentoAlternative == true" class="text-white">Chiudi</strong>
            <strong v-else class="text-white">Inserisci Alternative</strong>
          </button>
        </div>
        <div class="card-body" v-if="mostraInserimentoAlternative">
          <project :projects="projects" :criteriStart="criteriStart" @add-project="addNewProject"></project>
        </div>
      </div>
    </div>

    <div class="container mt-4 mb-2">
      <div class="row">
        <div class="col-lg-4 col-4">
          <button type="submit" class="btn btn-sm btn-danger" @click="changeMostra">
            <span v-if="mostra == false">Alternative</span>
            <span v-else>Chiudi</span>
          </button>
        </div>
        <div class="col-lg-4 col-4">
          <button type="submit" class="btn btn-sm btn-info ml-2" @click="getCriteri">
            <span>Calcola</span>
          </button>
        </div>
        <div class="col-lg-4 col-4">
          <button
            type="submit"
            class="btn btn-sm btn-warning ml-2"
            @click="() => {changemostraCLassifica()}"
          >
            <span v-if="mostraCLassifica == false">Classifica</span>
            <span v-else>Chiudi</span>
          </button>
        </div>
      </div>
    </div>
    <hr>
    <div class="container" v-if="mostra && projects.length > 0">
      <project-card :projects="projects" @remove-project="removeProject"></project-card>
    </div>
    <hr v-if="mostra && projects.length > 0">

    <div class="container" v-if="mostraCLassifica">
      <ranking :ranking="ranking" @svuota-ranking="svuotaRanking"></ranking>
    </div>
    <hr v-if="mostraCLassifica && ranking.length > 0">

    <div class="container" v-if="mostraGrafico && projects.length > 0">
      <div class="row">
        <div class="col-12">
          <h3 class="mb-4 mt-2">Profilo delle Alternative</h3>
          <ve-line :data="chartData" :settings="chartSettings"></ve-line>
        </div>
      </div>
    </div>

    <hr v-if="mostraGrafico && projects.length > 0">

    <div class="container col-12">
      <p>Sviluppata da <a href="https://www.facebook.com/liuckmarino">Luca Marino</a></p>
      <p>
        <strong>Copyright © 2019 Luca Marino | 3885863788</strong>
      </p>
    </div>
  </div>
</template>

<script>
import Project from "@/components/Project";
import ProjectCard from "@/components/ProjectCard";
import Ranking from "@/components/Ranking";
import CriterioInsert from "@/components/CriterioInsert";
import VeLine from "v-charts/lib/line.common";

import {
  creaMatriceCriteri,
  creaMatricePesi,
  creaMatriceTipo,
  ciccio,
  creaMatriceGrafico,
  creaChartData,
  creaChartSettings
} from "./ciclo.js";
import * as math from "mathjs";
import { Slide } from 'vue-burger-menu';

export default {
  name: "app",
  computed: {
    chartData: function() {
      return creaChartData(this.projects, creaMatriceCriteri(this.projects));
    },
    chartSettings: function() {
      return creaChartSettings(this.projects);
    }
  },
  data() {
    return {
      criteriStart: [
        // { nameCriterio: "Criterio 1", pesoCriterio: 0.3, tipoCriterio: "min" },
        // { nameCriterio: "Criterio 2", pesoCriterio: 0.3, tipoCriterio: "min" },
        // { nameCriterio: "Criterio 3", pesoCriterio: 0.4, tipoCriterio: "max" }
      ],
      mostraGrafico: false,
      mostra: false,
      mostraCLassifica: false,
      mostraInserimentoCriteri: false,
      mostraInserimentoAlternative: false,
      ranking: [],
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
  mounted() {},
  methods: {
    changemostraInserimentoAlternative() {
      this.mostraInserimentoAlternative = !this.mostraInserimentoAlternative;
      this.mostraInserimentoCriteri = false;
      return;
    },
    changemostraInserimentoCriteri() {
      this.mostraInserimentoCriteri = !this.mostraInserimentoCriteri;
      this.mostraInserimentoAlternative = false;
      return;
    },
    changemostraCLassifica() {
      this.mostraCLassifica = !this.mostraCLassifica;
      this.mostraInserimentoAlternative = false;
      return;
    },
    changeMostra() {
      this.mostra = !this.mostra;
      this.mostraInserimentoAlternative = false;
      this.mostraGrafico = !this.mostraGrafico;
      return;
    },
    svuotaRanking() {
      this.ranking = [];
    },
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
      var pesi = creaMatricePesi(this.projects); // prendo la matrice dei pesi
      var tipi = creaMatriceTipo(this.projects);
      var tipi_transpose = math.transpose(tipi);
      var pesi_transpose = math.transpose(pesi);
      var a_transpose = math.transpose(a); // creo la trasposta
      let a_square = math.square(a); // creo la matrice dei criteri quadrata
      let a_square_transpose = math.transpose(a_square); // creo la matrice trasposta dei criteri quadrata

      var normalized = [];
      for (var i = 0; i < a_square_transpose.length; i++) {
        normalized[i] = [];
        for (var j = 0; j < a_square_transpose[0].length; j++) {
          let denominatore = math.sum(a_square_transpose[i]); // calcolo il denomitatore
          // console.log(a_transpose[i][j] / (denominatore)**0.5)
          normalized[i][j] =
            (a_transpose[i][j] / denominatore ** 0.5) * pesi_transpose[i][j]; // calcolo la matrice normalizzata
          // con il rapporto tra valore criterio e radice della somma al quadrato
        }
      }

      console.log(a);

      var ideal_best = [];
      var ideal_not_best = [];
      for (var i = 0; i < normalized.length; i++) {
        for (var j = 0; j < normalized[0].length; j++) {
          if (tipi_transpose[i][j] == "min") {
            let point_best = math.min(normalized[i]);
            let point_not_best = math.max(normalized[i]);
            ideal_best.push(point_best);
            ideal_not_best.push(point_not_best);
            break;
          } else {
            let point_best = math.max(normalized[i]);
            let point_not_best = math.min(normalized[i]);
            ideal_best.push(point_best);
            ideal_not_best.push(point_not_best);
            break;
          }
        }
      }

      var normalized_transpose = math.transpose(normalized);

      var s_plus_difference = [];
      var s_negative_difference = [];
      for (var i = 0; i < normalized_transpose.length; i++) {
        s_plus_difference[i] = [];
        s_negative_difference[i] = [];
        for (var j = 0; j < normalized_transpose[0].length; j++) {
          s_plus_difference[i][j] =
            (normalized_transpose[i][j] - ideal_best[j]) ** 2;
          s_negative_difference[i][j] =
            (normalized_transpose[i][j] - ideal_not_best[j]) ** 2;
        }
      }

      var s_plus = [];
      var s_negative = [];
      var c_star = [];
      for (var i = 0; i < s_plus_difference.length; i++) {
        s_plus[i] = math.sum(s_plus_difference[i]) ** 0.5;
        s_negative[i] = math.sum(s_negative_difference[i]) ** 0.5;
        c_star[i] = s_negative[i] / (s_negative[i] + s_plus[i]);
      }

      this.ranking = [];
      var rank = [];
      for (var i = 0; i < s_plus_difference.length; i++) {
        var obj = {
          progetto: this.projects[i]["nome"],
          valore: Math.round(c_star[i] * 100) / 100
        };
        this.ranking.push(obj);
      }
      this.mostra = false;
      this.mostraInserimentoAlternative = false;
      this.mostraGrafico = false;
      return (this.mostraCLassifica = true);
    },
    addCriterioVector(criterio) {
      return this.criteriStart.push(criterio);
    },
    removeCriterioStart(criterio) {
      return this.criteriStart.splice(this.criteriStart.indexOf(criterio), 1);
    }
  },
  components: {
    Project,
    ProjectCard,
    Ranking,
    CriterioInsert,
    VeLine,
    Slide
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

.btn:focus {
  box-shadow: none !important;
}

a {
  text-decoration: none;
  outline: none;
}
</style>
