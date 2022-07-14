import { Pets } from '@mui/icons-material'
import { AppBar, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'

const StyledToolBar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})


const Navbar = () => {
    return (
        <AppBar position="stick">
           <StyledToolBar> 
              <Typography 
              variant="h6" 
              sx={{display:{xs:"none", sm:"block"}}}
              > 
              Navbar 
              </Typography>
              <Pets
              sx={{display:{xs:"block", sm:"none"}}}
              />
               </StyledToolBar>
        </AppBar>
    )
}

export default Navbar
