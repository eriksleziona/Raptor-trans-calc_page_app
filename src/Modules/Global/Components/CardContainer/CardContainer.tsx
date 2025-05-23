import { styled } from "@linaria/react";
import type { PropsWithChildren, FC } from "react";

const CSSContainer = styled.div`
  background-color: white;
  color: red;
  border-radius: 10px;
`;

const CardContainer: FC<PropsWithChildren> = ({ children }) => {
  return <CSSContainer>{children}</CSSContainer>;
};
export default CardContainer;
