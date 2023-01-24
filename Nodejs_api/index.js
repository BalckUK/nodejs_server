const express = require('express')
const app = express()
const port = 3000;

setTimeout(() => {
    console.log("1초지남")
}, 1000)

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/dog', function (req, res) {
    res.send("<a href='https://www.youtube.com/watch?v=kEzQ2Ksy55A'>이동하기</a>")
  })

app.get('/api', function(req, res){
  // res.send({'api': 'json'})
    res.json({'api2': 'json2'})
})

/*
app.get('/user/:id', (req, res) => {
    const id = req.params
    console.log(id.id)
    res.json(id)
})
*/

app.get('/user/:id', (req, res) => {
    const ids = req.query;
    console.log(ids)
    res.json(ids)
})


app.post('', (req, res) => {
    
})


app.listen(port, () => {
    console.log(`접속한 포트 번호는 : ${port}`)
});  