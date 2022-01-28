import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageBlogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  console.log('allblogs', allBlogs);
  const [control, setConrol] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setAllBlogs(data.blogs));
  }, [control]);

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      fetch(`http://localhost:5000/deleteBlogs/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setConrol(!control);
          } else {
            setConrol(false);
          }
        });
    }
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Transportations</TableCell>
            <TableCell align="right">Expense</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allBlogs?.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.transportations}</TableCell>
              <TableCell align="right">{row.expense}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">
                <Button
                  onClick={() => handleDelete(row._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ManageBlogs;