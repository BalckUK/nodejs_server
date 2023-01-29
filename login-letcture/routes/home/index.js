"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl")

router.get('/', ctrl.hello)
router.get('/login', ctrl.login)
router.get("/cat", ctrl.cat)

module.exports = router;