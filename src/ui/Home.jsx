/* eslint-disable react/prop-types */
import styled from "styled-components";
import NewsCard from "./NewsCard";
const Styled_NewsCard = styled.div`
display: flex;
align-items: center;
gap: 1%;
width:1200px;
`;
function Home() {
  return <Styled_NewsCard><NewsCard NewsImg="https://picsum.photos/200/300"
               NewsTitle="Title 1"
               NewsDescription="Discription 1"
              />
              <NewsCard NewsImg="https://picsum.photos/200/300"
               NewsTitle="Title 1"
               NewsDescription="Discription 1"
              />
              <NewsCard NewsImg="https://picsum.photos/200/300"
               NewsTitle="Title 1"
               NewsDescription="Discription 1"
              />
              <NewsCard NewsImg="https://picsum.photos/200/300"
               NewsTitle="Title 1"
               NewsDescription="Discription 1"
              /><NewsCard NewsImg="https://picsum.photos/200/300"
              NewsTitle="Title 1"
              NewsDescription="Discription 1"
             /></Styled_NewsCard>;
}

export default Home;
