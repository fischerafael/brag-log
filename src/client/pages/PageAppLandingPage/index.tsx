import React from "react";
import * as Chakra from "@chakra-ui/react";

export const PageAppLandingPage = () => {
  return (
    <TemplateLandingPage bg="gray.50">
      <Chakra.HStack
        minH="100vh"
        w="full"
        bg="red"
        maxW="container.md"
      ></Chakra.HStack>
    </TemplateLandingPage>
  );
};

interface TemplateLandingPageProps extends Chakra.GridProps {
  children: React.ReactNode;
}

export const TemplateLandingPage = ({
  children,
  ...props
}: TemplateLandingPageProps) => {
  return (
    <Chakra.Grid
      w="full"
      alignItems="flex-start"
      justifyItems="center"
      minH="100vh"
      px="8"
      {...props}
    >
      {children}
    </Chakra.Grid>
  );
};
