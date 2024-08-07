import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {Card, CardContent, LinearProgress, Typography} from "@mui/material";

const PokemonDetails = ({name}) => {


    console.log(name)

    const {data, isLoading, error} = useQuery({
            queryKey: ['pokemon', name],
            queryFn: async () => {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)

                return response.data

            }
        }
    )

    if (isLoading) return <LinearProgress/>
    if (error) return <Typography color="error">An error occurred: {(error as Error).message}</Typography>
    if (!data) return <Typography>No data available for {name}</Typography>


    return (
            <Card>
                <CardContent>
                    <Typography>{data.name}</Typography>
                    <Typography>{data.height}</Typography>
                    <Typography>{data.weight}</Typography>
                </CardContent>
            </Card>

    )
}

export default PokemonDetails