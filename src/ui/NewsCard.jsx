/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import { FaShareAlt, FaBookmark, FaHeart } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";
import { FaRegBookmark, FaRegHeart } from "react-icons/fa";
import { useDark } from "../context/DarkContext";

const NewsCard = ({ NewsImg, NewsTitle, NewsDescription }) => {
  const [isShared, setIsShared] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { isDark } = useDark();

  const CardContainer = styled.div`
    height: 70vh;
    width: 120vh;
    background-color: ${isDark ? "#171819" : "#ccc"};
    border-radius: 10px;
    box-shadow: -17px 26px 15px -3px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s ease;
    box-shadow: 48px 46px 22px -3px rgba(0, 0, 0, 0.1);
    &:hover {
      transform: scale(1.05);
    }
  `;
  const CardImage = styled.img`
    height: 50%;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  `;

  const CardTitle = styled.h2`
    font-size: 20px;
    font-family: monospace;
    color: ${isDark ? "white" : "black"};
  `;

  const CardDescription = styled.p`
    font-size: 16px;
    font-family: monospace;
    color: ${isDark ? "white" : "black"};
    padding: 10px 20px;
    text-align: center;
    overflow: hidden;
  `;

  const IconContainer = styled.span`
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    span {
      color: ${isDark ? "white" : "#3c009d"};
    }
  `;

  const MoreButton = styled.button`
    background-color: ${isDark ? "#3c009d" : "#777"};
    color: ${isDark ? "white" : "#3c009d"};
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    font-size: 16px;
    font-family: monospace;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 20px;
  `;
  const Styled_btnDiv = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Styled_News = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  return (
    <CardContainer>
      <CardImage src={NewsImg} alt="News Image" />
      <Styled_News>
        <CardTitle>{NewsTitle}</CardTitle>
        <CardDescription>{NewsDescription}</CardDescription>
      </Styled_News>

      <IconContainer>
        {isShared ? (
          <span>
            {" "}
            <FaShareAlt
              size={16}
              color="#476ac9"
              onClick={() => setIsShared(false)}
            />
          </span>
        ) : (
          <span>
            {" "}
            <GoShareAndroid size={16} onClick={() => setIsShared(true)} />
          </span>
        )}
        {isBookmarked ? (
          <span>
            {" "}
            <FaBookmark
              size={16}
              color="#47c95c"
              onClick={() => setIsBookmarked(false)}
            />
          </span>
        ) : (
          <span>
            {" "}
            <FaRegBookmark size={16} onClick={() => setIsBookmarked(true)} />
          </span>
        )}
        {isLiked ? (
          <span>
            <FaHeart
              size={16}
              color="#c94747"
              onClick={() => setIsLiked(false)}
            />
          </span>
        ) : (
          <span>
            <FaRegHeart size={16} onClick={() => setIsLiked(true)} />
          </span>
        )}
      </IconContainer>

      <Styled_btnDiv>
        <MoreButton>Show More</MoreButton>
      </Styled_btnDiv>
    </CardContainer>
  );
};

export default NewsCard;
