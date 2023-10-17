import { TeamData } from "../../interface/TableData";
import "./table.css";

interface TableLineProps{
    table:TeamData|undefined
}

export function TableLine({table} : TableLineProps) {


    //console.log(table[0])



table?.sort((a,b)=>{return (b as TeamData).data[0]-(a as TeamData).data[0]||(b as TeamData).data[1]-(a as TeamData).data[1]||(b as TeamData).data[4]-(a as TeamData).data[4]})

    return( 
            <table id="mainTable">
        <thead>
        <tr key={1}>
            <th></th>
            <th>Time</th>
            <th>Pontos</th>
            <th>Vitórias</th>
            <th>Empates</th>
            <th>Derrotas</th>
            <th>SG</th>
        </tr>
        </thead>
        <tbody>
        {(table as TeamData)?.map((tableData,i) =>
            <tr key={i}>
                <td>{i+1}°</td>
                <td style={{textAlign:"left"}}><img src={"/img/"+(tableData as TeamData).name+".svg"} alt="" style={{height:"30px",width:"30px",position:"relative"}}></img> {(tableData as TeamData).name}</td>
                <td>{(tableData as TeamData).data[0]}</td>
                <td>{(tableData as TeamData).data[1]}</td>
                <td>{(tableData as TeamData).data[2]}</td>
                <td>{(tableData as TeamData).data[3]}</td>
                <td>{(tableData as TeamData).data[4]}</td>
            </tr>
        )}
        </tbody>
        </table>

    )
    
}