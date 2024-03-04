import styled from "styled-components";
import Button from "./Button";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useRef } from "react";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import profile from "../../public/assets/images/profile.png";

function EditProfile() {
  const navigate = useNavigate();
  const fileInput = useRef();
  function handleClick() {
    fileInput.current.click();
  }
  const Container = styled.div`
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60vh;
    background-color: #121621;
    border-radius: 5px;
    margin-top: 12.5%;
  `;

  const FormContainer = styled.div`
    background-color: #121621;
    padding: 20px 80px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    text-align: center;
  `;

  const FormTitle = styled.h2`
    color: #fff;
    margin-bottom: 20px;
    text-align: center;
  `;

  const FormGroup = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  `;

  const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: transparent;
    margin-right: 10px;

    svg {
      color: #fff;
      font-size: 16px;
    }
  `;
  const Styled_Img = styled.img`
    margin-bottom: 4px;
    width: 30px;
    cursor: pointer;
  `;
  const Input = styled.input`
    flex: 1;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #ddd;
    outline: none;
    font-size: 12px;
    background-color: transparent;
    color: #fff;

    ::placeholder {
      color: #ccc;
    }
  `;
  const Styled_Input = styled.input`
    display: none;
  `;
  const Styled_UploadButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 8px;
  `;

  const Styled_CloseBtn = styled.button`
    position: relative;
    margin-top: 0%;
    font-size: 20px;
    top: 0;
    margin-left: 80%;
  `;
  return (
    <Container>
      <Styled_CloseBtn onClick={() => navigate("/")}>
        <IoIosClose />
      </Styled_CloseBtn>
      <FormContainer>
        <FormTitle>Edit Profile</FormTitle>
        <FormGroup>
          <IconWrapper>
            <FaUser />
          </IconWrapper>
          <Input placeholder="Username" />
        </FormGroup>
        <FormGroup>
          <IconWrapper>
            <FaEnvelope />
          </IconWrapper>
          <Input type="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <IconWrapper>
            <FaLock />
          </IconWrapper>
          <Input type="password" placeholder="Old Password" />
        </FormGroup>
        <FormGroup>
          <IconWrapper>
            <FaLock />
          </IconWrapper>
          <Input type="password" placeholder="New Password" />
        </FormGroup>

        <Styled_Input type="file" ref={fileInput} />
        <Styled_UploadButton>
          <p style={{ color: "white" }}>Change photo</p>
          <Styled_Img src={profile} onClick={handleClick} />
        </Styled_UploadButton>
        <Button size="vsmall" variation="primary">
          Save Changes
        </Button>
      </FormContainer>
    </Container>
  );
}
export default EditProfile;
