import styled from "styled-components";

const StyledDiv = styled.div`
  color: purple;
  font-size: 25px;
  background-color: pink;
`;

const Button = styled.button`
  color: pink;
  background-color: black;
`;
const StyledComponent = () => {
  return (
    <div>
      <StyledDiv>Hello, styled-components!</StyledDiv>
      <Button>Click</Button>;
    </div>
  );
};
// funcCompo called StyledComponent that renders previously created StyledDiv, styled component.
export default StyledComponent;
