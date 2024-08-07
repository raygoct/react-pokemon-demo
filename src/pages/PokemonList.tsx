import React, {useState} from 'react'
import {useQuery} from '@tanstack/react-query'
import {Link as RouterLink} from 'react-router-dom'
import {Grid, Card, CardContent, Typography, TextField, Button} from '@mui/material'
import axios from 'axios'
import {PokemonListItem} from '../types'

const PokemonList: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const {data, isLoading, error} = useQuery<PokemonListItem[]>({
        queryKey: ['pokemonList'],
        queryFn: async () => {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
            return response.data.results
        },
    })

    const filteredPokemon = data?.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (isLoading) return <Typography>Loading...</Typography>
    if (error) return <Typography>An error occurred: {(error as Error).message}</Typography>

    return (
        <>
            <TextField
                fullWidth
                label="Search Pokémon"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{mb: 2}}
            />
            <Grid container spacing={2}>
                {filteredPokemon?.map((pokemon) => (
                    <Grid item xs={12} sm={6} md={4} key={pokemon.name}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{pokemon.name}</Typography>
                                <Button component={RouterLink} to={`/pokemon/${pokemon.name}`}>
                                    View Details
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default PokemonList