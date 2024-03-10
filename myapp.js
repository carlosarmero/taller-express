const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
app.use(express.static(__dirname))

//app.use(express.bodyParser());
//app.post('/submit', function(req, res, next){
    // req.body object has your form values
   // console.log(req.body.nombre);
 //});

//man=?
app.use(express.urlencoded({ extended:true }))
app.use(express.json())

app.post("/submit", (req, res) => {
    let datosejs = {nombre: req.body.nombre}
    
 return res.render("submit", {nombre : datosejs.nombre})

})
//servidor ok
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });

//rutas
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

/*
  app.get('/submit', (req, res) => {
    res.render('submit', { root: __dirname })
  });*/