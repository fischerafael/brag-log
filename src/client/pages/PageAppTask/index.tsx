import React from "react";
import * as Chakra from "@chakra-ui/react";
import { Header, TemplateLandingPage } from "../PageAppLandingPage";
import { FormControl } from "../../components/FormControl";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";
import { NumberInput } from "../../components/NumberInput";
import { useCategories } from "../../hooks/useCategories";
import { Switch } from "../../components/Switch";
import { formatDate } from "../../utils";
import { useTasks } from "../../hooks/useTasks";

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
  const { methods, state } = useTasks();

  return (
    <Chakra.Grid
      w="full"
      maxW="container.md"
      alignItems="flex-start"
      gap="2"
      gridTemplateColumns={["1fr"]}
    >
      <FormControl
        label="Task Description"
        input={
          <Input
            value={state.task.description}
            onChange={(e) =>
              methods.handleSetTask("description", e.target.value)
            }
          />
        }
      />
      <FormControl label="Task Duration" input={<NumberInput />} />
      <FormControl
        label="Task Category"
        input={<Select options={categoryOptions} />}
      />
      <FormControl
        label="Task Date"
        input={<Input type="date" value={formatDate(new Date())} />}
      />

      <Chakra.HStack w="full" justify="space-between" align="center">
        <FormControl label="Task Done" input={<Switch />} />
        <Chakra.Button colorScheme="blue">Save</Chakra.Button>
      </Chakra.HStack>
    </Chakra.Grid>
  );
};
