import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import "./Navbar.css"
import { ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';



export default function Navbar() {
  return (
    <Box className="navbar" >
      <AppBar className='grow' >
        <Toolbar>
          <IconButton className='buttonImage'>
            <img src ="./images/logoBuy.svg" width={50} alt=''/>
          </IconButton>
          <Typography variant="h6"  component="div" sx={{ flexGrow: 1 }}>
            Buy & Hold
          </Typography>
          <Typography variant="h6"  component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Typography variant="h6"  component="div" sx={{ flexGrow: 1 }}>
            Contacto
          </Typography>
          <Button variant="h4" className='button' ><strong > Login </strong>
          </Button>
          <IconButton arial-label="show cart items" color="inherit" className='button'>
            <Badge badgeContent={2} color="secondary">
          <ShoppingCart fontSize='large' color='inherit'/>
          </Badge>
          </IconButton>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
