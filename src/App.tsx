import React from 'react'
import {Container} from '@mui/material'
import PokemonDetails from "./components/PokemonDetails.tsx";
import PokemonList from "./components/PokemonList.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Container>
                <Routes>
                    <Route path="/" element={<PokemonList/>}/>
                    <Route path="/pokemon/:id" element={<PokemonDetails name="ditto"/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default App