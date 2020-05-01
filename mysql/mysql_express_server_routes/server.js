const express=require('express')
const app=express()
const path=require('path')

app.use('/',express.static(path.join(__dirname,'public_static')))


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','hbs')

app.use('/pages',require('./routes/pages').route)
app.use('/api',require('./routes/api').route)


app.listen(5555,()=>{console.log("Server started at http://localhost:5555")})