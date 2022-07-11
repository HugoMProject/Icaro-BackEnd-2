
const path = require('path')


const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('<h1>Hola, soy la pagina principal</h1>');
})

app.get('/productos', function(req, res){
    res.sendFile(path.join(__dirname,'views/productos.html'))
})
app.get('/productos/1', function(req, res){
    res.sendFile(path.join(__dirname,'views/productos.html'))
})

app.get('/productos/:id', function(req, res){
    const id = req.params.id;
    res.send('productos # ${id}');
    res.sendFile(path.join(__dirname,'views/productos${id}.html'))
})

// app.put()
// app.patch()
// app.pull()

app.listen(3000)