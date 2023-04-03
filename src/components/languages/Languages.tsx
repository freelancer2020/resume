import { Stack, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { Language } from "@mui/icons-material";

const LanguagesContainer = styled(Paper)(() => ({
  width: "25rem",
  hegiht: "10rem",
  background: "linear-gradient(to right, #3f4c6b, #606c88)",
  borderRadius: "5px",
}));

const LanguagesHeader = styled(Typography)(() => ({
  color: "#fff",
  "&:before": {
    content: '""',
    position: "absolute",
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
}));

const Languages: React.FC = () => {
  return (
    <LanguagesContainer elevation={6}>
      <Stack spacing={2} padding={2} sx={{ position: "relative" }}>
        <LanguagesHeader variant="h4" sx={{ color: "#fff" }}>
          Languages
        </LanguagesHeader>
      </Stack>

      <Stack spacing={2} padding={2}>
        <Typo variant="body2">
          {" "}
          <Language sx={{ marginRight: ".5rem" }} /> Arabic - Native
        </Typo>
        <Typo variant="body2">
          <Language sx={{ marginRight: ".5rem" }} /> English - C2
        </Typo>
        <Typo variant="body2">
          <Language sx={{ marginRight: ".5rem" }} />
          Polish - B1
        </Typo>
      </Stack>
    </LanguagesContainer>
  );
};

export default Languages;
