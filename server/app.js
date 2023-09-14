"use strict";

/* node imports */
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const os = require("os");

//settings file
//const settings = require('./settings.js');

/* Settings */
// for multiple  envinroments

//const hostname = os.hostname();
//console.log('hostname', hostname);
//if (hostname == 'DESKTOP-ESVK1TS') { }

//Express router
const express_app = express();

const port = 3000;

//another use of CORS
/* express_app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); */

//CORS
express_app.use(cors({
   origin: '*'
}));

// Serve static files from the "public" directory
express_app.use(express.static('public'));

// Parse JSON request bodies
express_app.use(express.json());

//console.log('__dirname', __dirname + '/public/index.html');
//routes
//html file
express_app.get('/', async (req, res) => {

   res.sendFile(__dirname + '/public/index.html');

});

//post to service
/* express_app.post('/', async (req, res) => {
   const data = req.body;
   res.json(response);
}); */

express_app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
});


