import { styled } from "@linaria/react";
import type { PropsWithChildren, FC } from "react";

const CSSContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 20px 25px;
  border: solid #000;
  border-width: 1px;
  padding: 15px;
  border-radius: 10px;
`;

const CardContainer: FC<PropsWithChildren> = ({ children }) => {
  return <CSSContainer>{children}</CSSContainer>;
};
export default CardContainer;
