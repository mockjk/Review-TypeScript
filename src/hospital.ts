import { Paciente, Ala, Consultorio } from "./Interfaces-and-Types";
import * as queueMethods from "./queue-methods"

//Determinating imported methods in variables makes code easier to read
const create = queueMethods.createQueue;
const insert = queueMethods.insertQueue;
const remove = queueMethods.remove;

//Determinating an object than receive data of patitens
const pacientes: Paciente[] = [
    {
      nome: "Alan Turing",
      setor: "Clínico Geral",
    },
    {
      nome: "Ada Lovelace",
      setor: "Ortopedista",
    },
    {
      nome: "Grace Hopper",
      setor: "Cardiologista",
    },
    {
      nome: "Brasil",
      setor: "Clínico Geral",
    },
    {
      nome: "Margaret Hamilton",
      setor: "Clínico Geral",
    },
    {
      nome: "Tim Berners-Lee",
      setor: "Cardiologista",
    },
];

function screening(patient: Paciente){ //This function define attribute "prioridade" from interface "Paciente"
    const priorities = [ "Comum", "Emergência", "Preferencial", "Urgente" ];
    const priority = priorities[Math.floor(Math.random() * priorities.length)]; //"priority" selects one value of "priorities"
    patient.prioridade = (<Paciente["prioridade"]> priority);
    return patient;
};

const medicalWard: Ala[] = [
    {
      nome: "triagem",
      fila: pacientes,
    },
    {
      nome: "Cardiologista",
      fila: create(5),
    },
    {
      nome: "Clínico Geral",
      fila: create(5),
    },
    {
      nome: "Ortopedista",
      fila: create(5),
    },
  ];


function doScreening(patitens: Paciente[]){ //This function do the screening
  
  patitens.forEach(patient => { //Moving all the patients into to screening
    screening(patient);
  });

  while(patitens[0] != undefined || patitens[0] != null){
    switch(patitens[0].setor){
      case "Cardiologista":
        insert(patitens[0], medicalWard[1].fila);
        remove(pacientes);
      break;
      case "Clínico Geral":
        insert(patitens[0], medicalWard[2].fila);
        remove(pacientes);
      break;
      case "Ortopedista":
        insert(patitens[0], medicalWard[3].fila);
        remove(pacientes);
      break;
    };
  };
};

const clinic:Consultorio = {
  nome: "solveEverything",
  alas: medicalWard
};

function setDiagnostic(patient: Paciente){ //This function define attribute "diagnostico" from interface "Paciente"
  const diagnostics = [ "Gripe" , "Infecção" , "Morrendo" , "Virose" ];
  const diagnostic = diagnostics[Math.floor(Math.random() * diagnostics.length)]; //"diagnostic" selects one value of "diagnostics"
  patient.diagnostico = (<Paciente["diagnostico"]> diagnostic);
  return patient;
};


console.log(doScreening(pacientes), medicalWard)