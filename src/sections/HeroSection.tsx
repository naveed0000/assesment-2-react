import { Box, Grid, Stack, Typography } from "@mui/material";
import companyInfo from "../data/companyInfo";
import ActionButtonsGroup from "./components/ActionButtonsGroup";
import earthImage from "../assets/earthImage.jpg";
export default function HeroSection() {
  return (
    <Grid
      container
      sx={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        bgcolor: "f7f7f7",
      }}
    >
      <Box
        component="img"
        src={earthImage}
        alt="Background"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "60%", md: "40%" },
          maxHeight: "80%",
          objectFit: "contain",
          opacity: 0.7,
          zIndex: -1,
        }}
      />
      <Grid size={{ xs: 12, sm: 8 }}>
        <Stack
          sx={{
            justifyContent: "center",
            height: "100%",
            gap: { xs: 1, sm: 8 },
          }}
        >
          <Stack sx={{ flexDirection: "column", gap: 2 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "light",
                textAlign: { xs: "center", sm: "start" },
              }}
            >
              Sell on 1mdm.com
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: { xs: "light", sm: "bold" },
                width: { xs: "100%", sm: "90%" },
                textAlign: { xs: "center", sm: "start" },
              }}
            >
              Reach millions of B2B buyers globally
            </Typography>
          </Stack>
          <ActionButtonsGroup />
        </Stack>
      </Grid>
      <Grid
        size={{ xs: 12, sm: 4 }}
        sx={{ gap: 5, justifyContent: "center", alignContent: "center" }}
      >
        <Stack sx={{ flexDirection: "column", gap: { xs: 5, sm: 5 } }}>
          {companyInfo.map((item) => {
            return (
              <Stack
                key={item.id}
                sx={{
                  flexDirection: "column",
                  gap: 1,
                  textAlign: { xs: "center", sm: "start" },
                  alignItems: { xs: "center", sm: "left" },
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: "500" }}>
                  {item.value}
                </Typography>
                <Typography variant="h6">{item.desc}</Typography>
              </Stack>
            );
          })}
        </Stack>
      </Grid>
    </Grid>
  );
}
