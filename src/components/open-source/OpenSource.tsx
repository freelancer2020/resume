import { Stack, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { Code } from "@mui/icons-material";

const OpenSourceContainer = styled(Paper)(() => ({
  width: "25rem",
  hegiht: "10rem",
  background: "linear-gradient(to right, #3f4c6b, #606c88)",
  borderRadius: "5px",
}));

const OpenSourceHeader = styled(Typography)(() => ({
  color: "#fff",
  "&:before": {
    position: "absolute",
    content: '""',
    left: "12%",
    bottom: "30",
    width: "80px",
    height: "14px",
    transform: " skew(-12deg) translateX(-50%)",
    background: "rgba(255, 240, 0, .5)",
    zIndex: "1",
    marginTop: "30px",
  },
}));

const Typo = styled(Typography)(() => ({
  color: "#fff",
  display: "flex",
  alignItems: "center",
  fontFamily: "Mono Semi",
}));

const OpenSource: React.FC = () => {
  return (
    <OpenSourceContainer elevation={6}>
      <Stack spacing={2} padding={2} sx={{ position: "relative" }}>
        <OpenSourceHeader
          variant="h4"
          sx={{ color: "#fff", fontFamily: "Mono Bold" }}
        >
          Open Source
        </OpenSourceHeader>
      </Stack>

      <Stack spacing={2} padding={2}>
        <Typo>
          {" "}
          <Code sx={{ marginRight: ".5rem" }} />
          React -{" "}
          <Typography
            variant="body1"
            sx={{
              marginLeft: ".2rem",
              fontFamily: "Mono Semi",
              color: "lightgray",
            }}
          >
            {" "}
            Meta open source
          </Typography>
        </Typo>
        <Typo>
          {" "}
          <Code sx={{ marginRight: ".5rem" }} />
          Shopify -{" "}
          <Typography
            variant="body1"
            sx={{
              marginLeft: ".2rem",
              fontFamily: "Mono Semi",
              color: "lightgray",
            }}
          >
            {" "}
            Shopify{" "}
          </Typography>
        </Typo>
      </Stack>
    </OpenSourceContainer>
  );
};

export default OpenSource;
