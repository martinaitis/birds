import * as React from "react";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Paukščiai
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
