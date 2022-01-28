import React from 'react';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
const Blog = (props) => {
    const { _id, avatar, title, image, date, description, status } = props.blog || {};


    return (
        <div>

            <Grid container sx={{ marginTop: '15px', borderRadius: '10px', boxShadow: '0 4px 21px -12px rgba(0, 0, 0, 0.66)', backgroundColor: '#18151f23' }}>
                <Grid item xs={12} md={8} sx={{ paddingRight: '0px' }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                {avatar}
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={title}
                        subheader={date}
                    />

                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {description.slice(0 - 200)}
                        </Typography>
                    </CardContent>

                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <Link to={`/detailsblog/${_id}`} style={{ textDecoration: 'none' }}>
                            <Button sx={{ fontSize: '15px', color: 'red' }}>Explore Blog</Button>
                        </Link>
                    </CardActions>
                </Grid>
                <Grid item xs={12} md={4} >
                    <CardMedia
                        sx={{ margin: '10px 0px 10px 0px' }}
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

export default Blog;