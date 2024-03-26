/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import { Delete } from "@mui/icons-material";
import { useDark } from "../context/DarkContext";
import { styled as Styled } from "@mui/material";

function Saved({ item }) {
  const { isDark } = useDark();

  const Styled_CardHeader = Styled(CardHeader)`
      color: ${isDark ? "#ccc" : "#000"};
      .MuiCardHeader-subheader {
        color: ${isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.54)"};
      }
    `;

  const Styled_Card = Styled(Card)`
      color: ${isDark ? "#ccc" : "#000"};
      background-color: ${isDark ? "#171819" : "#ccc"};
    `;

  const Styled_CardContent = Styled(CardContent)`
      color: ${isDark ? "#ccc" : "#000"};
      background-color: ${isDark ? "#171819" : "#ccc"};
    `;

  return (
    <Styled_Card sx={{ maxWidth: 345 }}>
      <Styled_CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor: red[500],
              width: 50,
              height: 50,
              fontSize: "1rem",
              textAlign: "center",
            }}
            aria-label="recipe"
          >
            {item.source_name}
          </Avatar>
        }
        title={item.source_name}
        subheader={item.published_at}
      />
      <CardMedia
        component="img"
        height="194"
        image={item.url_to_image}
        alt={item.title}
      />
      <Styled_CardContent>
        <Typography variant="body2" color={isDark ? "white" : "black"}>
          {item.description}
        </Typography>
      </Styled_CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Delete style={{ color: isDark ? "white" : "black" }} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon style={{ color: isDark ? "white" : "black" }} />
        </IconButton>
      </CardActions>
    </Styled_Card>
  );
}

export default Saved;
