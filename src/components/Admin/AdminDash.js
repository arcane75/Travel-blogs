import { Container, Grid, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Menubar from '../Menubar/Menubar';
import MakeAdmin from './MakeAdmin';


const AdminDash = () => {
    const [control, setControl] = useState("addExperience");
    const { admin, logOut } = useAuth();

    return (
        <>
            <Menubar />
            {/* <Container >
                <Grid sx={{ mt: 10 }}>
                    <Typography>Dashboard</Typography>
                    <Grid item xs={3} md={3}>
                        <div>
                            <Button
                                onClick={() => setControl("makeAdmin")}
                            >Make Admin</Button>
                        </div>
                        <div>
                            <Button
                                onClick={logOut}
                            >Logout</Button>
                        </div>
                    </Grid>

                    <Grid item xs={7} md={7}>
                        {control === "makeAdmin" && <MakeAdmin></MakeAdmin>}
                    </Grid>
                </Grid>

            </Container> */}
            <Container >
                <Grid container sx={{ mt: 10 }}>
                    <Grid item md={3}>
                        <div>
                            <Button
                                onClick={() => setControl("makeAdmin")}
                            >Make Admin</Button>
                        </div>
                        <div>
                            <Button
                                onClick={logOut}
                            >Logout</Button>
                        </div>
                    </Grid>

                    <Grid item xs={10} md={7}>
                        {control === "makeAdmin" && <MakeAdmin></MakeAdmin>}
                    </Grid>

                </Grid>
            </Container>
        </>
    );
};

export default AdminDash;