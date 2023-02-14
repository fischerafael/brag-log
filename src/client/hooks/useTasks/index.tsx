import { ITask } from "@/src/shared/entities";
import * as Recoil from "recoil";
import { generateUUID } from "../../utils";

const tasksState = Recoil.atom<ITask[]>({
  key: "tasks",
  default: [],
});

export const useTasks = () => {
  const [tasks, setTasks] = Recoil.useRecoilState<ITask[]>(tasksState);

  const addTask = (task: ITask) => {
    const taskWithId: ITask = { ...task, id: generateUUID() };
    setTasks((state) => [...state, taskWithId]);
  };

  const removeTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(() => updatedTasks);
  };

  const getTasks = (): ITask[] => {
    return tasks;
  };

  const resetTasks = () => {
    setTasks(() => []);
  };

  return {
    addTask,
    removeTask,
    getTasks,
    resetTasks,
  };
};
