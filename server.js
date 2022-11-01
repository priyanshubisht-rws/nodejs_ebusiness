require('dotenv').config()
const express= require('express')
const app = express()

const userRouter = require('./api/users/user.router')

app.use(express.json())
app.use('/api/login',userRouter)
app.use('/api/updateUser',userRouter)
app.use('/api/getUser',userRouter)

app.listen(process.env.APP_PORT,()=>{
    console.log('server is running on ', process.env.APP_PORT)
})

