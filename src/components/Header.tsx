import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import {AppBar, Toolbar, Typography, Button} from '@mui/material'

const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Pokédex
                </Typography>
                <Button color="inherit" component={RouterLink} to="/">
                    Home
                </Button>
                <Button color="inherit" component={RouterLink} to="/team">
                    My Team
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header