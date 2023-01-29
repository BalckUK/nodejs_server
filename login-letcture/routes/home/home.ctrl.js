"use strict";

const hello = (req, res) => {
    res.render("home/index")
}

const login = (req, res) => {
    res.render("home/login")
}

const cat = (req, res) => {
    res.render("home/cat")
}

module.exports = {
    hello,
    login,
    cat
}