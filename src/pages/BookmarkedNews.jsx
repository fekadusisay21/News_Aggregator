import { useState } from "react";
import Spinner from "../ui/Spinner";
import styled from "styled-components";
import { getNews } from "../services/api";
import { useQuery } from "@tanstack/react-query";
import BookmarkCard from "../ui/BookmarkCard";

function Bookmark() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const Styled_Container = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 20px;
  `;

  const handleBookmarkClick = () => {
    setIsBookmarked((prev) => !prev);
  };

  const { isLoading, data } = useQuery({
    queryKey: [],
    queryFn: getNews,
  });

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Styled_Container>
          {data?.map((item, index) => (
            <BookmarkCard
              key={index}
              item={item}
              isBookmarked={isBookmarked}
              handleBookmarkClick={handleBookmarkClick}
            />
          ))}
        </Styled_Container>
      )}
    </>
  );
}

export default Bookmark;
