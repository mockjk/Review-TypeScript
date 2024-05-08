export interface Paciente{
    nome: string
    setor: "Cardiologista" | "Clínico Geral" | "Ortopedista"
    prioridade?: "Comum" | "Emergência" | "Preferencial" | "Urgente"
};

export interface Ala{
    nome: string
    fila: Paciente[]
};

export interface Consultorio{
    nome: string
    alas: Ala[]
};
