import math from 'mathjs'

function getCriteriValue(projects) {
  var valori = []
  for (var i in projects) {
    for (var j in projects[i]) {
      if (j == 'criteri') {
        for (var k in projects[i][j]) {
          // console.log(projects[i][j][k]["valoreCriterio"]);
          valori.push(projects[i][j][k]['valoreCriterio'])
        }
      }
    }
  }
  return valori
}

function creaMatriceCriteri(projects) {
  var valori = getCriteriValue(projects)
  var matrix = []
  var index = 0
  for (var i = 0; i < projects.length; i++) {
    matrix[i] = []
    for (var j = 0; j < projects[0]['criteri'].length; j++) {
      matrix[i][j] = parseFloat(valori[index])
      index = index + 1
    }
  }
  return matrix
}

function getCriteriPesi(projects) {
  var pesi = []
  for (var i in projects) {
    for (var j in projects[i]) {
      if (j == 'criteri') {
        for (var k in projects[i][j]) {
          // console.log(projects[i][j][k]["valoreCriterio"]);
          pesi.push(projects[i][j][k]['pesoCriterio'])
        }
      }
    }
  }
  return pesi
}

function creaMatricePesi(projects) {
  var pesi = getCriteriPesi(projects)
  var matrix = []
  var index = 0
  for (var i = 0; i < projects.length; i++) {
    matrix[i] = []
    for (var j = 0; j < projects[0]['criteri'].length; j++) {
      matrix[i][j] = parseFloat(pesi[index])
      index = index + 1
    }
  }
  return matrix
}
// console.log(creaMatricePesi(projects))

// matrix = creaMatriceCriteri(projects);
// console.log((matrix));

function getCriteriTipo(projects) {
  var tipi = []
  for (var i in projects) {
    for (var j in projects[i]) {
      if (j == 'criteri') {
        for (var k in projects[i][j]) {
          // console.log(projects[i][j][k]["valoreCriterio"]);
          tipi.push(projects[i][j][k]['tipoCriterio'])
        }
      }
    }
  }
  return tipi
}

function creaMatriceTipo(projects) {
  var tipi = getCriteriTipo(projects)
  var matrix = []
  var index = 0
  for (var i = 0; i < projects.length; i++) {
    matrix[i] = []
    for (var j = 0; j < projects[0]['criteri'].length; j++) {
      matrix[i][j] = (tipi[index])
      index = index + 1
    }
  }
  return matrix
}



function creaChartData(projects, matrice) {
  var chartData = { columns: ['Criterio'], rows: [] }
  for (var i in projects) {
    chartData.columns.push(projects[i]['nome'])
  }
  var matrice_transpose = math.transpose(matrice);

  for (var i = 0; i < matrice_transpose.length; i++) {
    var row = { 'Criterio': projects[0]['criteri'][i]['nameCriterio'] }
    for (var j in matrice_transpose[i]) {
      var k = parseInt(j) + 1;
      row[chartData.columns[k]] = matrice_transpose[i][j]
    }
    chartData.rows.push(row);
  }
  return chartData

}

function creaChartSettings(projects) {
  var chartSettings = {};
  var min = [];
  if (projects.length > 0) {
    min.push(math.min(creaMatriceCriteri(projects)));
  } else {
    min.push(0);
  }
  chartSettings.min = min;
  return chartSettings
}

// console.log(creaMatriceTipo(projects))


function creaMatriceGrafico(projects) {
  var data = [];
  for (var i in projects) {
    var project = { name: null, values: [] };
    project['name'] = projects[i]['nome']
    for (var j in projects[i]) {
      if (j == 'criteri') {
        for (var k in projects[i][j]) {
          project['values'].push(projects[i][j][k]["valoreCriterio"]);
        }
      }
    }
    data.push(project);
  }
  return data;
}

export { creaMatriceCriteri, creaMatricePesi, creaMatriceTipo, creaMatriceGrafico, creaChartData, creaChartSettings }
