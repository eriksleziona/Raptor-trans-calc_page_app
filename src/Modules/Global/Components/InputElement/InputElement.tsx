import { styled } from "@linaria/react";
import type { InputType } from "./InputElement.types";

const InputStyle = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  padding: 5px;
  gap: 10px;

  label {
    font-size: 16px;
    text-align: center;
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
