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
import { useNavigation } from "../../hooks/useNavigation";
import { Link } from "../../components/Link";
import { useRouter } from "next/router";

export const PageAppTask = () => {
  return (
    <TemplateLandingPage>
      <Header />
      <DashboardTask />
    </TemplateLandingPage>
  );
};

export const DashboardTask = () => {
  const router = useRouter();
  const categoryOptions = useCategories();
  const task = useTask();
  const tasks = useTasks();
  const navigation = useNavigation();

  React.useEffect(() => {
    if (!router.query.id) return;
    const existingTask = tasks.getTask(router.query.id as string);
    task.setWholeTask(existingTask!);
  }, [router.query.id]);

  const addTask = () => {
    if (!task.isTaskValid()) return;
    tasks.addTask(task.getTask());
    task.resetTask();
    navigation.navigateTo("/app");
  };

  const updateTask = () => {
    tasks.updateTask(task.getTask());
    task.resetTask();
    navigation.navigateTo("/app");
  };

  const handleOnClick = () => {
    if (task.getTask().id) {
      updateTask();
      return;
    }
    addTask();
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
      <Chakra.HStack w="full" justify="space-between" py="8">
        <Chakra.Text fontWeight="bold">Task</Chakra.Text>
        <Link href="/app/">
          <Chakra.Button colorScheme="blue" variant="outline" borderRadius="4">
            Return
          </Chakra.Button>
        </Link>
      </Chakra.HStack>

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
          onClick={handleOnClick}
        >
          Save
        </Chakra.Button>
      </Chakra.HStack>
    </Chakra.Grid>
  );
};
