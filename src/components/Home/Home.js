import React from 'react';
import { Grid } from '@mui/material';
import Blogs from '../Blogs/Blogs';
import Sidebar from '../Sidebar/Sidebar';
import Menubar from '../Menubar/Menubar';

const Home = () => {
    return (
        <>
            <Menubar />
            <Grid container sx={{ marginTop: '100px' }}>
                <Grid item md={3}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10} md={7}>
                    <Blogs />
                </Grid>
                <Grid item md={2}>

                </Grid>

            </Grid>

        </>
    );
};

export default Home;