import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logoRed from "../assets/logo-red.png";
export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="default" elevation={0}>
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          py: 1,
          px: 2,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "start", sm: "space-between" },
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: "common.black", opacity: 0.4, fontSize: 20 }}
        >
          World's Largest Medical Equipment Market Place
        </Typography>
        <Box
          sx={{
            display: { xs: "flex", sm: "block" },
            gap: { sm: 2 },
            // justifyContent: { xs: "start", sm: "center" },
          }}
        >
          <Button
            color="inherit"
            size="medium"
            sx={{
              color: "common.black",
              ":hover": {
                color: "red",
              },
            }}
          >
            My Account
          </Button>
          <Button color="inherit" size="medium" sx={{ color: "common.black" }}>
            Contact Us
          </Button>
        </Box>
      </Box>

      {/* Main Navbar */}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo (Left-aligned) */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              minWidth: 100,
              maxWidth: 180,
            }}
          >
            <Link href="#">
              <img
                src={logoRed}
                alt="logo-white"
                style={{ width: "100%", height: "100%", marginBottom: 24 }}
              />
            </Link>
          </Typography>

          {/* Desktop Menu (Right-aligned) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              alignItems: "center",
              justifyContent: "flex-end",
              flexGrow: 1,
              ml: "auto",
            }}
          >
            <Button
              color="inherit"
              sx={{
                color: "common.black",
                ":hover": {
                  color: "red",
                },
                opacity: 0.5,
              }}
            >
              About Us
            </Button>
            <Button
              color="inherit"
              sx={{
                color: "common.black",
                ":hover": {
                  color: "red",
                },
                opacity: 0.5,
              }}
            >
              Our Story
            </Button>
            <Button
              color="inherit"
              sx={{
                color: "common.black",
                ":hover": {
                  color: "red",
                },
                opacity: 0.5,
              }}
            >
              Sell on IMDM
            </Button>
            <Button
              color="inherit"
              sx={{
                color: "common.black",
                ":hover": {
                  color: "red",
                },
                opacity: 0.5,
              }}
            >
              Pricing
            </Button>
          </Box>

          {/* Mobile Menu (Hamburger) */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              justifyContent: "flex-end",
              flexGrow: 1,
              width: "100%",
            }}
          >
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={handleMenuOpen}
              sx={{
                p: 1,
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <MenuItem onClick={handleMenuClose}>About Us</MenuItem>
              <MenuItem onClick={handleMenuClose}>Our Story</MenuItem>
              <MenuItem onClick={handleMenuClose}>Sell on IMDM</MenuItem>
              <MenuItem onClick={handleMenuClose}>Pricing</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
