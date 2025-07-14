
const ramos = [
  // Semestre 1
  { codigo: "DER1010", nombre: "Constitucional I", creditos: 4, prerrequisitos: [], semestre: 1 },
  { codigo: "DER1011", nombre: "Romano I", creditos: 3, prerrequisitos: [], semestre: 1 },
  { codigo: "DER1012", nombre: "Historia del derecho I", creditos: 3, prerrequisitos: [], semestre: 1 },
  { codigo: "DER1013", nombre: "Filosofía I", creditos: 3, prerrequisitos: [], semestre: 1 },
  { codigo: "DER1015", nombre: "Derecho positivo", creditos: 3, prerrequisitos: [], semestre: 1 },
  { codigo: "DER1016", nombre: "Taller de memoria", creditos: 1, prerrequisitos: [], semestre: 1 },
  { codigo: "ING9001", nombre: "Inglés I", creditos: 2, prerrequisitos: [], semestre: 1 },

  // Semestre 2
  { codigo: "DER1020", nombre: "Constitucional II", creditos: 4, prerrequisitos: ["DER1010"], semestre: 2 },
  { codigo: "DER1021", nombre: "Romano II", creditos: 4, prerrequisitos: ["DER1011"], semestre: 2 },
  { codigo: "DER1022", nombre: "Historia del derecho II", creditos: 3, prerrequisitos: ["DER1012"], semestre: 2 },
  { codigo: "DER1023", nombre: "Filosofía II", creditos: 3, prerrequisitos: ["DER1013"], semestre: 2 },
  { codigo: "DER1024", nombre: "Judicatura", creditos: 3, prerrequisitos: ["DER1015"], semestre: 2 },
  { codigo: "ING9002", nombre: "Inglés II", creditos: 2, prerrequisitos: ["ING9001"], semestre: 2 },

  // Semestre 3
  { codigo: "DER1030", nombre: "Constitucional III", creditos: 3, prerrequisitos: ["DER1015", "DER1020", "DER1010", "DER1011", "DER1012", "DER1013"], semestre: 3 },
  { codigo: "DER1031", nombre: "DIP", creditos: 4, prerrequisitos: ["DER1015", "DER1020", "DER1010", "DER1011", "DER1012", "DER1013"], semestre: 3 },
  { codigo: "DER1032", nombre: "Civil I", creditos: 4, prerrequisitos: ["DER1015", "DER1010", "DER1021", "DER1011", "DER1012", "DER1013"], semestre: 3 },
  { codigo: "DER1034", nombre: "Estrategias", creditos: 3, prerrequisitos: ["DER1015", "DER1010", "DER1011", "DER1012", "DER1013"], semestre: 3 },
  { codigo: "DER1035", nombre: "Procesal 1", creditos: 3, prerrequisitos: ["DER1024", "DER1010", "DER1011", "DER1012", "DER1013", "DER1015"], semestre: 3 },
  { codigo: "DER1036", nombre: "Taller de memoria II", creditos: 1, prerrequisitos: ["DER1016"], semestre: 3 },
  { codigo: "ING9003", nombre: "Inglés III", creditos: 2, prerrequisitos: ["ING9002"], semestre: 3 },

  // Semestre 4
  { codigo: "DER1040", nombre: "Constitucional IV", creditos: 3, prerrequisitos: ["DER1015", "DER1010", "DER1020", "DER1011", "DER1012", "DER1013"], semestre: 4 },
  { codigo: "DER1041", nombre: "Civil II", creditos: 4, prerrequisitos: ["DER1015", "DER1032", "DER1021", "DER1010", "DER1011", "DER1012", "DER1013"], semestre: 4 },
  { codigo: "DER1042", nombre: "Procesal II", creditos: 4, prerrequisitos: ["DER1013", "DER1015", "DER1010", "DER1011", "DER1012", "DER1013"], semestre: 4 },
  { codigo: "DER1043", nombre: "Penal I", creditos: 4, prerrequisitos: ["DER1015", "DER1023", "DER1010", "DER1011", "DER1012", "DER1013"], semestre: 4 },
  { codigo: "ING9004", nombre: "Inglés IV", creditos: 2, prerrequisitos: ["ING9003"], semestre: 4 },

  // Semestre 5
  { codigo: "DER1050", nombre: "Administrativo I", creditos: 3, prerrequisitos: ["DER1030", "DER1040"], semestre: 5 },
  { codigo: "DER1051", nombre: "Laboral I", creditos: 3, prerrequisitos: ["DER1015", "DER1032", "DER1010", "DER1012", "DER1013"], semestre: 5 },
  { codigo: "DER1052", nombre: "Económico I", creditos: 3, prerrequisitos: ["DER1040"], semestre: 5 },
  { codigo: "DER1053", nombre: "Civil III", creditos: 4, prerrequisitos: ["DER1032", "DER1041", "DER1021"], semestre: 5 },
  { codigo: "DER1055", nombre: "Penal II", creditos: 4, prerrequisitos: ["DER1043"], semestre: 5 },
  { codigo: "DER1056", nombre: "Taller de memoria III", creditos: 1, prerrequisitos: ["DER1036"], semestre: 5 },
  { codigo: "DER1057", nombre: "Juicio y prueba", creditos: 3, prerrequisitos: ["DER1042"], semestre: 5 },

  // Semestre 6
  { codigo: "DER1060", nombre: "Administrativo II", creditos: 3, prerrequisitos: ["DER1050", "DER1032"], semestre: 6 },
  { codigo: "DER1061", nombre: "Laboral II", creditos: 3, prerrequisitos: ["DER1051"], semestre: 6 },
  { codigo: "DER1062", nombre: "Económico II", creditos: 3, prerrequisitos: ["DER1052"], semestre: 6 },
  { codigo: "DER1063", nombre: "Civil IV", creditos: 4, prerrequisitos: ["DER1053", "DER1032", "DER1041"], semestre: 6 },
  { codigo: "DER1064", nombre: "Procesal III", creditos: 4, prerrequisitos: ["DER1057"], semestre: 6 },
  { codigo: "DER1065", nombre: "Penal III", creditos: 4, prerrequisitos: ["DER1055"], semestre: 6 },
  { codigo: "DER1066", nombre: "Clínica", creditos: 2, prerrequisitos: ["DER1035"], semestre: 6 },

  // Semestre 7
  { codigo: "DER1070", nombre: "Administrativo III", creditos: 3, prerrequisitos: ["DER1057", "DER1060", "DER1063"], semestre: 7 },
  { codigo: "DER1071", nombre: "Comercial", creditos: 3, prerrequisitos: ["DER1015", "DER1010", "DER1011", "DER1012", "DER1013"], semestre: 7 },
  { codigo: "DER1072", nombre: "Económico III", creditos: 3, prerrequisitos: ["DER1052", "DER1062"], semestre: 7 },
  { codigo: "DER1073", nombre: "Civil V", creditos: 4, prerrequisitos: ["DER1063", "DER1053", "DER1032", "DER1041", "DER1021"], semestre: 7 },
  { codigo: "DER1076", nombre: "Taller de memoria IV", creditos: 1, prerrequisitos: ["DER1056"], semestre: 7 },
  { codigo: "DER1077", nombre: "Ejecución", creditos: 3, prerrequisitos: ["DER1064"], semestre: 7 },

  // Semestre 8
  { codigo: "DER1075", nombre: "Procesal penal I", creditos: 4, prerrequisitos: ["DER1064", "DER1065"], semestre: 8 },
  { codigo: "DER1080", nombre: "Tributario I", creditos: 3, prerrequisitos: ["DER1071"], semestre: 8 },
  { codigo: "DER1081", nombre: "Sociedades de capital", creditos: 3, prerrequisitos: ["DER1071", "DER1073"], semestre: 8 },
  { codigo: "DER1082", nombre: "Teoría del ordenamiento", creditos: 3, prerrequisitos: ["DER1023"], semestre: 8 },
  { codigo: "DER1083", nombre: "Familia", creditos: 4, prerrequisitos: ["DER1073", "DER1063", "DER1053", "DER1032", "DER1041", "DER1021"], semestre: 8 },
  { codigo: "DER1084", nombre: "Litigación oral", creditos: 2, prerrequisitos: ["DER1057"], semestre: 8 },

  // Semestre 9
  { codigo: "DER1090", nombre: "Pasantía", creditos: 3, prerrequisitos: ["110 créditos"], semestre: 9 },
  { codigo: "DER1091", nombre: "Derecho concursal y de seguros", creditos: 3, prerrequisitos: ["DER1081"], semestre: 9 },
  { codigo: "DER1092", nombre: "Filosofía del Derecho", creditos: 3, prerrequisitos: ["110 créditos"], semestre: 9 },
  { codigo: "DER1093", nombre: "Sucesiones", creditos: 3, prerrequisitos: ["DER1083", "DER1073", "DER1063", "DER1053", "DER1032", "DER1041", "DER1021"], semestre: 9 },
  { codigo: "DER1094", nombre: "Ética profesional", creditos: 2, prerrequisitos: ["110 créditos"], semestre: 9 },
  { codigo: "DER1096", nombre: "Memoria", creditos: 1, prerrequisitos: ["DER1075", "DER1080", "DER1081", "DER1082", "DER1083", "DER1084", "DER1016", "DER1036", "DER1056", "DER1076"], semestre: 9 },

  // Semestre 10
  { codigo: "DER1100", nombre: "Licenciatura", creditos: 20, prerrequisitos: ["170 créditos"], semestre: 10 }
];

