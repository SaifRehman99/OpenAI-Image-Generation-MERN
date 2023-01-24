import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



const Loader:React.FC<any> = ():any => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh'}}>
      <CircularProgress />
    </Box>
);

export default Loader;
