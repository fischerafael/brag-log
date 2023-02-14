import React from "react";
import * as Chakra from "@chakra-ui/react";
import { Header, TemplateLandingPage } from "../PageAppLandingPage";
import { FormControl } from "../../components/FormControl";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";
import { NumberInput } from "../../components/NumberInput";
import { useCategories } from "../../hooks/useCategories";
import { Switch } from "../../components/Switch";
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
      <FormControl
        label="Task Duration"
        input={
          <NumberInput
            value={state.task.duration}
            onChange={(value) => methods.handleSetTask("duration", value)}
          />
        }
      />
      <FormControl
        label="Task Category"
        input={
          <Select
            options={categoryOptions}
            value={state.task.category}
            onChange={(e) => methods.handleSetTask("category", e.target.value)}
          />
        }
      />
      <FormControl
        label="Task Date"
        input={
          <Input
            type="date"
            value={state.task.date}
            onChange={(e) => methods.handleSetTask("date", e.target.value)}
          />
        }
      />

      <Chakra.HStack w="full" justify="space-between" align="center">
        <FormControl
          label="Task Done"
          input={
            <Switch
              isChecked={state.task.isDone}
              onChange={methods.handleToggleTask}
            />
          }
        />
        <Chakra.Button colorScheme="blue">Save</Chakra.Button>
      </Chakra.HStack>
    </Chakra.Grid>
  );
};
