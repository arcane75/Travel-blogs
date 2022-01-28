import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageBlogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  console.log('allblogs', allBlogs);
  const [status, setStatus] = useState('');
  const [control, setConrol] = useState(false);

  useEffect(() => {
    fetch("https://stark-waters-96883.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setAllBlogs(data.blogs));
  }, [control]);

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      fetch(`https://stark-waters-96883.herokuapp.com/deleteBlogs/${id}`, {
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

  const handleStatus = (id) => {
    const newStatus = { status: 'Approved' };
    setStatus(newStatus);
    fetch(`https://stark-waters-96883.herokuapp.com/updateStatus/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(status)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          alert('Updated Successfully');
          setConrol(!control);
        }
      })
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell sx={{ color: "red", fontWeight: "bold" }}>Title</TableCell>
            <TableCell sx={{ color: "red", fontWeight: "bold" }} align="center">Category</TableCell>
            <TableCell sx={{ color: "red", fontWeight: "bold" }} align="right">Transportations</TableCell>
            <TableCell sx={{ color: "red", fontWeight: "bold" }} align="right">expense</TableCell>
            <TableCell sx={{ color: "red", fontWeight: "bold" }} align="right">Status</TableCell>
            <TableCell sx={{ color: "red", fontWeight: "bold" }} align="right">Action</TableCell>
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
              <TableCell align="right">
                <Button
                  onClick={() => handleStatus(row._id)}
                >
                  {row.status}
                </Button>
              </TableCell>
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