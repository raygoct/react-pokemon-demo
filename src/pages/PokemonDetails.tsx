import React, {useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {useQuery} from '@tanstack/react-query'
import {
    Card,
    CardContent,
    Typography,
    Button,
    LinearProgress,
    Box
} from '@mui/material'
import axios from 'axios'
import {PokemonDetails as PokemonDetailsType} from '../types'
import {useTeam} from '../contexts/TeamContext'

const PokemonDetails: React.FC = () => {
    const {id} = useParams<{ id: string }>()
    const navigate = useNavigate()
    const {addToTeam, removeFromTeam, isInTeam} = useTeam()

    console.log("Component rendered. ID:", id);

    useEffect(() => {
        console.log("useEffect triggered. ID:", id);
    }, [id]);

    const {data, isLoading, error} = useQuery<PokemonDetailsType>({
        queryKey: ['pokemon', id],
        queryFn: async () => {
            console.log("Fetching data for:", id);
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            console.log("API response:", response.data);
            return response.data
        },
        enabled: !!id,
    })

    console.log("Query state:", {isLoading, error, data});

    if (isLoading) return <LinearProgress/>
    if (error) return <Typography color="error">An error occurred: {(error as Error).message}</Typography>
    if (!data) return <Typography>No data available for {id}</Typography>

    return (
        <Card>
            <CardContent>
                <Typography variant="h4" gutterBottom>{data.name}</Typography>
                <Typography>Height: {data.height / 10} m</Typography>
                <Typography>Weight: {data.weight / 10} kg</Typography>
                <Box mt={2} display="flex" justifyContent="space-between">
                    <Button variant="contained" onClick={() => navigate(-1)}>
                        Back
                    </Button>
                    <Button
                        variant="contained"
                        color={isInTeam(data.name) ? "secondary" : "primary"}
                        onClick={() => isInTeam(data.name) ? removeFromTeam(data.name) : addToTeam(data)}
                    >
                        {isInTeam(data.name) ? 'Remove from Team' : 'Add to Team'}
                    </Button>
                </Box>
            </CardContent>
        </Card>
    )
}

export default PokemonDetails