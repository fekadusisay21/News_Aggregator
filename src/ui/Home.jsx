/* eslint-disable react/prop-types */
import { getNews } from "../hooks/useNews";
import styled from "styled-components";
import NewsCard from "./NewsCard";
import Spinner from "./Spinner";
import { useQuery } from "@tanstack/react-query";

const Styled_NewsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

function Home() {
  const { isLoading, data } = useQuery({
    queryKey: "news",
    queryFn: getNews,
  });

  const filteredNews = data
    ? data.filter((item) => item.content !== "[Removed]")
    : [];

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Styled_NewsCard>
          {filteredNews?.map((item) => (
            <NewsCard
              key={item.id}
              NewsImg={item.urlToImage}
              NewsTitle={item.title}
              NewsDescription={item.description}
            />
          ))}
        </Styled_NewsCard>
      )}
    </>
  );
}

export default Home;
