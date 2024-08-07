import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {Grid, LinearProgress, Typography} from "@mui/material";
import PokemonDetails from "./PokemonDetails.tsx";

const PokemonList = () => {
    const {data, isLoading, error} = useQuery({
            queryKey: ['pokemonList'],
            queryFn: async () => {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=151`)

                return response.data.results
            }
        }
    )

    if (isLoading) return <LinearProgress/>
    if (error) return <Typography>An error occurred: {(error as Error).message}</Typography>

    console.log(data)

    return (

        <Grid>
            {data.map((pokemon) => {
                return <PokemonDetails key={pokemon.id} name={pokemon.name}/>
            })}
        </Grid>


    )

}

export default PokemonList