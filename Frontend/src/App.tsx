import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useTeamData } from './hooks/FetchTeamData';
import { TableLine } from "./components/table/table";
import { TeamData } from './interface/TableData';
import { GamesTable } from './interface/GamesTable';
import Carousel from 'react-bootstrap/Carousel';
import { Games } from './components/games/games';

function App() {
  const {data} = useTeamData();

  console.log(((data as GamesTable[]||[])[1]||[])[2 as keyof typeof data])
  
  return (
    
      <div id="mainContainer" className="grid-container">
        <div className="grid-child" id="table-child">
          <p id='upperText'><b>TABELA</b></p>
          <hr id='upperTextLine'></hr>
          <TableLine table={(data as TeamData[]||[])[0]}/>
        </div>
        
        <div className="grid-child" id="table-child">
        <Carousel interval={null}>
          {(data as GamesTable[]||[]).map((stream,i)=>
              <Carousel.Item>
              <Games round={((stream as GamesTable[]||[]))[i]}/> 
              </Carousel.Item>
          )}
        </Carousel>
        </div>
      </div>
        
  )
}

export default App