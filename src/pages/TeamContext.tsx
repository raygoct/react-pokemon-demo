import React, {createContext, useContext, useState, ReactNode} from 'react'
import {PokemonDetails} from '../types'

interface TeamContextType {
    team: PokemonDetails[]
    addToTeam: (pokemon: PokemonDetails) => void
    removeFromTeam: (pokemonName: string) => void
    isInTeam: (pokemonName: string) => boolean
}

const TeamContext = createContext<TeamContextType | undefined>(undefined)

export const TeamProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [team, setTeam] = useState<PokemonDetails[]>([])

    const addToTeam = (pokemon: PokemonDetails) => {
        if (team.length < 6 && !isInTeam(pokemon.name)) {
            setTeam([...team, pokemon])
        }
    }

    const removeFromTeam = (pokemonName: string) => {
        setTeam(team.filter(p => p.name !== pokemonName))
    }

    const isInTeam = (pokemonName: string) => {
        return team.some(p => p.name === pokemonName)
    }

    return (
        <TeamContext.Provider value={{team, addToTeam, removeFromTeam, isInTeam}}>
            {children}
        </TeamContext.Provider>
    )
}

export const useTeam = () => {
    const context = useContext(TeamContext)
    if (context === undefined) {
        throw new Error('useTeam must be used within a TeamProvider')
    }
    return context
}