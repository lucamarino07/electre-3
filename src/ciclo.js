const projects = [
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



function getCriteriValue(projects) {
    var valori = []
    for (var i in projects) {
        for (var j in projects[i]) {
            if (j == "criteri") {
                for (var k in projects[i][j]) {
                    // console.log(projects[i][j][k]["valoreCriterio"]);
                    valori.push(projects[i][j][k]["valoreCriterio"])
                }
            }
        }
    }
    return valori
}




function creaMatriceCriteri(projects) {
    var valori = getCriteriValue(projects);
    var matrix = [];
    var index = 0;
    for(var i=0; i<projects.length; i++) {
        matrix[i] = [];
        for(var j=0; j<projects[0]['criteri'].length; j++) {        
            matrix[i][j] =  parseInt(valori[index]);
            index = index + 1;
        }
    }
    return matrix
}



export { creaMatriceCriteri }
