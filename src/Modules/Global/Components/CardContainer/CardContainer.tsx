import { styled } from "@linaria/react";
import type { PropsWithChildren, FC } from "react";

const CSSContainer = styled.div`
  max-width: 500px;
  padding: 15px;
  border-radius: 10px;
`;

const CardContainer: FC<PropsWithChildren> = ({ children }) => {
  return <CSSContainer>{children}</CSSContainer>;
};
export default CardContainer;
