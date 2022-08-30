const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const mongoInfo = require('./config/key')

const {User} = require("./models/User")

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extend:true
}))
//application/json
app.use(bodyParser.json())


const mongoose = require('mongoose')
mongoose.connect(mongoInfo.mongoURI,{
    useNewUrlParser : true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
}).then( ()=> console.log('몽고 연결 성공'))
.catch(err => console.log(err))

app.get('/', function(req,res) {
    res.send('Hello world~!!!!!');
})



app.post('/register', (req,res) => {
    //회원가입 시 필요한 정보들을 client에서 가져오면
    //그것들을 DB에 넣어준다.

    const user = new User(req.body)

    user.save((err,userInfo)=>{
        if(err) return res.json({success : false, err})

        return res.status(200).json({
            success:true
        })
    })
})



app.listen(port, () => console.log(`Example app listening on port ${port}`))