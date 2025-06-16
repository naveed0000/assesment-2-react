import { Button, Stack } from "@mui/material";
import React from "react";

export default function ActionButtonsGroup() {
  return (
    <Stack
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 2, sm: 5 },
        justifyContent: { xs: "center" },
        alignContent: { xs: "center" },
        alignItems: { xs: "center" },
      }}
    >
      <Button
        variant="contained"
        sx={{
          width: { xs: "150px", sm: 150 },
          borderRadius: 5,
          bgcolor: "red",
        }}
      >
        Start selling{" "}
      </Button>
      <Button
        variant="outlined"
        sx={{
          color: "red",
          borderColor: "red",
          bgcolor: "common.white",
          width: { xs: "100%", sm: 220 },
          maxWidth: { xs: "220px" },
          borderRadius: 5,
        }}
      >
        Chat with consultant{" "}
      </Button>
    </Stack>
  );
}
