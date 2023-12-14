const express = require('express');
const { disparo } = require('./zenvia');
const server = express();

server.use(express.json())

server.get('/dados', (req,res) => {
    res.status(200)
});

server.post('/dados', (req, res) => {
    const { rgm, numero, link } = req.body;
    //chamar a api passar os parametros
    const resposta = disparo(req.body)

    res.status(200).send(req.body)
});

server.listen(3000, () => {
    console.log('Backend rodando...')
});