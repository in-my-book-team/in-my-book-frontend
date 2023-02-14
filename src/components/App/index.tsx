import Button from '@mui/material/Button';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';

const App = () => {
  return (
    <>
      <h1>Start Project</h1>
      <Button variant="contained">Create account</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined">View</Button>
      <Button variant="outlined" startIcon={<SearchIcon />}>
        Search
      </Button>
      <Button variant="outlined" startIcon={<EditIcon />}>
        Edit
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="outlined" startIcon={<AddIcon />}>
        Add
      </Button>
      <Button variant="outlined" startIcon={<CloseIcon />}>
        Decline
      </Button>
    </>
  );
};

export default App;
