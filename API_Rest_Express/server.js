//import http from 'http';

import app from './src/app.js'

const PORT = 3000;

//CRIAÇÃO DO SERVIDOR USANDO LIB HTTP 
// const rotas = {
//     '/' : 'Curso de node.js',
//     '/livros': 'rota de livros',
//     '/autores': 'rota de autores'
// }

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end(rotas[req.url]);
//});

// server.listen(PORT, () => {
//     console.log('servidor escutando');
// });

//CRIAÇÃO DO SERVIDOR COM EXPRESS
app.listen(PORT, () => {
    console.log('servidor escutando');
});