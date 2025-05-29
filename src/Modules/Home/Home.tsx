import type { FC } from "react";
import { AppProvider } from "../../Context/Context";

import ExcavationVolumeCalculator from "../Calculators/ExcavationVolumeCalculator/ExcavationVolumeCalculator";

const Home: FC = () => {
  return (
    <>
      <AppProvider>
        <ExcavationVolumeCalculator />
      </AppProvider>
    </>
  );
};
export default Home;
