import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Container} from '@mui/material'

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Container component="main" sx={{mt: 4}}>
            </Container>
        </BrowserRouter>
    )
}

export default App