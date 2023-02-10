import React from "react";
import * as Chakra from "@chakra-ui/react";
import { Header, TemplateLandingPage } from "../PageAppLandingPage";
import { FormControl } from "../../components/FormControl";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";
import { NumberInput } from "../../components/NumberInput";
import { useCategories } from "../../hooks/useCategories";

export const PageAppTask = () => {
  return (
    <TemplateLandingPage bg="gray.50">
      <Header />
      <DashboardTask />
    </TemplateLandingPage>
  );
};

export const DashboardTask = () => {
  const categoryOptions = useCategories();

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
      <FormControl
        label="Task Category"
        input={<Select options={categoryOptions} />}
      />
    </Chakra.Grid>
  );
};
