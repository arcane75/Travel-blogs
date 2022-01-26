import React from 'react';
import { Grid } from '@mui/material';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <>
            <Grid container sx={{ marginTop: '100px' }}>
                <Grid item xs={3} md={3}>
                </Grid>
                <Grid item xs={9}  md={8}>
                    <Blogs />
                </Grid>

            </Grid>
        </>
    );
};

export default Home;