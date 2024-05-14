export interface Paciente{
    nome: string
    setor: "Cardiologista" | "Clínico Geral" | "Ortopedista"
    prioridade?: "Comum" | "Emergência" | "Preferencial" | "Urgente"
    diagnostico?: "Gripe" | "Infecção" | "Morrendo" | "Virose"
};

export interface Ala{
    nome: string
    fila: Paciente[]
};

export interface Consultorio{
    nome: string
    alas: Ala[]
};
