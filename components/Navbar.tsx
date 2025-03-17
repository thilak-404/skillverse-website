import { AppBar, Toolbar, Button } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "center" }}>
        <Button color="inherit">
          <Link href="/">Home</Link>
        </Button>
        <Button color="inherit">
          <Link href="/login">Login</Link>
        </Button>
        <Button color="inherit">
          <Link href="/signup">Signup</Link>
        </Button>
        <Button color="inherit">
          <Link href="/dashboard">Dashboard</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
