import { useContext } from 'react';

import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles'

//Components
import Form from './Form';
import Note from "./Note";
import EmptyNotes from './EmptyNotes';

import { DataContext } from "../context/DataProvider";


const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes = () => {

  const { notes} = useContext(DataContext);


  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Form />
        {
          notes.length > 0 ?
            <Grid container style={{ marginTop: 16 }}>
              {
                notes.map((note, index) =>
                  <Grid item key={index}>
                    <Note note={note} />
                  </Grid>
                )
              }
            </Grid>
        : <EmptyNotes />
        }
      </Box>
    </Box>
  )
}

export default Notes;