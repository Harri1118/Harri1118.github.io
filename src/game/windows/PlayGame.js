import React from 'react';
import { Typography, Box } from '@mui/material';
import CanvasComponent from './engine/Canvas'; // Match the export name

const PlayGame = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography 
        variant="h3" 
        component="h2" 
        sx={{ fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4' }}
      >
        Title
      </Typography>
      <CanvasComponent width={900} height={800} /> {/* Consistent naming */}
    </Box>
  );
};

export default PlayGame;
