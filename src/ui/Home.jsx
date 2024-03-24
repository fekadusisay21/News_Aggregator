/* eslint-disable react/prop-types */
import { searchNews } from "../services/api";
import styled from "styled-components";
import NewsCard from "./NewsCard";
import Spinner from "./Spinner";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/AuthContext";

const Styled_NewsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

function Home() {
  const { searchQuery } = useAuth();

  const { isLoading, data } = useQuery({
    queryKey: ["news", searchQuery],
    queryFn: () => searchNews(searchQuery),
  });

  const filteredNews = data
    ? data?.filter((item) => item.content !== "[Removed]")
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
              NewsImg={item.urlToImage || item.url_to_image}
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
