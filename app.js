const express = require('express');
const body_parser = require('body-parser');
const morgan = require('morgan');
const app = express();
const index_pais = require('./Router/routes_pais');
const index_provincia = require('./Router/router_provincia');
var connection = require('./config_connection/connection');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

  app.options('*', (req, res) => {
      // allowed XHR methods  
      res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
      res.send();
  });
});
  
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/views/'))
//see petitions 
app.use(morgan('dev'));

//routes
app.use('/',index_pais);
app.use('/',index_provincia);

//port
var port = process.env.PORT || 3000
app.listen(port,() =>{
    console.log('Iniciado', port)
})