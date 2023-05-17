import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Link from "@mui/joy/Link";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link component={RouterLink} to="/" replace>
            <Button sx={{ color: "white" }}>home</Button>
          </Link>
          <Link component={RouterLink} to="/search" replace>
            <Button sx={{ color: "white" }}>search</Button>
          </Link>
          <Link component={RouterLink} to="/houses" replace>
            <Button sx={{ color: "white" }}>houses</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
