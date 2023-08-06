// server
const express = require('express')
const db = require('./db')
const app = express()
const port = 3001
db.startDB()
app.use(express.json());

app.get('/api/items', async (req, res) => {
    res.json(await db.getAllItems())
})
app.get('/api/orders/:id', async (req, res) => {
    res.json(await db.getOrder(req.params.id))
})
app.post('/api/orders',async (req, res) => {
    res.json(await db.createOrder(req.body))
})
app.use(express.static('frontend/dist'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})