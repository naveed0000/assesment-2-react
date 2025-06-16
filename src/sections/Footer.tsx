import { Box, Grid, Typography } from "@mui/material";
import logoWhite from "../assets/logo-white.png";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "common.black",
          color: "common.white",
          py: 8,
          px: { xs: 2, md: 8 },
        }}
      >
        <Grid container spacing={4}>
          {/* Logo & Description */}
          <Grid size={{ xs: 6, md: 4 }}>
            <Box sx={{ minWidth: 100, maxWidth: 180 }}>
              <img
                src={logoWhite}
                alt="logo-white"
                style={{ width: "100%", height: "100%", marginBottom: 24 }}
              />
              <Typography sx={{ mt: 2, fontSize: 22 }}>
                One Medical Devices
              </Typography>
              <Typography sx={{ fontSize: 18 }}>Market Place</Typography>
            </Box>
          </Grid>
          {/* Platform */}
          <Grid size={{ xs: 6, sm: 2, md: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Platform
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography>Sell on 1MDM</Typography>
              <Typography>Pricing</Typography>
              <Typography>About Us</Typography>
              <Typography>Our Story</Typography>
              <Typography>Careers</Typography>
              <Typography>Blog</Typography>
              <Typography>Brands</Typography>
            </Box>
          </Grid>
          {/* Press Room & Policies */}
          <Grid size={{ xs: 6, sm: 2, md: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Press Room
            </Typography>
            <Typography sx={{ mb: 3 }}>Images & B-roll</Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Policies
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography>Terms of Service</Typography>
              <Typography>Privacy Policy</Typography>
              <Typography>Delivery Information</Typography>
            </Box>
          </Grid>
          {/* Reach Us */}
          <Grid size={{ xs: 6, sm: 2, md: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Reach Us
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography>Corporate Information</Typography>
              <Typography>Contact Us</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Typography sx={{ textAlign: "center", paddingBlock: 2 }}>
        © 2025 1MDM ⚡ by SuperLabs
      </Typography>
    </>
  );
}
