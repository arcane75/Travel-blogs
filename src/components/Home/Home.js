import React from 'react';
import { Grid, Pagination } from '@mui/material';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <>
            <Grid container sx={{ marginTop: '100px' }}>
                <Grid item xs={3} md={3}>
                </Grid>
                <Grid item xs={8.5}  md={7}>
                    <Blogs />
                </Grid>
                <Grid item md={2}>
                    
                </Grid>

            </Grid>
            
        </>
    );
};

export default Home;