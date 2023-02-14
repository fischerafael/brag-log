import React from "react";
import * as Chakra from "@chakra-ui/react";
import { Header, TemplateLandingPage } from "../PageAppLandingPage";
import { FormControl } from "../../components/FormControl";
import { Select } from "../../components/Select";
import { Input } from "../../components/Input";
import { NumberInput } from "../../components/NumberInput";
import { useCategories } from "../../hooks/useCategories";
import { Switch } from "../../components/Switch";
import { useTask } from "../../hooks/useTask";
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
  const task = useTask();
  const tasks = useTasks();

  const handleAddTask = () => {
    if (!task.isTaskValid()) return;
    tasks.addTask(task.getTask());
    task.resetTask();
  };

  const isDisabled = !task.isTaskValid();

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
            value={task.getTask().description}
            onChange={(e) =>
              task.setTaskProperty("description", e.target.value)
            }
          />
        }
      />
      <FormControl
        label="Task Duration"
        input={
          <NumberInput
            value={task.getTask().duration}
            onChange={(value) => task.setTaskProperty("duration", value)}
          />
        }
      />
      <FormControl
        label="Task Category"
        input={
          <Select
            options={categoryOptions}
            value={task.getTask().category}
            onChange={(e) => task.setTaskProperty("category", e.target.value)}
          />
        }
      />
      <FormControl
        label="Task Date"
        input={
          <Input
            type="date"
            value={task.getTask().date}
            onChange={(e) => task.setTaskProperty("date", e.target.value)}
          />
        }
      />

      <Chakra.HStack w="full" justify="space-between" align="center">
        <FormControl
          label="Task Done"
          input={
            <Switch
              isChecked={task.getTask().isDone}
              onChange={task.toggleTask}
            />
          }
        />
        <Chakra.Button
          colorScheme="blue"
          isDisabled={isDisabled}
          onClick={handleAddTask}
        >
          Save
        </Chakra.Button>
      </Chakra.HStack>
    </Chakra.Grid>
  );
};
