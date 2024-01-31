import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(nomeEstudante, nomeCurso){
        return `Estudante ${nomeEstudante} aprovado no curso ${nomeCurso}`
    }
}

const novoDocente = new Docente('docente', 'docente@email.com', '1/2/3')
console.log(novoDocente)
console.log(novoDocente.exibirInfos())
console.log(novoDocente.aprovaEstudante('vicenzo', 'JS'))