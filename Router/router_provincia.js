const express = require('express'),
      router = express.Router(),
      provincia = require('../controllers/controller_provincia');

router.use('/provincia',provincia)

module.exports=router;