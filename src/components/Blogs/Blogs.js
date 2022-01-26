import { Pagination } from '@mui/material';
import usePagination from '@mui/material/usePagination/usePagination';
import React, { useEffect, useState } from 'react';
import Blog from './Blog';


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    // blogss to be rendered on the UI
    const [displayBlogs, setDisplayBlogs] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:5000/blogs")
            .then(res => res.json())
            .then(data => {
                setBlogs(data.blogs);
            });
    }, [])
    const size = 10;
    useEffect(() => {
        fetch(`http://localhost:5000/blogs?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setBlogs(data.blogs);
                setDisplayBlogs(data.blogs);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
                
            });
    }, [page])
    
    const handleChange = (e,v) => {
        // [...Array(pageCount).keys()]
        // .map(number =>  setPage(number))
         setPage(v);
    };


    return (
        <div>
             <Pagination 
            sx={{ marginTop: '50px'}} 
            count={pageCount} 
            page={page}
            variant="outlined" 
            color="primary" 
            shape="rounded" 
            onChange={handleChange}
            /> 
            
            {
                displayBlogs.map(blog =>
                    <Blog
                        key={blog._id}
                        blog={blog}
                    >
                    </Blog>
                )
            }

            <Pagination 
            sx={{ marginTop: '50px'}} 
            count={pageCount} 
            page={page}
            variant="outlined" 
            color="primary" 
            shape="rounded" 
            onChange={handleChange}
            /> 
          

        </div>
    );
};

export default Blogs;