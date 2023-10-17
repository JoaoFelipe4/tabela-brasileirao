const mongoose = require('mongoose')
const teamData = require('../models/teamData')
const roundData = require('../models/roundModel')
const stadiumSchema = require('../models/stadiumModel')

async function devRoutes(fastify,options){

    //Register a new team
    fastify.post('/newTeam',async function handler(request,reply){
        try {
            if(await teamData.count() >= 20) throw new Error("You can register only 20 teams")
            const team = new teamData({
                _id: new mongoose.Types.ObjectId(),
                nome: request.body['nome'],
                estadio: request.body['estadios']
            })
    
            const createdTeam = await teamData.create(team)
            if(createdTeam){
                console.log(`team registrated (${request.body['nome']})`)
                reply.send(`team registrated (${request.body['nome']})`)
            }else{
                reply.send(`team not registrated (${request.body['nome']})`)
            }
        } catch (error) {
            console.log({error:error.message})
            reply.send({error:error.message})
        }

    })

    //Register a new Stadium
    fastify.post('/newStadium', async function handler(request,reply){
        try {
            const stadium = new stadiumSchema({
                _id: new mongoose.Types.ObjectId(),
                name: request.body['nome'],
                city: request.body['cidade'],
                state: request.body['estado']
            })

            const createdStadium = await stadiumSchema.create(stadium)
            if(createdStadium){
                console.log(`stadium registrated (${request.body['nome']})`)
                reply.send(`stadium registrated (${request.body['nome']})`)
            }else{
                console.log(`stadium not registrated (${request.body['nome']})`)
                reply.send(`stadium not registrated (${request.body['nome']})`)
            }
        } catch (error) {
            console.log({error:error.message})
            reply.send({error:error.message})
        }
    })

    //Register a new Round
    fastify.post('/newRound',async function handler(request,reply){
        try {
            if(await roundData.count() >= 38) throw new Error("You can only register 19 rounds")
            let match = matchObjCreator(request.body)
            let eqMatch = matchObjCreator(request.body)
            eqMatch.round += 19

            for(let i=1;i<11;i++){
                const gameArena = eval(`match.game${i}.arena`)
                const arena = await stadiumSchema.findOne(JSON.parse(`{"name":"${prop[key]}"}`)).exec()
                if(!arena) throw new Error(`the arena "${gameArena}" isn't registrated in DB\nYou must register it to continue`)
            }

            for(let i=1;i<11;i++){

                const t1 = eval(`eqMatch.game${i}.team1`)
                const t2 = eval(`eqMatch.game${i}.team2`)
                const homeArena = eval(`match.game${i}.arena`)
                const stdm2 = await teamData.findOne(JSON.parse(`{"nome":"${t2}"}`)).exec()
                const stdm1 = await teamData.findOne(JSON.parse(`{"nome":"${t1}"}`)).exec()
                homeArena ? null : eval(`match.game${i}.arena=stdm1.estadio[0]`)
                
                eval(`eqMatch.game${i}.team1=t2`)
                eval(`eqMatch.game${i}.team2=t1`)
                eval(`eqMatch.game${i}.arena=stdm2.estadio[0]`)
                eval(`eqMatch.game${i}.time=null`)

            }

            console.log(eqMatch)
            console.log(match)
            const createdMatches = await roundData.create(match)
            const createdMatchesEq = await roundData.create(eqMatch)

            if (createdMatches&&createdMatchesEq) {
                reply.send(match)
                reply.send(eqMatch)}
            else reply.send('not created')
        } catch (error) {
            console.log({error:error.message})
            reply.send({error:error.message})
        }
    })

    fastify.put('/updateData/:typeUpdate', async function handler(request,reply){
        const {typeUpdate} = request.params
        switch (typeUpdate) {
            case "team":
                //CODE FOR TEAM UPDATES
                try {
                    const updatedTeam = await teamData.findOneAndUpdate({nome:request.body['updatedTeam']},request.body)
                    if(!updatedTeam){
                        reply.send("Update unsucceeded")
                    }
                    reply.send(updatedTeam)
                } catch (error) {
                    console.log({error:error.message})
                    reply.send(error.message)
                }
                break
            case "stadium":
                //CODE FOR STADIUM UPDATES
                try {
                    const updatedStadium = await stadiumSchema.findOneAndUpdate({nome:request.body['updatedStadium']},request.body)
                    if(!updatedStadium){
                        reply.send("Update unsucceeded")
                    }
                    reply.send(updatedStadium)
                } catch (error) {
                    console.log({error:error.message})
                    reply.send(error.message)
                }
                break
            case "round":
                //CODE FOR ROUND UPDATES
                try {
                    const bd = request.body
                    const findRound = await roundData.findOne({round:bd['round']}).exec()
                    for(let i=1;i<=11;i++){
                        
                        if (eval(`bd.game${i}`)) {
                            let prop = eval(`bd.game${i}`)
                            for (const key in prop) {
                                if (Object.hasOwnProperty.call(prop, key)) {   
                                    if (key=="arena"){
                                        const arena = await stadiumSchema.findOne(JSON.parse(`{"name":"${prop[key]}"}`)).exec()
                                        if(!arena) throw new Error(`the arena "${prop[key]}" isn't registrated in DB\nYou must register it to continue`) 
                                    }
                                    switch (typeof prop[key]) {
                                        case "string":
                                            eval(`findRound.game${i}.${key}="${prop[key]}"`)
                                            break;
                                        case "number":
                                                eval(`findRound.game${i}.${key}=${prop[key]}`)
                                                break;
                                        default:
                                            break;
                                    }
                                }
                            } 
                        }
                        if(i==11){
                            const updatedRound = await roundData.findOneAndUpdate({round:bd['round']},findRound)
                            if(!updatedRound){
                                reply.send("Update unsucceeded")
                            }
                            reply.send(findRound)
                            console.log(findRound)
                        }
                    }
                    
                } catch (error) {
                    console.log({error:error.message})
                    reply.send(error.message)
                }
                break
            default:
                console.log(`The model data "${typeUpdate}" does not exist!`)
                reply.send({error:`The model data "${typeUpdate}" does not exist!`}).code(500)
                break
        }
    })

}

function matchObjCreator(bodyFunc){
   const t = new roundData({
        _id: new mongoose.Types.ObjectId(),
        round: bodyFunc['rodada'],
        game1: bodyFunc['1'],
        game2: bodyFunc['2'],
        game3: bodyFunc['3'],
        game4: bodyFunc['4'],
        game5: bodyFunc['5'],
        game6: bodyFunc['6'],
        game7: bodyFunc['7'],
        game8: bodyFunc['8'],
        game9: bodyFunc['9'],
        game10: bodyFunc['10']
    })
    return t
}
module.exports = devRoutes