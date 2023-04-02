import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from "@mui/material";

interface SKillsCardProps {
  cardName: string;
  cardMedia: string;
  cardContent: string;
}

const SkillsCard: React.FC<SKillsCardProps> = (props) => {
  return (
    <Card sx={{ width: "10rem", height: "8rem" }}>
      <CardActionArea>
        <CardMedia
        sx={{height: "5rem"}}
          component="img"
          height="140"
          image={props.cardMedia}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.cardName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.cardContent}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SkillsCard;
