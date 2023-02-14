import { ITask } from "@/src/shared/entities";
import { useState } from "react";
import * as Recoil from "recoil";
import { formatDate } from "../../utils";

const taskState = Recoil.atom<ITask>({
  key: "task",
  default: {
    category: "",
    date: formatDate(new Date())!,
    description: "",
    duration: 0.15,
    id: "",
    isDone: false,
  },
});

export const useTasks = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [task, setTask] = Recoil.useRecoilState<ITask>(taskState);

  const handleSetTask = (key: keyof ITask, value: string) => {
    setTask((prev) => ({ ...prev, [key]: value }));
  };

  const handleToggleTask = () => {
    setTask((prev) => ({ ...prev, isDone: !prev.isDone }));
  };

  console.log(task);

  return {
    state: {
      task: task,
      tasks: tasks,
    },
    methods: {
      handleSetTask: handleSetTask,
      handleToggleTask: handleToggleTask,
    },
  };
};
