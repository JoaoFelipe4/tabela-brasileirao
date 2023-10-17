import { GamesTable } from "../../interface/GamesTable"

interface GamesLineProps{
    round:GamesTable[]|undefined
}

export function Games({round}:GamesLineProps) {
    console.log(round)

    return(
        <div className="float-container" id="tableContainer">
        {(round)?.map((jogo,i)=>
        <div className="float-child" key={i}>
            <div className="float-container" id="uniqueGameGrid">
                <div className="float-child">{jogo[1]}</div>
                <div className="float-child"><img src={"../../../img/"+(jogo||[])[1]+".svg"} alt="" style={{height:"30px",width:"30px",position:"relative"}}></img></div>
                <div className="float-child">{(jogo||[])[2]}</div>
                <div className="float-child">X</div>
                <div className="float-child">{(jogo||[])[4]}</div>
                <div className="float-child"><img src={"../../../img/"+(jogo||[])[3]+".svg"} alt="" style={{height:"30px",width:"30px",position:"relative"}}></img></div>
                <div className="float-child">{(jogo||[])[3]}</div>
            </div>
        </div>

        )}
        </div>
    )
}