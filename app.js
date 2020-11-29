const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/listar/:id', (req, res) => {
    const { id } = req.params
    const { sit } = req.query
    res.json({
        id,
        nome: "Philipe",
        sit
    })
})

app.listen(3000, () => {
    console.log('Servidor Iniciado')
})