const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://rlqja910:1095811kK!@boilerplate.ytfw4yh.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
}).then( ()=> console.log('몽고 연결 성공'))
.catch(err => console.log(err))

app.get('/', (req,res) => res.send('Hello world!'))

app.listen(port, () => console.log(`Example app listening on port ${port}`))