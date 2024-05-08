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

const clinic: Ala[] = [
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

function doScreening(patitens: Paciente[]){//This function perfoms screening
    
    for(let i = 0; i < patitens.length; i++){//For Loop walks through the entire screening
        const patientWithScreening = screening(patitens[i]); //Patient goes through screening and receive a priority
    
        //Insert in queue from sector
        if(patientWithScreening.setor === "Cardiologista"){
            insert(patientWithScreening, clinic[1].fila); //Put
            remove(patitens); //Remove from screening
            return;
        };
        if(patientWithScreening.setor === "Clínico Geral"){
            insert(patientWithScreening, clinic[2].fila);
            remove(patitens);
            return;
        };
        if(patientWithScreening.setor === "Ortopedista"){
            insert(patientWithScreening, clinic[3].fila);
            remove(patitens);
            return;
        };
    };
    
}