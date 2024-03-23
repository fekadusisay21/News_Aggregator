/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDark } from "../context/DarkContext";

export default function NewsCard({ NewsImg, NewsTitle, NewsDescription }) {
  const [isShared, setIsShared] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { isDark } = useDark();

  const Styled_card = styled(CardContent)`
    background-color: ${isDark ? "#00172b" : "#ffffff"};
  `;
  const Styled_Topography = styled(Typography)`
    color: ${isDark ? "#ffffff" : "#000"};
    margin-bottom: 10px;
  `;
  const IconContainer = styled.span`
    background-color: ${isDark ? "#00172b" : "#ffffff"};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
    height: 7vh;
  `;
  const Styled_share = styled(ShareIcon)`
    color: ${isShared ? "#0044ff" : "#9b9b9b"};
  `;
  const Styled_bookmark = styled(BookmarkIcon)`
    color: ${isBookmarked ? "#00ff2f" : "#9b9b9b"};
  `;
  const Styled_favorite = styled(FavoriteIcon)`
    color: ${isFavorite ? "#ff0000" : "#9b9b9b"};
  `;
  return (
    <Card sx={{ maxWidth: 1000, borderRadius: 3 }}>
      <CardMedia sx={{ height: 400 }} image={NewsImg} title={NewsTitle} />
      <Styled_card>
        <Styled_Topography
          gutterBottom
          variant="h5"
          component="div"
          align="center"
        >
          {NewsTitle}
        </Styled_Topography>
        <Styled_Topography variant="body2" align="center">
          {NewsDescription}
        </Styled_Topography>
      </Styled_card>
      <IconContainer>
        {
          <Styled_share
            onClick={
              isShared ? () => setIsShared(false) : () => setIsShared(true)
            }
          />
        }
        {
          <Styled_bookmark
            onClick={
              isBookmarked
                ? () => setIsBookmarked(false)
                : () => setIsBookmarked(true)
            }
          />
        }
        {
          <Styled_favorite
            onClick={
              isFavorite
                ? () => setIsFavorite(false)
                : () => setIsFavorite(true)
            }
          />
        }
      </IconContainer>
    </Card>
  );
}
