import pegaArquivo from './index.js';
import fs from 'fs';
import listaValida from './http_validation.js';
import chalk from 'chalk';

const argumentos = process.argv;
async function imprimeLista(valida, resultado, identificador = ''){
    if(valida){
        console.log(
            chalk.blue('Lista validada'),
            chalk.black.bgWhite(identificador),
            await listaValida(resultado));

    } else {
        console.log(
            chalk.blue('Lista de links'),
            chalk.black.bgWhite(identificador),
            resultado);
    }

}

async function processaTexto(argumentos){
    const caminho = argumentos[2];
    const valida = argumentos[3] === '--valida';

    try {
        fs.lstatSync(caminho)
    } catch (error) {
        if(error.code === 'ENOENT'){ //ENOET == ERROR NO ENTITY
            console.log('Arquivo ou diretório não existente')
            return
        }
    }

    if(fs.lstatSync(caminho).isFile()){
        const resultado = await pegaArquivo(caminho);
        imprimeLista(valida, resultado);
    } else if (fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async (arquivo) => {
            const lista = await pegaArquivo(`${caminho}/${arquivo}`)
            imprimeLista(valida, lista, arquivo)
        })
    }
    
}

processaTexto(argumentos);