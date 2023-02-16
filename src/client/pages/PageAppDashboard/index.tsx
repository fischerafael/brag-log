import React from "react";
import * as Chakra from "@chakra-ui/react";
import { Header, TemplateLandingPage } from "../PageAppLandingPage";
import { Link } from "../../components/Link";
import { useTasks } from "../../hooks/useTasks";
import { useFormatTask } from "../../hooks/useFormatTask";
import { useNavigation } from "../../hooks/useNavigation";

export const PageAppDashboard = () => {
  return (
    <TemplateLandingPage>
      <Header />
      <DashboardMain />
    </TemplateLandingPage>
  );
};

export const DashboardMain = () => {
  const tasks = useTasks();
  const formatTask = useFormatTask();
  const navigate = useNavigation();

  const handleNavigateToTask = (taskId: string) => {
    navigate.navigateTo(`/app/task?id=${taskId}`);
  };

  return (
    <Chakra.Grid
      w="full"
      maxW="container.md"
      alignItems="flex-start"
      gap="2"
      gridTemplateColumns={["1fr"]}
    >
      <Chakra.HStack w="full" justify="space-between" py="8">
        <Chakra.Text fontWeight="bold">Today's Task</Chakra.Text>
        <Link href="/app/task">
          <Chakra.Button colorScheme="blue" variant="outline" borderRadius="4">
            New
          </Chakra.Button>
        </Link>
      </Chakra.HStack>

      {tasks.getTasks().map((task) => (
        <CardTaskSimple
          key={task.id}
          category={formatTask.getCategory(task.category)}
          description={task.description}
          duration={formatTask.getDuration(task.duration)}
          id={formatTask.getID(task.id)}
          onClick={() => handleNavigateToTask(task.id)}
        />
      ))}
    </Chakra.Grid>
  );
};

export interface CardTaskSimpleProps {
  id: string;
  description: string;
  category: string;
  duration: string;
  onClick: () => void;
}

export const CardTaskSimple = (props: CardTaskSimpleProps) => {
  return (
    <Chakra.HStack
      w="full"
      p="4"
      justify="space-between"
      cursor="pointer"
      onClick={props.onClick}
      spacing="4"
      _hover={{ bg: "gray.50" }}
    >
      <Chakra.Text>{props.id}</Chakra.Text>
      <Chakra.Text w="full">{props.description}</Chakra.Text>
      <Chakra.Text fontSize="xs" p="1" bg="blue.50">
        {props.category}
      </Chakra.Text>
      <Chakra.Text>{props.duration}</Chakra.Text>
    </Chakra.HStack>
  );
};
