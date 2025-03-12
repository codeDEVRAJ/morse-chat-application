const express = require('express');
const hostRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/pathUtil');

const homesController = require('../controllers/homes');

const { sign } = require('crypto');


hostRouter.get("/home/contact.html" , homesController.getContact);
hostRouter.post("/home/contact" , homesController.PostContacted);


module.exports = hostRouter;