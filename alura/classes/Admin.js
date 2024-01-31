import User from "./User.js";

//herança de classe
class Admin extends User { 
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeCurso, vagas){
        return `Curso de ${nomeCurso} criado com ${vagas} vagas`
    }
}

const novoAdmin = new Admin('ADM', 'adm@email.com', '1/2/3');
//console.log(novoAdmin.exibirInfos())
console.log(novoAdmin.criarCurso('JS', 2))