const materias = ['matematica', 'portugues', 'ingles', 'geografia', 'historia']
const alunosRepetidosDesordenados = ['CAIO', 'BIA', 'CAIO', 'ANA', 'ANA', 'BIA']

// const setAlunos = new Set(alunosRepetidos)
// const alunos = [...setAlunos]
// ou melhor
const alunos = [...new Set(alunosRepetidosDesordenados)].sort()

const notasAna = [4, 7, 5, 8, 9]
const notasBia = [6, 8.5, 6.7, 9.8, 10]
const notasCaio = [3, 1.5, 7.7, 4.8, 1]


const notas = [[...notasAna], [...notasBia], [...notasCaio]] //listas aninhadas e spread operator (...)
const [notasA, notasB, notasC] = notas //desestruturação de listas


//declaração de função clássica
function mediaAluno(notas){
    const somaNotas = notas.reduce(function(total, valor){ // .reduce(função callback, valor inicial do acumulador)
        return total + valor                               // função com primeiro parametro ACUMULADOR e segundo ELEMENTO ATUAL DO ARRAY
    }, 0)
    const media = somaNotas/notas.length
    return media
}

//arrow function
const situacao = (nomeAluno) => {
    if (alunos.includes(nomeAluno.toUpperCase())){ // includes() para saber se a string está na lista // .toUpperCase() para colocar a string toda em maiscula
        const notasAluno = notas[alunos.indexOf(nomeAluno.toUpperCase())] //IndexOf() para descobrir o indice do nome do aluno
        const media = mediaAluno(notasAluno)
        if (media > 7){
            return 'Aprovado'
        } else if (media > 5) {
            return 'Recuperação' 
        } else {
            return 'Reprovado'
        }
    } else {
        console.error(new Error('Nome de aluno não encontrado na lista')) //console.error() usando a classe Error default do JS
    }
}

const recuperacao = (nomeAluno, nota=0) => {
    const nome = nomeAluno.toUpperCase()
    const notasAluno = notas[alunos.indexOf(nome)]
    return  (mediaAluno(notasAluno) + Number(nota)) / 2
}

const materiasMaiusculas = materias.map((nomeMateria) => nomeMateria[0].toUpperCase().concat(nomeMateria.slice(1))) //.map() para fazer um loop chamando a função para todos os elementos
                                                                                                                   //.concat() para concatenar as strings 'M' + 'atematica'
                                                                                                                   //.slice() para separar a string começando no indice 1 até o fim
console.log(mediaAluno(notasAna))
console.log(situacao('ana'))
console.log(situacao('ana') === 'Recuperação'? recuperacao('AnA', 7): situacao('ana')) //operador ternario
console.log(materiasMaiusculas)

