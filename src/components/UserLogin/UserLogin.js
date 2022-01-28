import { Alert, CircularProgress } from "@mui/material";
import { useState, React } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Menubar from "../Menubar/Menubar";

const UserLogin = () => {

    const [loginData, setLoginData] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState('');

    const { user,
        authError,
        signInUsingGoogle,
        isLoading,
        registerNewUser,
        processLogin } = useAuth();

    const location = useLocation();
    let navigate = useNavigate();

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleGoogleSignIn = () => {
        signInUsingGoogle(navigate, location)
    }
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        registerNewUser(loginData.email, loginData.password, loginData.name, navigate);
        processLogin(loginData.email, loginData.password, navigate, location);
        e.preventDefault();
    }
    const theme = createTheme();

    return (
        <>
            <Menubar />
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url(https://source.unsplash.com/random)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                {isLogin ? 'Login' : 'Register'}
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleLoginSubmit} sx={{ mt: 1 }}>
                                {
                                    isLogin ?
                                        <>
                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                autoComplete="email"
                                                autoFocus
                                                onChange={handleOnChange}
                                            />
                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                autoComplete="current-password"
                                                onChange={handleOnChange}
                                            />

                                            {isLoading && <CircularProgress />}
                                            {user?.email && <Alert severity="success">Login successfully!</Alert>}
                                            {authError && <Alert severity="error">{authError}</Alert>}
                                        </>
                                        :
                                        <>
                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="name"
                                                label="Your Name"
                                                name="name"
                                                autoComplete="name"
                                                autoFocus
                                                onBlur={handleOnBlur}
                                            />

                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                autoComplete="email"
                                                autoFocus
                                                onBlur={handleOnBlur}
                                            />
                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                autoComplete="current-password"
                                                onBlur={handleOnBlur}
                                            />
                                            {isLoading && <CircularProgress />}
                                            {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                                            {authError && <Alert severity="error">{authError}</Alert>}
                                        </>
                                }

                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    onChange={toggleLogin}
                                    label="Already Registered?"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    {isLogin ? 'Login' : 'Register'}
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>

                                        <Button onClick={handleGoogleSignIn} ><i className="fab fa-google"> Login with Google</i> 
                                        </Button>

                                    </Grid>
                                </Grid>

                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    );
};

export default UserLogin;