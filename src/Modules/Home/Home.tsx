import type { FC, PropsWithChildren } from "react";
import { AppProvider } from "../../Context/Context";
import CardContainer from "../Global/Components/CardContainer/CardContainer";

const Home: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AppProvider>
        <CardContainer>
          <h1>Hello On the Home page</h1>
        </CardContainer>

        {children}
      </AppProvider>
      ``
    </>
  );
};
export default Home;
