import {  Drawer, IconButton } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const MenuDrawer = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <React.Fragment>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <Link style={{ textDecoration: 'none', color: "Black", fontWeight: "bold", padding:'15px'}} to='/home'>Home</Link>

            </Drawer>
            <IconButton sx={{ marginLeft: 'auto', color: 'white' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </React.Fragment>
    );
};

export default MenuDrawer;