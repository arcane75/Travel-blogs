import React, { useState } from 'react';
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import MenuDrawer from './MenuDrawer';
const pages = ['About', 'Contact'];
const Menubar = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <React.Fragment>
            <AppBar sx={{ background: "#063960" }}>
                <Toolbar>
                    <Typography>CSS</Typography>

                    {
                        isMatch ?
                            (
                                <>
                                    {/* <Typography>CSS</Typography> */}
                                    <MenuDrawer />
                                </>
                            ) :
                            (
                                <>
                                    <Tabs sx={{ marginLeft: 'auto' }} textColor='inherit' value={value} onChange={(e, value) => setValue(value)} indicatorColor='secondary'>

                                        {
                                            pages.map((page, index) => <Tab key={index} label={page} />)
                                        }

                                    </Tabs>

                                    <Button variant="secondary" color="error"><LoginIcon />Login</Button>
                                </>
                            )
                    }

                </Toolbar>

            </AppBar>
        </React.Fragment>
    );
};

export default Menubar;