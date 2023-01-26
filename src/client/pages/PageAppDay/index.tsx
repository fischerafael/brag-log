import React, { useState } from "react";
import * as Icon from "react-icons/hi";
import * as Chakra from "@chakra-ui/react";
import { AppTemplate } from "@/src/client/components/AppTemplate";
import { ITask } from "@/src/shared/entities";
import { useTasks } from "@/src/client/hooks/useTasks";
import { formatDate } from "../../utils";

export const PageAppDay = () => {
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
  const { state, methods } = useTasks();

  return (
    <Chakra.Grid
      w="full"
      gridTemplateColumns="2fr 6fr 1fr 1fr 1fr 1fr"
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
        value={formatDate(state.task.date)}
        onChange={(e) => methods.handleSetTask("date", e.target.value)}
      />
      <Chakra.Textarea
        fontSize="xs"
        placeholder="Description"
        w="full"
        borderRadius="4"
        value={state.task.description}
        onChange={(e) => methods.handleSetTask("description", e.target.value)}
      />
      <Chakra.Input
        fontSize="xs"
        placeholder="Duration"
        w="full"
        borderRadius="4"
        type="number"
        value={state.task.duration}
        onChange={(e) => methods.handleSetTask("duration", e.target.value)}
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
        Value
      </Chakra.Button>

      <Chakra.HStack objectFit="contain" w="full">
        <Chakra.IconButton aria-label="" icon={<Icon.HiOutlineTrash />} />
        <Chakra.IconButton aria-label="" icon={<Icon.HiOutlineCheck />} />
      </Chakra.HStack>
    </Chakra.Grid>
  );
};
