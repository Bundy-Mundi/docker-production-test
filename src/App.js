// eslint-disable-next-line
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Paper } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

function App() {
  const [username] = useState("Ananymous");
  return (
    <div className="App">
      <header className="">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            Find Out Your Followers
          </Typography>
        </Toolbar>
      </AppBar>
      </header>
      <main>
        <section style={{height:"100vh"}}>
          <Paper style={{background:"#2f3640", height:"6rem", width:"30rem", margin:"2rem", padding:"1rem"}} variant="outlined" elevation={4} >
            <Typography style={{color:"#f5f6fa"}}>Hello {username}! </Typography>
            <Typography style={{color:"#f5f6fa"}}>Support 💝 Us! </Typography>
          </Paper>
        </section>
      </main>
    </div>
  );
}

export default App;
