const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/views'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });

app.get('/', (req, res) => {
  res.render('home', {root : __dirname}) //con este too + '/views'
});

app.get('/about', (req, res) => {
    res.render('sobre', { titu: 'Esta es una variable de myapp' })
  });

app.get('/contact', (req, res) => {
    res.sendFile('contact.html', { root: __dirname })
  });

  app.get('/envio', (req, res) => {
    res.render('envio', { root: __dirname })
  });


  app.get('/submit', (req, res) => {
    res.render('submit', { root: __dirname })
  });