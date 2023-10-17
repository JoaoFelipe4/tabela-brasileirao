const mongoose = require('mongoose')
const teamData = require('../models/teamData')
const roundData = require('../models/roundModel')
const stadiumSchema = require('../models/stadiumModel')

async function userRoutes(fastify,options){

    fastify.get('/',async function handler(request,reply){

        const rd = roundData.find()
        const tm = teamData.find()

        rd instanceof mongoose.Query
        tm instanceof mongoose.Query

        const r = await rd.sort({round:1})
        const t = await tm
        
        let arr = [];
        let rows = 20;
        let columns = 3;
        let i=0
        let teamArray =[]
        
        // creating two-dimensional array
        for (const key in t) {
            if (Object.hasOwnProperty.call(t, key)) {
                const element = t[key].nome
                teamArray[i] = t[key].nome
                arr[element]=[0,0,0,0,0]
                i++
            }
        }

        
        let allGames=[]
        for (let i=0;i<r.length;i++){
            allGames[i]=[0,0,0,0,0,0,0,0,0,0]
            const round = JSON.parse(`{"round":"${i}"}`)
            for (let j = 1; j < 11; j++) {
                allGames[i][j-1] = [eval(`r[${i}].round`),eval(`r[${i}].game${j}.team1`),eval(`r[${i}].game${j}.score1`),eval(`r[${i}].game${j}.team2`),eval(`r[${i}].game${j}.score2`)]
                if(eval(`r[${i}].game${j}.score1!=null&&r[${i}].game${j}.score2!=null`)){
                if(eval(`r[${i}].game${j}.score1>r[${i}].game${j}.score2`)) {
                    arr[eval(`r[${i}].game${j}.team1`)][0]+=3
                    arr[eval(`r[${i}].game${j}.team1`)][1]+=1
                    arr[eval(`r[${i}].game${j}.team2`)][3]+=1
                    arr[eval(`r[${i}].game${j}.team1`)][4]+=eval(`r[${i}].game${j}.score1`)-eval(`r[${i}].game${j}.score2`)
                    arr[eval(`r[${i}].game${j}.team2`)][4]+=eval(`r[${i}].game${j}.score2`)-eval(`r[${i}].game${j}.score1`)
                }
                if(eval(`r[${i}].game${j}.score1<r[${i}].game${j}.score2`)) {
                    arr[eval(`r[${i}].game${j}.team2`)][0]+=3
                    arr[eval(`r[${i}].game${j}.team2`)][1]+=1
                    arr[eval(`r[${i}].game${j}.team1`)][3]+=1
                    arr[eval(`r[${i}].game${j}.team1`)][4]+=eval(`r[${i}].game${j}.score1`)-eval(`r[${i}].game${j}.score2`)
                    arr[eval(`r[${i}].game${j}.team2`)][4]+=eval(`r[${i}].game${j}.score2`)-eval(`r[${i}].game${j}.score1`)
                }
                if(eval(`r[${i}].game${j}.score1==r[${i}].game${j}.score2`)) {
                    arr[eval(`r[${i}].game${j}.team1`)][0]+=1
                    arr[eval(`r[${i}].game${j}.team2`)][0]+=1
                    arr[eval(`r[${i}].game${j}.team1`)][2]+=1
                    arr[eval(`r[${i}].game${j}.team2`)][2]+=1
                    arr[eval(`r[${i}].game${j}.team1`)][4]+=eval(`r[${i}].game${j}.score1`)-eval(`r[${i}].game${j}.score2`)
                    arr[eval(`r[${i}].game${j}.team2`)][4]+=eval(`r[${i}].game${j}.score2`)-eval(`r[${i}].game${j}.score1`)
                }
            }
                
            }

        }
        const newReply = [toJSON(arr,teamArray),allGames]
        //console.log(allGames)
        reply.header("Access-Control-Allow-Origin", "*")
        reply.send(newReply)
    })

    function toJSON(a,t) {

        const str = JSON.parse(`[
            {"name":"${t[0]}",
            "data":[${a[t[0]]}]},
            {"name":"${t[1]}",
            "data":[${a[t[1]]}]},
            {"name":"${t[2]}",
            "data":[${a[t[2]]}]},
            {"name":"${t[3]}",
            "data":[${a[t[3]]}]},
            {"name":"${t[4]}",
            "data":[${a[t[4]]}]},
            {"name":"${t[5]}",
            "data":[${a[t[5]]}]},
            {"name":"${t[6]}",
            "data":[${a[t[6]]}]},
            {"name":"${t[7]}",
            "data":[${a[t[7]]}]},
            {"name":"${t[8]}",
            "data":[${a[t[8]]}]},
            {"name":"${t[9]}",
            "data":[${a[t[9]]}]},
            {"name":"${t[10]}",
            "data":[${a[t[10]]}]},
            {"name":"${t[11]}",
            "data":[${a[t[11]]}]},
            {"name":"${t[12]}",
            "data":[${a[t[12]]}]},
            {"name":"${t[13]}",
            "data":[${a[t[13]]}]},
            {"name":"${t[14]}",
            "data":[${a[t[14]]}]},
            {"name":"${t[15]}",
            "data":[${a[t[15]]}]},
            {"name":"${t[16]}",
            "data":[${a[t[16]]}]},
            {"name":"${t[17]}",
            "data":[${a[t[17]]}]},
            {"name":"${t[18]}",
            "data":[${a[t[18]]}]},
            {"name":"${t[19]}",
            "data":[${a[t[19]]}]}
        ]`)

        return str
        
    }

}

module.exports = userRoutes
