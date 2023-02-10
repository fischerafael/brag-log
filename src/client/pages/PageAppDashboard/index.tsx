import React from "react";
import * as Chakra from "@chakra-ui/react";
import { Header, TemplateLandingPage } from "../PageAppLandingPage";

export const PageAppDashboard = () => {
  return (
    <TemplateLandingPage bg="gray.50">
      <Header />
      <DashboardMain />
    </TemplateLandingPage>
  );
};

export const DashboardMain = () => {
  return (
    <Chakra.Grid
      w="full"
      maxW="container.md"
      alignItems="flex-start"
      gap="2"
      gridTemplateColumns={["1fr"]}
    >
      <CardTaskSimple />
      <CardTaskSimple />
      <CardTaskSimple />
      <CardTaskSimple />
    </Chakra.Grid>
  );
};

export interface CardTaskSimpleProps {
  id: string;
  description: string;
  category: string;
  duration: string;
}

export const CardTaskSimple = () => {
  return (
    <Chakra.HStack
      bg="white"
      w="full"
      p="4"
      justify="space-between"
      cursor="pointer"
    >
      <Chakra.Text>1324</Chakra.Text>
      <Chakra.Text>Worked on the dashboard of Brag Log App</Chakra.Text>
      <Chakra.Tag size="sm">#development</Chakra.Tag>
      <Chakra.Text>0,5 h</Chakra.Text>
    </Chakra.HStack>
  );
};
