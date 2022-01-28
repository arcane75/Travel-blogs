import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, Button, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { red } from '@mui/material/colors';
import Menubar from '../Menubar/Menubar';
import Rating from 'react-rating';

const DetailsBlog = () => {
    const { blogId } = useParams();
    const [detailBlog, setdetailBlog] = useState({});

    useEffect(() => {
        fetch(`https://stark-waters-96883.herokuapp.com/blogs/${blogId}`)
            .then(res => res.json())
            .then(data => setdetailBlog(data));
    }, [])
    return (
        <>
            <Menubar />
            <Container>
                <Grid container sx={{ margin: '55px 0px', borderRadius: '10px', boxShadow: '0 4px 21px -12px rgba(0, 0, 0, 0.66)', backgroundColor: '#18151f23' }}>

                    <Grid item xs={12} md={12} >
                        <CardMedia
                            sx={{ margin: '10px 0px 10px 0px' }}
                            component="img"
                            height="400px"
                            image={detailBlog.image}
                            alt="Image"

                        />
                    </Grid>

                    <Grid item xs={12} md={12} sx={{ paddingRight: '0px' }}>
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

                        <Typography sx={{ml:2}} variant="body2" color="text.secondary">
                           Location: {detailBlog.location}
                        </Typography>

                        <Typography sx={{ml:2}} variant="body2" color="text.secondary">
                           Travel Expense: ${detailBlog.expense}
                        </Typography>

                        <Typography sx={{ml:2}} variant="body2" color="text.secondary">
                           Travel Transportation: {detailBlog.transportations}
                        </Typography>

                        <Typography sx={{ml:2}} variant="body2" color="text.secondary">
                           Travel Category: {detailBlog.category}
                        </Typography>

                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">

                            </IconButton>
                            <IconButton aria-label="share">

                            </IconButton>

                        </CardActions>
                        <Rating
                            style={{ color: "red", marginLeft: "20px" }}
                            initialRating={detailBlog.rating}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color text-warning"
                            readonly>
                        </Rating>
                    </Grid>

                </Grid>
            </Container>
        </>
    );
};

export default DetailsBlog;