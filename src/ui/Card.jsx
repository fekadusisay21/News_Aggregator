const Styled_Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin-block: 2rem;
  gap: 2rem;
`;

const Styled_Image = styled.img`
  max-width: 100%;
  display: block;
  object-fit: cover;
`;

const Styled_Card = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(20rem, calc(20rem + 2vw), 22rem);
  overflow: hidden;
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1em;
  background: #ece9e6;
  background: linear-gradient(to right, #ffffff, #ece9e6);
`;

const Styled_CardBody = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Styled_Tag = styled.div`
  align-self: flex-start;
  padding: 0.25em 0.75em;
  border-radius: 1em;
  font-size: 0.75rem;
`;

const Styled_UserImage = styled.img`
  border-radius: 50%;
`;

const Styled_UserInfo = styled.div`
  small {
    color: #666;
  }
`;
function Card() {
  return (
    <Styled_Card>
      <Styled_CardHeader>
        <Styled_Image
          src="https://source.unsplash.com/600x400/?food"
          alt="card__image"
          class="card__image"
          width="600"
        />
      </Styled_CardHeader>
      <Styled_CardBody>
        <span class="tag tag-brown">Food</span>
        <h4>Delicious Food</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
          atque quidem!
        </p>
      </Styled_CardBody>
      <Styled_CardFooter>
        <Styled_User>
          <Styled_Image
            src="https://i.pravatar.cc/40?img=2"
            alt="user__image"
            class="user__image"
          />
          <Styled_UserInfo>
            <h5>Jony Doe</h5>
            <small>Yesterday</small>
          </Styled_UserInfo>
        </Styled_User>
      </Styled_CardFooter>
    </Styled_Card>
  );
}
export default Card;
