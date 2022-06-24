import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';

const HeroSection = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, my: 3 }}>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
                        <Box >
                            <Typography variant='h2' sx={{ fontWeight: 'bold', my: 2 }}>
                                Friday pizza!
                            </Typography>
                            <Typography variant='h6' sx={{ my: 2 }} style={{ fontSize: '28px' }}>
                                Time to enjoy our delicious pizza.
                            </Typography>
                            <Button style={{ background: '#e74c3c' }} variant='contained'>ORDER NOW</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <img style={{ width: '100%', borderRadius:20 }} src="https://i.ibb.co/T0tyrMR/margherita-pizza-2.png" alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default HeroSection;