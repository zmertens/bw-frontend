import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";

export interface LoadingProgressProps {
  open: boolean;
  status?: string;
  // 0-100; when undefined the spinner is indeterminate
  progress?: number;
}

const LoadingProgressComponent = ({
  open,
  status,
  progress,
}: LoadingProgressProps) => {
  const determinate = typeof progress === "number";
  return (
    <Backdrop
      open={open}
      sx={{ zIndex: (theme) => theme.zIndex.modal + 1, color: "#fff", flexDirection: "column", gap: 2 }}
      data-testid="loading-progress"
    >
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          color="inherit"
          size={64}
          variant={determinate ? "determinate" : "indeterminate"}
          value={determinate ? progress : undefined}
        />
        {determinate && (
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="caption">{`${Math.round(progress)}%`}</Typography>
          </Box>
        )}
      </Box>
      <Typography variant="body1">{status || "Loading..."}</Typography>
    </Backdrop>
  );
};

export default LoadingProgressComponent;
