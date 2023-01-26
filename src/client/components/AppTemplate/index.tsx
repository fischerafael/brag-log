import React from "react";
import * as Chakra from "@chakra-ui/react";

export interface AppTemplateProps {
  header?: React.ReactNode;
  main?: React.ReactNode;
  footer?: React.ReactNode;
}

export const AppTemplate = ({ header, main, footer }: AppTemplateProps) => {
  return (
    <Chakra.VStack
      align="center"
      w="full"
      justify="flex-start"
      px="8"
      bg="gray.50"
      minH="100vh"
    >
      <Chakra.VStack w="full" maxW="1400px">
        {header}
        {main}
        {footer}
      </Chakra.VStack>
    </Chakra.VStack>
  );
};
