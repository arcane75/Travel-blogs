import { Avatar, Button, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { red } from '@mui/material/colors';

const EachBlog = (props) => {
    const {_id, avatar, title, image,date, description} = props.blog || {};
    return (
        <div>
        <Grid container sx={{ marginTop: '15px',borderRadius:'10px',boxShadow:'0 4px 21px -12px rgba(0, 0, 0, 0.66)', backgroundColor: '#18151f23' }}>
           <Grid item xs={12} md={8} sx={{paddingRight:'0px'}}>
               <CardHeader
                   avatar={
                       <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                           {avatar}
                       </Avatar>
                   }
                   action={
                       <IconButton aria-label="settings">
                          
                       </IconButton>
                   }
                   title={title}
                   subheader={date}
               />

               <CardContent>
                   <Typography variant="body2" color="text.secondary">
                      {description.slice(0-200)}
                   </Typography>
               </CardContent>

               <CardActions disableSpacing>
                   <IconButton aria-label="add to favorites">
                      
                   </IconButton>
                   <IconButton aria-label="share">
                       
                   </IconButton>
                   <Link to={`/detailsblog/${_id}`} style={{textDecoration:'none'}}>
                   <Button sx={{fontSize:'15px', color:'red'}}>Explore Blog</Button>
                   </Link>
               </CardActions>
           </Grid>
           <Grid  item xs={12} md={4} >
               <CardMedia
                   sx={{margin:'10px 0px 10px 0px'}}
                   component="img"
                   height="220px"
                   image={image}
                   alt="Paella dish"
                   
               />
           </Grid>

       </Grid>
   </div>
    );
};

export default EachBlog;