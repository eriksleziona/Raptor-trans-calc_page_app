import type { ButtonTypes } from "./Button.typess";
import { styled } from "@linaria/react";

const CSSButton = styled.button`
  background-color: #000000;
  color: white;
  width: 100px;
  border-radius: 20px;
  padding: 5px;
  margin: 0 auto;
`;

const Button = ({ text }: ButtonTypes) => {
  // #TODO :  Implement handle Function passed by props to simple
  return (
    <CSSButton onClick={() => console.log("Whaatsss up")}>{text}</CSSButton>
  );
};
export default Button;
