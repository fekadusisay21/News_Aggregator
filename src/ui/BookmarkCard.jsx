/* eslint-disable react/prop-types */
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import CardMedia from "@mui/material/CardMedia";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useDark } from "../context/DarkContext";
import { Card, CardContent, CardHeader, styled as Styled } from "@mui/material";

function BookmarkCard({ item, handleBookmarkClick, isBookmarked }) {
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
    <Styled_Card sx={{ maxWidth: 345, background: "dark" }}>
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
        action={
          <IconButton aria-label="settings" onClick={handleBookmarkClick}>
            <BookmarkIcon
              style={{ color: isBookmarked ? red[500] : "white" }}
            />
          </IconButton>
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
        <Typography variant="body2">{item.description}</Typography>
      </Styled_CardContent>
    </Styled_Card>
  );
}

export default BookmarkCard;
