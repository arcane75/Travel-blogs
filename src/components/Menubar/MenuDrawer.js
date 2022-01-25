import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['About', 'Contact', 'Login'];
const MenuDrawer = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <React.Fragment>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    {
                        pages.map((page, index) => (
                            <ListItemButton onClick={() => setOpenDrawer(false)}key={index}>
                                <ListItemIcon>
                                    <ListItemText>
                                        {page}
                                    </ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))
                    }


                </List>
            </Drawer>
            <IconButton sx={{ marginLeft: 'auto', color: 'white' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </React.Fragment>
    );
};

export default MenuDrawer;