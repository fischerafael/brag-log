import * as Chakra from "@chakra-ui/react";

interface NumberInputProps extends Chakra.NumberInputProps {}

export const NumberInput = ({ ...props }: NumberInputProps) => {
  return (
    <Chakra.NumberInput step={0.25} precision={2} min={0} max={8} {...props}>
      <Chakra.NumberInputField />
      <Chakra.NumberInputStepper>
        <Chakra.NumberIncrementStepper />
        <Chakra.NumberDecrementStepper />
      </Chakra.NumberInputStepper>
    </Chakra.NumberInput>
  );
};
