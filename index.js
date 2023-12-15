const express = require('express');
const { disparo } = require('./zenvia');
const server = express();

server.use(express.json())

server.get('/dados', (req, res) => {
    res.status(200)
});

server.post('/dados', async (req, res) => {
    const data = req.body;
    const numberOfRequests = data.length;
    const delayBetweenRequests = 1000;

    try {
        for (let i = 0; i < numberOfRequests; i++) {
            const { rgm, numero, link } = data[i];
            const resposta = await disparo(data[i]);

            // Aguardar antes da próxima requisição
            await new Promise(resolve => setTimeout(resolve, delayBetweenRequests));

        }
        res.status(200).send(req.body);
    } catch (error) {
        console.error('Erro na requisição:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

server.listen(3000, () => {
    console.log('Backend rodando...')
});