const express = require('express'),
      router = express.Router(),
      pais = require('../controllers/controller_pais');

router.use('/pais',pais);

module.exports=router;