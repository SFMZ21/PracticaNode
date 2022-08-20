
const express = require('express')

const app = express()
const path =require('path')
app.use(express.static(`${__dirname}/public/SitioWebConstructora`));

app.listen(8080, () => {
    console.log('corriendo en el puerto 8080')
})

app.get('/', (request,response)=> {
    response.send('Paginas estaticas corriendo');
});

app.get('/1', (request, response) =>{
    response.sendFile(path.resolve(__dirname, 'index2.html'))
})
app.get('/2', (request, response) =>{
  response.sendFile(path.resolve(__dirname, 'public/SitioWebConstructora/index.html'))
})
