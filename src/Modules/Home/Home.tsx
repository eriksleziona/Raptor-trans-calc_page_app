import type { FC, PropsWithChildren } from "react";
import { AppProvider } from "../../Context/Context";
import InputElement from "../Global/Components/InputElement/InputElement";

const Home: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AppProvider>
        {children}
        <InputElement
          input_type="text"
          label="Test Label"
          fn_handler={() => console.log("works")}
        ></InputElement>
      </AppProvider>
    </>
  );
};
export default Home;
