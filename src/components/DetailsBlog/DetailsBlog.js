import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, Button, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { red } from '@mui/material/colors';

const DetailsBlog = () => {
    const { blogId } = useParams();
    const [detailBlog, setdetailBlog] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${blogId}`)
            .then(res => res.json())
            .then(data => setdetailBlog(data));
    }, [])
    return (
        
        <Grid container sx={{ marginTop: '15px',borderRadius:'10px',boxShadow:'0 4px 21px -12px rgba(0, 0, 0, 0.66)', backgroundColor: '#18151f23' }}>
           <Grid item xs={12} md={8} sx={{paddingRight:'0px'}}>
               <CardHeader
                   avatar={
                       <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                           {detailBlog.avatar}
                       </Avatar>
                   }
                   action={
                       <IconButton aria-label="settings">
                          
                       </IconButton>
                   }
                   title={detailBlog.title}
                   subheader={detailBlog.date}
               />

               <CardContent>
                   <Typography variant="body2" color="text.secondary">
                      {detailBlog.description}
                   </Typography>
               </CardContent>

               <CardActions disableSpacing>
                   <IconButton aria-label="add to favorites">
                      
                   </IconButton>
                   <IconButton aria-label="share">
                       
                   </IconButton>
                  
               </CardActions>
           </Grid>
           <Grid  item xs={12} md={4} >
               <CardMedia
                   sx={{margin:'10px 0px 10px 0px'}}
                   component="img"
                   height="220px"
                   image={detailBlog.image}
                   alt="Paella dish"
                   
               />
           </Grid>

       </Grid>
   
    );
};

export default DetailsBlog;