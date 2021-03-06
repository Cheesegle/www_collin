const express = require('express')
const path = require('path');
const app = express()
const port = 80

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/level_1_2_3', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/level_1_2_3/index.html'))
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
