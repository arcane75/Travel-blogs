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


                <Typography sx={{ margin: '5px 15px', fontWeight:'bold' }}>Category</Typography>
                <List sx={{backgroundColor:"#eee", color:"red"}}>
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

                <Typography sx={{ margin: '5px 15px' , fontWeight:'bold'}}>Ratings</Typography>
                <List sx={{backgroundColor:"#eee", color:"red"}}>
                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <FormGroup >
                            <FormControlLabel
                                control={<Checkbox
                                    // checked={checked}
                                    // onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />}
                                label="5 Stars"
                            />

                            <FormControlLabel
                                control={<Checkbox
                                    // checked={checked}
                                    // onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />}
                                label="4 Stars"
                            />

                            <FormControlLabel
                                control={<Checkbox
                                    // checked={checked}
                                    // onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />}
                                label="3 Stars"
                            />

                            <FormControlLabel
                                control={<Checkbox
                                    // checked={checked}
                                    // onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />}
                                label="2 Stars"
                            />

                            <FormControlLabel
                                control={<Checkbox
                                    // checked={checked}
                                    // onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />}
                                label="1 Star"
                            />

                        </FormGroup>
                    </ListItemButton>
                </List>

                <Typography sx={{ margin: '5px 15px' , fontWeight:'bold'}}>Transportations

                </Typography>
                <List sx={{backgroundColor:"#eee", color:"red"}}>
                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <FormGroup >
                            <FormControlLabel
                                control={<Checkbox
                                    // checked={checked}
                                    // onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />}
                                label="Airways"
                            />

                            <FormControlLabel
                                control={<Checkbox
                                    // checked={checked}
                                    // onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />}
                                label="Roadways"
                            />

                            <FormControlLabel
                                control={<Checkbox
                                    // checked={checked}
                                    // onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />}
                                label="Waterways"
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