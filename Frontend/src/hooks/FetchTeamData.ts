import axios,{AxiosPromise} from "axios"
import { TeamData } from "../interface/TableData"
import { GamesTable } from "../../src/interface/GamesTable";
import { useQuery } from "@tanstack/react-query"

const API_URL = "http://localhost:3000"

const fetchData = async (): AxiosPromise<TeamData[]|GamesTable[]> =>{
    const response = axios.get(API_URL)
    return response
}

export function useTeamData() {
    const query = useQuery({
        queryFn:fetchData,
        queryKey: ['team-data'],
        retry:1
    })

    //console.log(query)

    return {
        ...query,
        data:query.data?.data
    }
}