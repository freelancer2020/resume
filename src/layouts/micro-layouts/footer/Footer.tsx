import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

const Footercontainer = styled(Box)(() => ({
  display: "flex",
  bottom: 0,
  position: "absolute",
  boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
  boxSizing: "border-box",
  paddingBottom: "1rem"
}));

const Typo = styled(Typography)(() => ({
  color: "#888888",
  fontSize: "12px"
}));

const Footer: React.FC = () => {
  return (
    <Footercontainer>
      <Typo variant="body2">
        I hereby give consent for my personal data included in the application
        to be processed for the purposes of the recruitment process in
        accordance with Art. 6 paragraph 1 letter a of the Regulation of the
        European Parliament and of the Council (EU) 2016/679 of 27 April 2016 on
        the protection of natural persons with regard to the processing of
        personal data and on the free movement of such data, and repealing
        Directive 95/46/EC (General Data Protection Regulation).
      </Typo>
    </Footercontainer>
  );
};

export default Footer;
