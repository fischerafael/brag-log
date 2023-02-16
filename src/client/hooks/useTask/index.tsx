import { ITask } from "@/src/shared/entities";
import React from "react";
import { formatDate } from "../../utils";

const INITIAL_STATE = {
  category: "",
  date: formatDate(new Date())!,
  description: "",
  duration: 0.15,
  id: "",
  isDone: false,
};

export const useTask = () => {
  const [task, setTask] = React.useState<ITask>(INITIAL_STATE);

  const setTaskProperty = (key: keyof ITask, value: string) => {
    setTask((prev) => ({ ...prev, [key]: value }));
  };

  const setWholeTask = (task: ITask) => {
    setTask(() => ({ ...task }));
  };

  const toggleTask = () => {
    setTask((prev) => ({ ...prev, isDone: !prev.isDone }));
  };

  const getTask = () => {
    return task;
  };

  const isTaskValid = () => {
    return (
      !!task.category && !!task.date && !!task.description && !!task.duration
    );
  };

  const resetTask = () => {
    setTask(() => INITIAL_STATE);
  };

  return {
    toggleTask,
    getTask,
    setTaskProperty,
    isTaskValid,
    resetTask,
    setWholeTask,
  };
};
