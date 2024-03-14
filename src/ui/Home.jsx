/* eslint-disable react/prop-types */
import styled from "styled-components";
import NewsCard from "./NewsCard";
const Styled_NewsCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1%;
  width: 1200px;
`;
function Home() {
  return (
    <Styled_NewsCard>
      <NewsCard
        NewsImg="https://assets3.thrillist.com/v1/image/3175606/1200x600/scale;;webp=auto;jpeg_quality=85.jpg"
        NewsTitle="More Americans Are Trying to Get a Second Passport Right Now"
        NewsDescription="thrillist.com - Opheli Garcia Lawler
        The US passport does not rank highly in this new index of the world's most powerful passports. One of the most laborious parts of international travel …"
      />
    </Styled_NewsCard>
  );
}

export default Home;
