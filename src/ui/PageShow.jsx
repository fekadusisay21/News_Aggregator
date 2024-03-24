import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const FullPageIframe = styled.iframe`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  margin-top: 4%;
`;

const BackButton = styled.button`
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 9999;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

function PageShow() {
  const { link } = useAuth();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <FullPageIframe src={link} title="PageShow" />
      <BackButton onClick={handleBack}>Back</BackButton>
    </>
  );
}

export default PageShow;
