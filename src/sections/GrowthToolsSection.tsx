import { Box, Fade, Grid, Stack, Typography } from "@mui/material";
import growthTabs from "../data/GrowthTool";
import { useState } from "react";

export default function GrowthToolsSection() {
  const [showTab, setShowTab] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const changeTab = (index: number) => {
    setFadeIn(false);
    setTimeout(() => {
      setShowTab(index);
      setFadeIn(true);
    }, 200);
  };

  return (
    <Box sx={{ px: { xs: 2, sm: 6 }, py: { xs: 6, sm: 10 } }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", textAlign: "center", mb: 6 }}
      >
        Grow your business with a suite of tools built for you
      </Typography>

      <Grid container spacing={4}>
        {/* Left Tabs */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Stack>
            {growthTabs.map((tab, index) => (
              <Typography
                key={tab.id}
                component="button"
                onClick={() => changeTab(index)}
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  textAlign: "left",
                  padding: 5,
                  bgcolor: "common.white",
                  maxWidth: 300,
                  borderColor: "red",
                  borderLeft: index === showTab ? "10px solid " : "1px solid ",
                  borderLeftColor: index === showTab ? "red" : "grey",
                  display: "block",
                  width: "100%",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {tab.tabTitle}
              </Typography>
            ))}
          </Stack>
        </Grid>

        {/* Text Content */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Fade in={fadeIn} timeout={400}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 3,
                justifyContent: "center",
                // alignItems: "center",
                // alignContent: "center",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                {growthTabs[showTab].title}
              </Typography>
              <Typography variant="h6">
                {growthTabs[showTab].description}
              </Typography>
            </Box>
          </Fade>
        </Grid>

        {/* Image */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Fade in={fadeIn} timeout={400}>
            <Box
              sx={{
                display: "flex",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <img
                src={growthTabs[showTab].imgSrc}
                alt={growthTabs[showTab].title}
                style={{
                  maxHeight: "300px",
                  width: "100%",
                  maxWidth: "500px",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Fade>
        </Grid>
      </Grid>
    </Box>
  );
}
