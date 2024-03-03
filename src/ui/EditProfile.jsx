import styled from "styled-components";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const EditProfile = () => {
  const Container = styled.div`
    font-family: monospace;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    background-color: #121621;
    border-radius: 5px;
  `;

  const FormContainer = styled.div`
    background-color: #121621;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    width: 400px;
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

  const Button = styled.button`
    padding: 5px 10px;
    background-color: #4f46e5;
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 12px;
    cursor: pointer;

    &:hover {
      background-color: #0000ff;
    }
  `;

  return (
    <Container>
      <FormContainer>
        <FormTitle>Edit Profile</FormTitle>
        <FormGroup>
          <IconWrapper>
            <FaUser />
          </IconWrapper>
          <Input type="text" placeholder="Username" />
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
        <lable htmlFor="avator">Chnge</lable>
        <input type="file"></input>
        <Button>Save Changes</Button>
      </FormContainer>
    </Container>
  );
};

export default EditProfile;