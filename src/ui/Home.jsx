/* eslint-disable react/prop-types */
import { searchNews } from "../services/api";
import styled from "styled-components";
import NewsCard from "./NewsCard";
import Spinner from "./Spinner";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Styled_NewsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Styled_Card = styled.button`
  text-decoration: none;
  outline: none;
  border: none;
  background-color: transparent;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

function Home() {
  const { searchQuery, setLink } = useAuth();
  const navigate = useNavigate();
  function handleClick(link) {
    setLink(link);
    navigate("/pageshow");
  }

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
            <Styled_Card key={item.id} onClick={() => handleClick(item.url)}>
              <NewsCard
                NewsImg={item.urlToImage || item.url_to_image}
                NewsTitle={item.title}
                NewsDescription={item.description}
              />
            </Styled_Card>
          ))}
        </Styled_NewsCard>
      )}
    </>
  );
}

export default Home;
