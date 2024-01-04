import styled from "styled-components";

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="./images/dices.png" alt="" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};
export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  font-family: "Poppins";

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  min-width: 220px;
  padding: 10px 18px;
  gap: 10px;
  border: 1px solid transparent;
  border-radius: 5px;
  background: #000;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-family: "Poppins";
  transition: 0.4s background ease-in;
  cursor: pointer;

  &:hover {
    border: 1px solid #000;
    color: #000;
    background-color: #fff;
    transition: 0.3s background ease-in;
  }
`;
