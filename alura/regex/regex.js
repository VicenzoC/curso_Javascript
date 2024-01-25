import fs from 'fs' //fs foi usado para acessar o sistema de arquivos e encontrar o arquivo texto.txt

function trataErro(erro){
    throw new Error(erro);
}
async function pegaArquivo (dir){
    try {
        const texto = await fs.promises.readFile(dir, 'utf-8');
        console.log(extraiLinks(texto));
    } catch (erro) {
        trataErro(erro);
    }
}

function extraiLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:[^[\]\)]*?)\)/gm;
    const links = [...texto.matchAll(regex)]; //pega todas as ocorrencias separadas e transforma em um objeto iterável, com o '...' espalhamos o objeto dentro do array
//  const links = regex.exec(texto); pega só a primeira ocorrencia separando por grupos/classes
//  const links = texto.match(regex); pega todas as ocorrencias mas não separa por grupos/classes
    const resultados = links.map(link => ({[link[1]]:link[2]})); // link[1] sendo o titulo e link[2] sendo a url do link
    return(resultados);
}

pegaArquivo('./texto.txt');
