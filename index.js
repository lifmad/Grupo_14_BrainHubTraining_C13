const express = require ('express'); 
const app = express(); 
const path = require ('path');
const PORT = 3050

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log(`
Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}`
))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './views/index.html')) 
} )
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './views/login.html')) 
} )
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './views/productCart.html')) 
} )
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './views/productDetail.html')) 
} )
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './views/register.html')) 
} )