import { ITask } from "@/src/shared/entities";
import { useState } from "react";
import { formatDate } from "../../utils";

export const useTasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [task, setTask] = useState<ITask>({
    category: [],
    date: new Date(),
    description: "",
    duration: 0,
    id: "",
    isDone: false,
  });

  const handleSetTask = (key: keyof ITask, value: string) => {
    setTask((prev) => ({ ...prev, [key]: value }));
  };

  return {
    state: {
      task: task,
      tasks: tasks,
    },
    methods: {
      handleSetTask: handleSetTask,
    },
  };
};
