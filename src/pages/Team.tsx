import React from 'react'
import {Grid, Card, CardContent, CardMedia, Typography, Button} from '@mui/material'
import {useTeam} from '../contexts/TeamContext'

const Team: React.FC = () => {
    const {team, removeFromTeam} = useTeam()

    return (
        <>
            <Typography variant="h4" sx={{mb: 2}}>My Team</Typography>
            <Grid container spacing={2}>
                {team.map((pokemon) => (
                    <Grid item xs={12} sm={6} md={4} key={pokemon.name}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="200"
                                image={pokemon.sprites.front_default}
                                alt={pokemon.name}
                            />
                            <CardContent>
                                <Typography variant="h6">{pokemon.name}</Typography>
                                <Button onClick={() => removeFromTeam(pokemon.name)}>
                                    Remove from Team
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Team