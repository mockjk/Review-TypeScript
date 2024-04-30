export interface Paciente{
    nome: string
    setor: 'Clínico Geral' | 'Cardiologista' | 'Ortopedista'
    prioridade?: 'emergência' | 'urgente' | 'preferencial' | 'comum'
}
