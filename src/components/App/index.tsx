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
      <Button variant="contained" color="secondary">
        Create account{' '}
      </Button>
      <Button variant="outlined" color="secondary">
        Outlined
      </Button>
      <Button variant="outlined" color="secondary">
        View
      </Button>
      <Button variant="outlined" startIcon={<SearchIcon />} color="secondary">
        Search
      </Button>
      <Button variant="outlined" startIcon={<EditIcon />} color="secondary">
        Edit
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />} color="secondary">
        Delete
      </Button>
      <Button variant="outlined" startIcon={<AddIcon />} color="secondary">
        Add
      </Button>
      <Button variant="outlined" startIcon={<CloseIcon />} color="secondary">
        Decline
      </Button>
    </>
  );
};

export default App;
