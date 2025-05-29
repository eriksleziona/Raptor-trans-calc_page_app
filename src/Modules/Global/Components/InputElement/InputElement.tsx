import { styled } from "@linaria/react";
import type { InputType } from "./InputElement.types";

const InputStyle = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 5px;
  gap: 10px;

  label {
    width: 150px;
    font-size: 16px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: italic;
    text-align: center;
  }

  input {
    padding: 5px;
    width: 45%;
    border: 2px solid black;
    border-radius: 10px;
  }
`;

const InputElement = ({ label, input_type, fn_handler }: InputType) => {
  return (
    <InputStyle>
      <label htmlFor="input">{label}</label>

      <input
        id="input"
        type={input_type}
        onChange={(e) => fn_handler(e.target.value)}
      />
    </InputStyle>
  );
};
export default InputElement;
