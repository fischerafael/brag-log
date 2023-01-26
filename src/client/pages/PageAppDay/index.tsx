import React, { useState } from "react";
import * as Chakra from "@chakra-ui/react";
import { AppTemplate } from "@/src/client/components/AppTemplate";
import { ITask } from "@/src/shared/entities";

interface IPageAppDayState {
  currentTask: ITask;
  tasks: ITask[];
}

export const PageAppDay = () => {
  const [state, setState] = useState<IPageAppDayState>({
    currentTask: {
      category: [],
      date: new Date(),
      description: "",
      duration: 0,
      id: "",
      isDone: false,
      value: [],
    },
    tasks: [],
  });

  return (
    <AppTemplate
      main={
        <Chakra.VStack w="full">
          <Chakra.HStack w="full" justify="space-between">
            <Chakra.Text>Today</Chakra.Text>
            <Chakra.Button colorScheme="blue">Add</Chakra.Button>
          </Chakra.HStack>

          <Chakra.VStack w="full" spacing="0">
            <TaskEdit />
            <Task />
            <Task />
          </Chakra.VStack>
        </Chakra.VStack>
      }
    />
  );
};

export const Task = () => {
  return (
    <Chakra.Grid
      w="full"
      gridTemplateColumns="1fr 4fr 1fr 1fr 2fr"
      cursor="pointer"
      alignItems="flex-start"
      py="4"
      gap="4"
      _hover={{ bg: "gray.100" }}
    >
      <Chakra.Text>25/01/2023</Chakra.Text>
      <Chakra.Text>Página de todo do Brag Log</Chakra.Text>
      <Chakra.Text>1 h</Chakra.Text>
      <Chakra.HStack>
        <Chakra.Tag>Development</Chakra.Tag>
      </Chakra.HStack>
      <Chakra.HStack>
        <Chakra.Tag>Added New Feature</Chakra.Tag>
        <Chakra.Tag>Added Coding Hours</Chakra.Tag>
      </Chakra.HStack>
    </Chakra.Grid>
  );
};

export const TaskEdit = () => {
  return (
    <Chakra.Grid
      w="full"
      gridTemplateColumns="1fr 4fr 1fr 1fr 2fr"
      cursor="pointer"
      alignItems="flex-start"
      py="8"
      gap="4"
    >
      <Chakra.Input
        fontSize="xs"
        type="date"
        placeholder="Date"
        w="full"
        borderRadius="4"
      />
      <Chakra.Textarea
        fontSize="xs"
        placeholder="Description"
        w="full"
        borderRadius="4"
      />
      <Chakra.Input
        fontSize="xs"
        placeholder="Duration"
        w="full"
        borderRadius="4"
      />
      <Chakra.Button
        fontSize="xs"
        w="full"
        colorScheme="blue"
        variant="outline"
        borderRadius="4"
      >
        Category
      </Chakra.Button>
      <Chakra.Button
        fontSize="xs"
        w="full"
        colorScheme="blue"
        variant="outline"
        borderRadius="4"
      >
        Value Added
      </Chakra.Button>
    </Chakra.Grid>
  );
};
