import { Checkbox, Container, FormControlLabel, FormGroup, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import SideDrawer from './SideDrawer';

const Sidebar = () => {
    const [checked, setChecked] = useState(false);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <>
            {
                isMatch ?
                    (
                        <>
                            <SideDrawer />
                        </>
                    ) :
                    (
                        <Container sx={{ marginLeft: '30px' }}>

                            {/* ----------------------------------------------------------------
                            Category 
-------------------------------------------------------------*/}
                            <Typography sx={{ fontWeight: 'bold' }}>Category</Typography>
                            <FormGroup >
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />}
                                    label="Weekend Break"
                                />

                                <FormControlLabel
                                    control={<Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />}
                                    label="Package Holiday"
                                />

                                <FormControlLabel
                                    control={<Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />}
                                    label="Budget Traveler"
                                />

                                <FormControlLabel
                                    control={<Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />}
                                    label="Private Tour"
                                />

                                <FormControlLabel
                                    control={<Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />}
                                    label="Group Tour"
                                />

                                <FormControlLabel
                                    control={<Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />}
                                    label="Domestic Tourism"
                                />
                            </FormGroup>


                            {/* ----------------------------------------------------------------
                            Rating 
-------------------------------------------------------------*/}
                            <Typography sx={{ fontWeight: 'bold' }}>Ratings</Typography>
                            <FormGroup >
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />}
                                    label="5 Stars"
                                />

                                <FormControlLabel
                                    control={<Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />}
                                    label="4 Stars"
                                />

                                <FormControlLabel
                                    control={<Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />}
                                    label="3 Stars"
                                />

                                <FormControlLabel
                                    control={<Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />}
                                    label="2 Stars"
                                />

                                <FormControlLabel
                                    control={<Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />}
                                    label="1 Star"
                                />
                            </FormGroup>

                            {/* ----------------------------------------------------------------
                            Transportation
-------------------------------------------------------------*/}
                            <Typography sx={{ fontWeight: 'bold' }}>Transportations</Typography>
                            <FormGroup >
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />}
                                    label="Airways"
                                />

                                <FormControlLabel
                                    control={<Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />}
                                    label="Roadways"
                                />

                                <FormControlLabel
                                    control={<Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />}
                                    label="Waterways"
                                />


                            </FormGroup>
                        </Container>
                    )
            }

        </>
    );
};

export default Sidebar;