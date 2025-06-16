import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

export default function EmpowerSection() {
  const theme = useTheme();

  // Media queries for breakpoints
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));

  // Determine height based on breakpoint
  let height = "400px";
  if (isXs) height = "200px";
  else if (isSm) height = "300px";
  else if (isMd) height = "400px";
  return (
    <Grid
      container
      sx={{ minHeight: "100vh", width: "100%" }}
      rowSpacing={4}
      columnSpacing={5}
    >
      <Grid size={12} sx={{ width: "70%", marginInline: "auto" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          1mdm.com is a leading ecommerce platform that helps SMEs go global
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }} sx={{ height }}>
        <iframe
          src="https://www.youtube.com/embed/TN7iJyc5Uks"
          title="YouTube video"
          style={{
            width: "100%",
            height,
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            justifyItems: "start",
            gap: 5,
          }}
        >
          <Typography variant="h6" textAlign={"start"}>
            Connect with millions of business buyers from around the world.
          </Typography>
          <Typography variant="h6">
            Get the tools and know-how to build a successful ecommerce presence
            for your business.
          </Typography>
          <Typography variant="h6">
            Pocket more from each sale, with take rates as low as 0% in some
            cases.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
