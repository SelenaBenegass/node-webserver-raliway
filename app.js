import express from 'express'
import hbs from 'hbs'
import * as url from 'url'
import * as dotenv from 'dotenv'
dotenv.config()

//const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const app = express()
const port = process.env.PORT;

console.log(__dirname);
// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home', {
  nombre: 'Selena Benegas',
  titulo: 'Desarrollo Web '
})
})

app.get('/elements', function (req, res) {
  res.render('elements', {
  nombre: 'Selena Benegas',
  titulo: 'Desarrollo Web '
})
})

app.get('/generic', function (req, res) {
  res.render('generic', {
  nombre: 'Selena Benegas',
  titulo: 'Desarrollo Web '
})
})

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
