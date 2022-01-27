import { Checkbox, Drawer, FormControlLabel, FormGroup, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const SideDrawer = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    // const handledrawer = (e) => {
    //     setOpenDrawer(false)
    // }
    return (
        <React.Fragment>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                {/* <List>
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


                </List> */}

                <Typography>Category</Typography>
                <List>
                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <FormGroup >
                            <FormControlLabel
                                control={<Checkbox
                                    // checked={checked}
                                    // onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />}
                                label="Weekend Break"
                            />

                            <FormControlLabel
                                control={<Checkbox
                                    // checked={checked}
                                    // onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />}
                                label="Package Holiday"
                            />

                            <FormControlLabel
                                control={<Checkbox
                                    // checked={checked}
                                    // onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />}
                                label="Budget Traveler"
                            />

                            <FormControlLabel
                                control={<Checkbox
                                    // checked={checked}
                                    // onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />}
                                label="Private Tour"
                            />

                            <FormControlLabel
                                control={<Checkbox
                                    // checked={checked}
                                    // onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />}
                                label="Group Tour"
                            />

                            <FormControlLabel
                                control={<Checkbox
                                    // checked={checked}
                                    // onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />}
                                label="Domestic Tourism"
                            />
                        </FormGroup>
                    </ListItemButton>
                </List>

            </Drawer>
            <IconButton sx={{ marginLeft: 'auto', color: '#063960' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </React.Fragment>
    );
};

export default SideDrawer;