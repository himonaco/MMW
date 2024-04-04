import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            My App
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Your other components and content here */}
    </div>
  );
}

export default App;
