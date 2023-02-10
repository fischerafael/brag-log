import React from "react";
import * as Chakra from "@chakra-ui/react";
import { Header, TemplateLandingPage } from "../PageAppLandingPage";
import { FormControl } from "../../components/FormControl";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";
import { NumberInput } from "../../components/NumberInput";

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
    >
      <FormControl label="Task Description" input={<Input />} />
      <FormControl label="Task Duration" input={<NumberInput />} />
      <FormControl label="Task Category" input={<Select options={[]} />} />
      <Chakra.Textarea placeholder="Description" />
      <Chakra.Input placeholder="Duration" />
    </Chakra.Grid>
  );
};
