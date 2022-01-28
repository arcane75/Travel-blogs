import { Container, Grid, Button } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Menubar from '../Menubar/Menubar';
import AdminExperience from './AdminExperience';
import MakeAdmin from './MakeAdmin';
import ManageBlogs from './ManageBlogs';


const AdminDash = () => {
    const [control, setControl] = useState("manageblogs");
    const { admin, logOut } = useAuth();

    return (
        <>
            <Menubar />
            {
                admin ?
                    <Container sx={{minHeight:'100vh'}}>
                        <Grid container sx={{ mt: 10 }}>
                            <Grid item xs={12} md={3}>
                                <div>
                                    <Button
                                        onClick={() => setControl("makeAdmin")}
                                    >Make Admin</Button>
                                </div>
                                <div>
                                    <Button
                                        onClick={() => setControl("adminExperience")}
                                    >Admin Experience</Button>
                                </div>
                                <div>
                                    <Button
                                        onClick={() => setControl("manageblogs")}
                                    >Manage Blogs</Button>
                                </div>
                                <div>
                                    <Button
                                        onClick={logOut}
                                    >Logout</Button>
                                </div>
                            </Grid>

                            <Grid item xs={12} md={9}>
                                {control === "makeAdmin" && <MakeAdmin></MakeAdmin>}
                                {control === "adminExperience" && <AdminExperience></AdminExperience>}
                                {control === "manageblogs" && <ManageBlogs></ManageBlogs>}
                            </Grid>

                        </Grid>
                    </Container>
                    :
                    <> </>
            }

        </>
    );
};

export default AdminDash;