let aprobados = JSON.parse(localStorage.getItem("aprobados")) || [];

function calcularCreditos() {
  return aprobados.reduce((acc, codigo) => {
    const ramo = ramos.find(r => r.codigo === codigo);
    return ramo ? acc + ramo.creditos : acc;
  }, 0);
}

function estaDesbloqueado(ramo) {
  if (ramo.prerrequisitos.length === 0) return true;
  for (const req of ramo.prerrequisitos) {
    if (req.includes("créditos")) {
      // Prerrequisito basado en créditos
      const minCreditos = parseInt(req.match(/(\d+)/)[0]);
      if (calcularCreditos() < minCreditos) return false;
    } else if (!aprobados.includes(req)) {
      return false;
    }
  }
  return true;
}

function actualizarContador() {
  const cont = document.getElementById("contador");
  cont.textContent = "Créditos aprobados: " + calcularCreditos();
}

function toggleAprobado(codigo) {
  if (aprobados.includes(codigo)) {
    aprobados = aprobados.filter(c => c !== codigo);
  } else {
    aprobados.push(codigo);
  }
  localStorage.setItem("aprobados", JSON.stringify(aprobados));
  renderizarMalla();
  actualizarContador();
}

function renderizarMalla() {
  const contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = "";
  const semestres = [...new Set(ramos.map(r => r.semestre))].sort((a,b)=>a-b);
  for (const semestre of semestres) {
    const divSemestre = document.createElement("div");
    divSemestre.classList.add("semestre");
    const titulo = document.createElement("h2");
    titulo.textContent = "Semestre " + semestre;
    divSemestre.appendChild(titulo);

    const divRamos = document.createElement("div");
    divRamos.classList.add("malla");

    for (const ramo of ramos.filter(r => r.semestre === semestre)) {
      const divRamo = document.createElement("div");
      divRamo.classList.add("ramo");

      if (!estaDesbloqueado(ramo)) {
        divRamo.classList.add("bloqueado");
      } else if (aprobados.includes(ramo.codigo)) {
        divRamo.classList.add("aprobado");
      }

      divRamo.textContent = ramo.nombre + "\n(" + ramo.codigo + ")\n" + ramo.creditos + " créditos";
      divRamo.title = ramo.nombre + "\nCódigo: " + ramo.codigo + "\nCréditos: " + ramo.creditos;

      divRamo.onclick = () => {
        if (!estaDesbloqueado(ramo)) {
          alert("Debes aprobar los prerrequisitos para desbloquear este ramo.");
          return;
        }
        toggleAprobado(ramo.codigo);
      };

      divRamos.appendChild(divRamo);
    }

    divSemestre.appendChild(divRamos);
    contenedor.appendChild(divSemestre);
  }
  actualizarContador();
}

window.onload = () => {
  renderizarMalla();
};
