
//모듈
const express = require('express')
const app = express()
// const port = 3000


//라우팅
const home = require("./routes/home")

//앱 세팅
app.set("views","./views");
app.set("view engine", "ejs");
app.use("/", home) // use -> 미들웨어를 등록해주는 메서드


module.exports = app;

// app.listen(port, function() {
//     console.log(`서버가동 ${port}`)
// })


// package.json
