import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from '../Product/Product';
import "./Products.css"



export default function Products() {
  return (
    <Box className='card' sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Product/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Product/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Product/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Product/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Product/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Product/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Product/>
        </Grid>
      </Grid>
    </Box>
  );
}
