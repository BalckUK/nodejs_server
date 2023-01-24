const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log("루트 경로")
    res.send('루트경로')
})

app.get('/login', (req, res) => {
    res.send("여기는 로그인 경로입니다")
})


app.listen(port, function (){
    console.log(`현재 포트는 : ${port}`)
})