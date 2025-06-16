import { Grid, Typography } from "@mui/material";
import ActionButtonsGroup from "./components/ActionButtonsGroup";

export default function Banner({
  actionButton,
  title,
  description,
}: {
  actionButton: boolean;
  title: string;
  description: string;
}) {
  return (
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
  );
}
