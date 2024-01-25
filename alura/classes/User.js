class User {
    constructor(nome, email, dataNasc, role, ativo = true){
        this.nome = nome,
        this.email = email,
        this.dataNasc = dataNasc,
        this.role = role || 'estudante',
        this.ativo = ativo
    }

    exibirInfos(){
        return `nome:  ${this.nome}\nemail: ${this.email}`
    }
}

const Vicenzo = new User('Vicenzo', 'vicenzo@email.com', '14/03/2004')

console.log(Vicenzo);
console.log(Vicenzo.exibirInfos())