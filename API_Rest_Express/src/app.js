import express from 'express';

const app = express();
app.use(express.json()); //MIDDLEWARE

const livros = [
    {
        "id": 1,
        "nome": "livro 1"
    },
    {
        "id": 2,
        "nome": "livro 2"
    }
]

function buscaLivro(id){
    return livros.findIndex(livro =>{
        return livro.id == id
    })
}

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node.js');
});

//---CRUD---
//CREATE-READ-UPDATE-DELETE

//ver todos os livros ---READ---
app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

//ver apenas 1 livro selecionado pelo ID ---READ---
app.get('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id)
    res.status(200).json(livros[index]);
});

//cria livro ---CREATE---
app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro adicionado');
})

//altera o nome do livro ---UPDATE---
app.put('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id)
    livros[index].nome = req.body.nome
    res.status(200).send('Livro alterado');
})

//exclui um livro ---DELETE---  
app.delete('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id)
    livros.splice(index, 1)
    res.status(200).send('Livro excluído');
})

export default app;

Status : Com FalhaFalha no teste: Communications link failure

The last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.