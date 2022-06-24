import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Box, Button, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
// import Header from '../Shared/Header/Header';

const currencies = [
    {
        value: 'USD',
        label: 'Small',
    },
    {
        value: 'USD',
        label: 'Medium',
    },
    {
        value: 'USD',
        label: 'Large',
    },
    {
        value: 'USD',
        label: 'Extra-large',
    },
];



const RecommendedMenu = () => {
    
    // price List 
    const [currency, setCurrency] = React.useState('USD');

    const handleChange = (event) => {
        setCurrency(event.target.label);
    };

    return (
        
        <Container sx={{ my: 1 }}>
            {/* <Header></Header> */}
            <Typography sx={{ my: 5 }} style={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                Recommended <span style={{ color: '#e74c3c', fontSize: '35px' }}>Menu</span>
            </Typography>

            <Box >
                <Grid container spacing={1}>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 350, border: 0, boxShadow: 4 }} style={{ borderRadius: '0px 100px / 120px' }}>
                            <CardMedia
                                component="img"
                                height="350"
                                image="https://i.ibb.co/85hSyPr/Mask-Group.png"
                                alt="Cheese Lovers"
                                position='center'
                                padding='5px'
                            />
                            <CardContent style={{ marginTop: '-70px' }}>
                                <Typography style={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                                    Cheese Lovers
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Combination of Alfredo sauce and two cheeses – Romano, and Parmesan.
                                </Typography>
                                <Typography variant="h1" color="green" sx={{ mt: 3 }} style={{ fontSize: '25px', fontWeight: 'bold' }}>
                                    $20.00
                                </Typography>

                                {/* Price List */}

                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 2, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >

                                    <div>

                                        <TextField
                                            id="standard-select-currency-native"
                                            select
                                            label=""
                                            value={currency}
                                            onChange={handleChange}
                                            SelectProps={{
                                                native: true,
                                            }}

                                            variant="standard"
                                        >
                                            {currencies.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>
                                    </div>
                                </Box>
                                <Button sx={{ py: 1, px: 5 }} style={{ background: '#EC0000', color: '#fafafa', borderRadius: '40px', fontWeight: 'bold' }} variant='text'>Add To Cart</Button>


                            </CardContent>

                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 350, border: 0, boxShadow: 4 }} style={{ borderRadius: '0px 100px / 120px' }}>
                            <CardMedia
                                component="img"
                                height="350"
                                image="https://i.ibb.co/NS2Gv1T/Mask-Group-1.png"
                                alt="Cheese Lovers"
                                position='center'
                                padding='5px'
                            />
                            <CardContent style={{ marginTop: '-70px' }}>
                                <Typography style={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                                    Pepperoni Pizza
                                </Typography>
                                <Typography style={{ fontSize: "17px" }} variant="body1" color="text.secondary">
                                    Pizza with homemade spicy beef sausage
                                </Typography>
                                <Typography variant="h1" color="green" sx={{ mt: 3 }} style={{ fontSize: '25px', fontWeight: 'bold' }}>
                                    $25.00
                                </Typography>

                                {/* Price List */}

                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 2, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >

                                    <div>

                                        <TextField
                                            id="standard-select-currency-native"
                                            select
                                            label=""
                                            value={currency}
                                            onChange={handleChange}
                                            SelectProps={{
                                                native: true,
                                            }}

                                            variant="standard"
                                        >
                                            {currencies.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>
                                    </div>
                                </Box>
                                <Button sx={{ py: 1, px: 5 }} style={{ background: '#EC0000', color: '#fafafa', borderRadius: '40px', fontWeight: 'bold' }} variant='text'>Add To Cart</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 350, border: 0, boxShadow: 4 }} style={{ borderRadius: '0px 100px / 120px' }}>
                            <CardMedia
                                component="img"
                                height="350"
                                image="https://i.ibb.co/hK0P4R7/Mask-Group-2.png"
                                alt="Cheese Lovers"
                                position='center'
                                padding='5px'
                            />
                            <CardContent style={{ marginTop: '-70px' }}>
                                <Typography style={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                                    Margherita Pizza
                                </Typography>
                                <Typography style={{ fontSize: "17px" }} variant="body1" color="text.secondary">
                                    Made with San Marzano tomatoes, mozzarella cheese, and fresh basil.
                                </Typography>
                                <Typography variant="h1" color="green" sx={{ mt: 3 }} style={{ fontSize: '25px', fontWeight: 'bold' }}>
                                    $35.00
                                </Typography>

                                {/* Price List */}

                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 2, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >

                                    <div>

                                        <TextField
                                            id="standard-select-currency-native"
                                            select
                                            label=""
                                            value={currency}
                                            onChange={handleChange}
                                            SelectProps={{
                                                native: true,
                                            }}

                                            variant="standard"
                                        >
                                            {currencies.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>
                                    </div>
                                </Box>
                                <Button sx={{ py: 1, px: 5 }} style={{ background: '#EC0000', color: '#fafafa', borderRadius: '40px', fontWeight: 'bold' }} variant='text'>Add To Cart</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

        </Container>
    );
};

export default RecommendedMenu;