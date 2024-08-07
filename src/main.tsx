import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App'
import theme from './theme'
import {TeamProvider} from './contexts/TeamContext'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <TeamProvider>
                    <App/>
                </TeamProvider>
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>,
)