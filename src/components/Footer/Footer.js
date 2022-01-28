import { Typography } from '@mui/material';
import React from 'react';

import "./Footer.css";
// import logo from '../Menubar/Travel.png';
const Footer = () => {
  return (

    <Typography sx={{ mt: 3, textAlign: 'center', color: 'white', padding: '15px 0' }} style={{ backgroundColor: ' rgba(0, 0, 0, 0.8)' }}>
      © 2022 Copyright: Travel
    </Typography>


  );
};

export default Footer;