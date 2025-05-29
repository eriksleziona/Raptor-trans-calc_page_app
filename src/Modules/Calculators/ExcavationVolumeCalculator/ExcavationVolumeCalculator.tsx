import { useGlobalContext } from "../../../Context/Context";
import type { AppContextType } from "../../../Context/Context.types";
import Button from "../../Global/Components/Button/Button";
import CardContainer from "../../Global/Components/CardContainer/CardContainer";
import InputElement from "../../Global/Components/InputElement/InputElement";

const ExcavationVolumeCalculator = () => {
  const { setLength, setWidth } = useGlobalContext() as AppContextType;

  return (
    <CardContainer>
      <InputElement input_type="text" label="Szerokość" fn_handler={setWidth} />
      <InputElement input_type="text" label="Długość" fn_handler={setLength} />
      <Button text="Oblicz" />
    </CardContainer>
  );
};
export default ExcavationVolumeCalculator;
