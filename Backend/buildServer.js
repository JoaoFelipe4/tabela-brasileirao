const fastify = require('fastify')({logger:true})
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')

function buildServer(){

    mongoose.connect(process.env.CONNECTION_STRING)
    .then(()=>{
        console.log('connected!')
    })
    .catch((error)=>{
        console.log(error)
    })


    fastify.register(require('./routes/userRoutes'))
    fastify.register(require('./routes/devRoutes'))

    return fastify
}

module.exports = buildServer

    