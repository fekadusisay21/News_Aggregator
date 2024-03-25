/* eslint-disable react/prop-types */
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { styled as Styled } from "styled-components";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDark } from "../context/DarkContext";
import { BsArrowRight } from "react-icons/bs";

function Topics() {
  const { isDark } = useDark();

  const Styled_Container = styled(Card)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${isDark ? "#171819" : "#ccc"};
    border-radius: 10px;
    margin-top: 5%;
    padding: 5%;
  `;

  const Styled_Topography = styled(Typography)`
    color: ${isDark ? "#ccc" : "#000"};
    margin-bottom: 2%;
    margin-left: 20%;
  `;

  const Styled_BtnContain = Styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
   align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  `;

  const [buttonStates, setButtonStates] = useState({
    Politics: false,
    Business: false,
    Technology: false,
    Entertainment: false,
    Health: false,
    Science: false,
    Education: false,
    Environment: false,
    Crime: false,
    HumanInterest: false,
    Travel: false,
    OpinionEditorial: false,
    Finance: false,
    Sports: false,
    Lifestyle: false,
    Automotive: false,
    RealEstate: false,
    Fashion: false,
    FoodDining: false,
    ArtsCulture: false,
  });

  const handleButtonClick = (index) => {
    setButtonStates((prevButtonStates) => ({
      ...prevButtonStates,
      [Object.keys(prevButtonStates)[index]]:
        !prevButtonStates[Object.keys(prevButtonStates)[index]],
    }));
  };

  const handleSaveClick = () => {
    console.log(
      Object.entries(buttonStates)
        .filter(([_, value]) => value)
        .map(([key, _]) => Object.keys(buttonStates).indexOf(key) + 1)
    );
  };

  const Styled_Btn = Styled.div`
    width:100px;
    height:50px;
    text-align:center;
    border-radius: 5px;
    padding: 10px;
    font-weight:bold;
    background-color: ${(props) => (props.clicked ? "#4f46e5" : "white")};
    color: ${(props) => (props.clicked ? "white" : "black")};
    cursor: pointer;
  `;

  const Styled_Save = styled(Button)`
    margin-left: 30%;
    margin-top: 3%;
    margin-left: 35%;
  `;

  return (
    <div>
      <Styled_Container>
        <Styled_Topography variant="h4" component="div">
          Pick your favorites
        </Styled_Topography>
        <Styled_BtnContain>
          {Object.keys(buttonStates).map((key, index) => (
            <Styled_Btn
              key={index}
              clicked={buttonStates[key]}
              onClick={() => handleButtonClick(index)}
            >
              {key}
            </Styled_Btn>
          ))}
        </Styled_BtnContain>
        <Styled_Save variant="contained" size="large" onClick={handleSaveClick}>
          <BsArrowRight />
          Continue
        </Styled_Save>
      </Styled_Container>
    </div>
  );
}

export default Topics;
