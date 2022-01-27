import React, { useState } from 'react';
import { AppBar, Button, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import MenuDrawer from './MenuDrawer';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Menubar.css"

const Menubar = () => {
    const { user, logOut } = useAuth();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <React.Fragment>
            <AppBar sx={{ background: "#063960" }}>
                <Toolbar>
                    <Typography>CSS</Typography>

                    {isMatch ? (<> <MenuDrawer /> </>) : (
                        <>

                            <NavLink style={{ textDecoration: 'none', color: "white", fontWeight: "bold", margin: "auto" }} class='item' to="/home">Home</NavLink>

                            <NavLink style={{ textDecoration: 'none', color: "white", fontWeight: "bold", marginRight: "10px" }} class='item' to="/home">About</NavLink>


                            {(user?.email) ?
                                <>
                                    <NavLink style={{ textDecoration: 'none', color: "white", fontWeight: "bold", marginRight: "10px" }} class='item' to="/myexperience">Add-Experience</NavLink>

                                    <Button variant='outlined' sx={{ color: "white" }} onClick={logOut}>Logout {user?.displayName}</Button>
                                </>
                                :
                                <NavLink style={{ textDecoration: 'none', color: "white", fontWeight: "bold" }} to="/userlogin">
                                    <Button variant="secondary" color="error"><LoginIcon />Login</Button></NavLink>
                            }
                        </>
                    )
                    }

                </Toolbar>

            </AppBar>
        </React.Fragment>
    );
};

export default Menubar;