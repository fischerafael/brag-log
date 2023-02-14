import React from "react";
import * as Chakra from "@chakra-ui/react";
import { Header, TemplateLandingPage } from "../PageAppLandingPage";
import { Link } from "../../components/Link";
import { useTasks } from "../../hooks/useTasks";

export const PageAppDashboard = () => {
  return (
    <TemplateLandingPage bg="gray.50">
      <Header />
      <DashboardMain />
    </TemplateLandingPage>
  );
};

export const DashboardMain = () => {
  const tasks = useTasks();

  return (
    <Chakra.Grid
      w="full"
      maxW="container.md"
      alignItems="flex-start"
      gap="2"
      gridTemplateColumns={["1fr"]}
    >
      {tasks.getTasks().map((task) => (
        <CardTaskSimple
          key={task.id}
          category={task.category}
          description={task.description}
          duration={String(task.duration)}
          id={task.id}
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
}

export const CardTaskSimple = (props: CardTaskSimpleProps) => {
  return (
    <Link href="/app/task/">
      <Chakra.HStack
        bg="white"
        w="full"
        p="4"
        justify="space-between"
        cursor="pointer"
      >
        <Chakra.Text>{props.id}</Chakra.Text>
        <Chakra.Text>{props.description}</Chakra.Text>
        <Chakra.Tag size="sm">{props.category}</Chakra.Tag>
        <Chakra.Text>{props.duration}</Chakra.Text>
      </Chakra.HStack>
    </Link>
  );
};
