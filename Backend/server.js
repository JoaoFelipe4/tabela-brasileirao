const  buildServer  = require('./buildServer')
const dotenv = require('dotenv').config()

const app = buildServer()

app.listen({port:process.env.PORT},(err)=>{

    if(err){
        console.log(err)
        process.exit(1)
    }
})