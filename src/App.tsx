import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {Container} from '@mui/material'
import Header from './components/Header'
import PokemonList from './pages/PokemonList'
import PokemonDetails from './pages/PokemonDetails'
import Team from './pages/Team'

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Container component="main" sx={{mt: 4}}>
                <Routes>
                    <Route path="/" element={<PokemonList/>}/>
                    <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
                    <Route path="/team" element={<Team/>}/>
                    <Route path="*" element={<Navigate to="/" replace/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default App