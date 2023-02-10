import * as Chakra from "@chakra-ui/react";

interface SwitchProps extends Chakra.SwitchProps {}

export const Switch = ({ ...props }: SwitchProps) => {
  return <Chakra.Switch {...props} />;
};
