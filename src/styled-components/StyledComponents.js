import React from "react";
import styled, { keyframes, css, ThemeProvider } from "styled-components";

const theme = {
  primary: "pink",
  secondary: "green",
};

const theme1 = {
  primary: "black",
  secondary: "green",
};

const theme2 = {
  primary: "blue",
  secondary: "orange",
};

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 90rem;

  padding: 2rem;
  //background-color: darkturquoise;
  background-color: ${props => props.theme.secondary};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 900px) {
    background-color: black;
  }
`;

const Title = styled.h1`
  font-family: "Hachi Maru Pop", cursive;
  ${props =>
    props.primary &&
    css`
      font-size: 55px;
      color: white;
    `}/* font-size: 3rem;
  color: white; */
`;

const rotate = keyframes`
from {
    transform: rotate(0deg);
}

to {
    transform: rotate(360deg)
}
`;
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 3rem;
`;

const Content = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Kiwi+Maru&display=swap");
  color: ${props => props.theme.primary};
  font-size: 3rem;
  font-family: "Kiwi Maru", serif;
  margin: 0;
`;
const Button = styled.button`
  margin: 1em;
  padding: 0.25 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  font-size: 1em;
  color: ${({ primary }) => (primary ? "white" : "palevioletred")};
  background-color: ${props => (props.primary ? "palevioletred" : "white")};
`;

const BlackButton = styled(Button)`
  color: white;
  background-color: black;
  &:hover {
    background-color: violet;
  }
`;
const StyledComponents = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title primary>Styled Components 💅 </Title>
        <Content>
          Coding <Rotate> 💻</Rotate>{" "}
        </Content>
        <Button as="a" href="#">
          Regular Button
        </Button>
        <Button primary onClick={() => console.log("onClick")}>
          Primary Button
        </Button>
        <BlackButton>Black Button</BlackButton>
      </Container>
    </ThemeProvider>
  );
};

export default StyledComponents;
