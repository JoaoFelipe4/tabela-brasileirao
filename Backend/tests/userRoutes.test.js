const { test } = require('tap')
const buildServer = require("../buildServer")
const mongoose = require('mongoose')

test('requests the "/" route',async (t) => {

    const fastify=buildServer()

    t.teardown(()=>{
      mongoose.connection.close()
      fastify.close()
    })

    const response = await fastify.inject({
      method:'GET',
      url:'/'
    })

    
    t.equal(response.statusCode, 200, 'returns a status code of 200')
  
   })


