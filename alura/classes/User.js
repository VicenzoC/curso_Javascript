export default class User {
    #nome //private field não pode ser visualizado/alterado por fora da classe
    constructor(nome, email, dataNasc, role, ativo = true){
        this.#nome = nome,
        this.email = email,
        this.dataNasc = dataNasc,
        this.role = role || 'estudante',
        this.ativo = ativo
    }

    //Getters e Setters tem o mesmo nome para que seja acessado de forma similar ao acesso de propriedades públicas

    //Getters dão permissão para VISUALIZAR propriedades privadas
    get nome() {
        return this.#nome
    }

    //Setters dão permissão para ALTERAR propriedades privadas
    //Setter tbm é utilizado para fazer validações nas alterações de propriedades
    set nome(nome) {
        //Valida se o novo nome não é vazio
        if(nome === ''){
            throw new Error('Nome informado é inválido por não conter caracteres');
        }
        this.#nome = nome
    }

    exibirInfos(){
        return `nome:  ${this.nome}\nemail: ${this.email}`
    }
}

const Vicenzo = new User('Vicenzo', 'vicenzo@email.com', '14/03/2004');

//console.log(Vicenzo);
//console.log(Vicenzo.exibirInfos());
//console.log(Vicenzo.nome = '') //testa validação do Setter
