import fs from 'fs' //fs foi usado para acessar o sistema de arquivos e encontrar o arquivo texto.txt

function trataErro(erro){
    throw new Error(erro)
}
async function pegaArquivo (dir){
    try {
        const texto = await fs.promises.readFile(dir, 'utf-8')
        console.log(texto)
    } catch (erro) {
        trataErro(erro)
    }
}

pegaArquivo('./texto.txt')