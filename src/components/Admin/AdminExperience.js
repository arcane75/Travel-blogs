import { Box, Container, createTheme, FormControl, InputLabel, MenuItem, Select, TextField, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import Menubar from '../Menubar/Menubar';
import UserLogin from '../UserLogin/UserLogin';
const AdminExperience = () => {
    const { user } = UserLogin();
    const theme = createTheme();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        data.email = user?.email;
        fetch("https://stark-waters-96883.herokuapp.com/addExperience", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('added successfully');
                reset();
            });
        // console.log(data);
    };
    return (
        <>
            <Menubar />
            <Container>
                <ThemeProvider theme={theme}>
                    <Box sx={{ marginTop: "30px" }} style={{ backgroundColor: "#eee" }}>

                        <Typography sx={{ textAlign: "center", fontWeight: "bold", fontSize: "30px" }}> Add Experience</Typography>

                        <form onSubmit={handleSubmit(onSubmit)} style={{ margin: "0px auto", textAlign: "center", width: "60%" }} >

                            <TextField
                                sx={{ mt: 1 }}
                                label="Avatar(C,R,P etc Random Letter)"
                                name="text"
                                fullWidth
                                {...register("avatar")}
                                placeholder="Avatar(C,R,P etc Random Letter)"

                            />

                            <TextField
                                sx={{ mt: 1 }}
                                label="Travel Title"
                                name="text"
                                fullWidth
                                {...register("title")}
                                placeholder="Title"

                            />

                            <TextField
                                sx={{ mt: 1 }}
                                label="Type like Octobor 02, 2018"
                                name="text"
                                fullWidth
                                {...register("date")}
                                placeholder="Type like Octobor 02, 2018"

                            />

                            <FormControl fullWidth>
                                <InputLabel
                                    required
                                    sx={{ mt: 1 }}
                                    id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    sx={{ mt: 1 }}
                                    required
                                    margin="normal"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="category"
                                    {...register("category")}
                                >
                                    <MenuItem value="Weekend Break">Weekend Break</MenuItem>
                                    <MenuItem value="Package Holiday">Package Holiday</MenuItem>
                                    <MenuItem value="Budget Traveler">Budget Traveler</MenuItem>
                                    <MenuItem value="Private Tour">Private Tour</MenuItem>
                                    <MenuItem value="Group Tour">Group Tour</MenuItem>
                                    <MenuItem value="Domestic Tourism">Domestic Tourism</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel
                                    required
                                    sx={{ mt: 1 }}
                                    id="demo-simple-select-label">Transportations</InputLabel>
                                <Select
                                    sx={{ mt: 1 }}
                                    required
                                    margin="normal"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="transportations"
                                    {...register("transportations")}
                                >
                                    <MenuItem value="Airways">Airways</MenuItem>
                                    <MenuItem value="Roadways">Roadways</MenuItem>
                                    <MenuItem value="Waterways">Waterways</MenuItem>

                                </Select>
                            </FormControl>

                            <TextField
                                sx={{ mt: 1 }}
                                label="Image Link"
                                name="image"
                                fullWidth
                                {...register("image")}
                                placeholder="Image Link"

                            />

                            <TextField
                                sx={{ mt: 1 }}
                                label="Travel description"
                                name="text"
                                fullWidth
                                {...register("description")}
                                placeholder="description"

                            />

                            <TextField
                                sx={{ mt: 1 }}
                                label="Travel expense"
                                name="number"
                                fullWidth
                                {...register("expense")}
                                placeholder="expense"

                            />


                            <TextField
                                sx={{ mt: 1 }}
                                label="Give rating (4.6)"
                                name="number"
                                fullWidth
                                {...register("rating")}
                                placeholder="rating"

                            />

                            <TextField
                                sx={{ mt: 1 }}
                                label="Travel location"
                                name="text"
                                fullWidth
                                {...register("location")}
                                placeholder="location"

                            />

                            <input type="submit" value="Include +" style={{marginTop:"10px", width:"70%", color:"Blue", backgroundColor:"gray", marginBottom:"20px", padding:"10px 0px"}} />


                        </form>

                    </Box>
                </ThemeProvider>
            </Container>
        </>
    );
};

export default AdminExperience;