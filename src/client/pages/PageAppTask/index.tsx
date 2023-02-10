import React from "react";
import * as Chakra from "@chakra-ui/react";
import { Header, TemplateLandingPage } from "../PageAppLandingPage";

export const PageAppTask = () => {
  return (
    <TemplateLandingPage bg="gray.50">
      <Header />
      <DashboardTask />
    </TemplateLandingPage>
  );
};

export const DashboardTask = () => {
  return (
    <Chakra.Grid
      w="full"
      maxW="container.md"
      alignItems="flex-start"
      gap="2"
      gridTemplateColumns={["1fr"]}
    ></Chakra.Grid>
  );
};
