const express = require('express');
const app = express();

app.use(express.json());

let tarefas = [];

// Rota POST para criar uma tarefa
app.post('/tarefas', (req, res) => {
    const { titulo } = req.body;
    if (!titulo) {
        return res.status(400).json({ erro: "Título é obrigatório" });
    }
    const novaTarefa = { 
        id: tarefas.length + 1, 
        titulo, 
        status: 'pendente' 
    };
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
});

// Rota GET para listar todas as tarefas
app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});

// EXPORTAÇÃO ESSENCIAL: Permite que o app.test.js funcione
module.exports = app;
