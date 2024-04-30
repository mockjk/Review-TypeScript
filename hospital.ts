import { Paciente } from './consultorioRuim'

const pacientes: Paciente[] = [
    {
        nome: 'Jorge',
        setor: 'Clínico Geral',
    },
    {
        nome: 'Guerra',
        setor: 'Ortopedista',
    },
    {
        nome: 'Hayashido',
        setor: 'Cardiologista',
    },
]

function triagem(paciente:Paciente){
    const prioridades = ['emergência', 'urgente', 'preferencial', 'comum']
    const prioridade = prioridades[Math.floor(Math.random() * prioridades.length)]
    paciente.prioridade = (prioridade as Paciente["prioridade"])
    return paciente
}

