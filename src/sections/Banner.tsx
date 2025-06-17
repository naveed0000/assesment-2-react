import { Box, Grid, Typography } from "@mui/material";
import ActionButtonsGroup from "./components/ActionButtonsGroup";

export default function Banner({
  actionButton,
  title,
  description,
  withBackgroundImage,
}: {
  actionButton: boolean;
  title: string;
  description: string;
  withBackgroundImage?: string;
}) {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "50vh",
        overflow: "hidden",
      }}
    >
      {withBackgroundImage && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${withBackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
            },
          }}
        />
      )}
      <Grid
        container
        sx={{
          minHeight: "50vh",
          bgcolor: "red",
          justifyContent: "censter",
          alignContent: "center",
        }}
        rowSpacing={3}
        size={{ xs: 12, sm: 8 }}
      >
        <Grid size={12}>
          <Typography
            variant="h3"
            sx={{
              typography: { xs: "h5", md: "h4" },
              textAlign: "center",
              marginInline: "auto",
              color: "common.white",
              fontWeight: "medium",
              width: "80%",
              // paddingInline: 20,
              // paddingBlock: 4,
            }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              color: "common.white",
              width: "80%",
              marginInline: "auto",
            }}
          >
            {description}
          </Typography>
        </Grid>

        {actionButton && (
          <Grid size={12}>
            <ActionButtonsGroup />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
